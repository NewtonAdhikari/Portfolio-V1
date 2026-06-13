import { NextRequest, NextResponse } from "next/server";

/**
 * Contact Form API — forwards submissions to Google Sheets via Apps Script
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet with columns: Timestamp, Name, Email, Subject, Message
 * 2. Go to Extensions → Apps Script
 * 3. Paste the following code:
 *
 *   function doPost(e) {
 *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     var data = JSON.parse(e.postData.contents);
 *     sheet.appendRow([
 *       new Date().toLocaleString(),
 *       data.name,
 *       data.email,
 *       data.subject,
 *       data.message
 *     ]);
 *     return ContentService.createTextOutput(
 *       JSON.stringify({ result: 'success' })
 *     ).setMimeType(ContentService.MimeType.JSON);
 *   }
 *
 * 4. Deploy → New deployment → Web app → Anyone can access
 * 5. Copy the deployment URL
 * 6. Set the environment variable GOOGLE_SHEET_WEBHOOK_URL in your .env.local:
 *    GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ID/exec
 *
 * If the webhook URL is not set, submissions are logged to console only.
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Get Google Sheets webhook URL from environment
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (webhookUrl) {
      // Forward to Google Sheets via Apps Script Web App
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: name.slice(0, 200),
          email: email.slice(0, 200),
          subject: (subject || "").slice(0, 500),
          message: message.slice(0, 5000),
        }),
      });

      if (!response.ok) {
        console.error("Google Sheets webhook failed:", response.status);
        // Still return success to user — we don't want to leak backend details
      }
    } else {
      // No webhook configured — log to console for development
      console.log("📩 Contact form submission (no Google Sheet configured):");
      console.log({ name, email, subject, message });
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! I will get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
