import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// Environment-driven base URL: works locally, on staging, and in production.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://newtonadhikari.cc.cd";

const SITE_NAME = "Newton Adhikari";
const TITLE = "Newton Adhikari | Passionate Full Stack Developer, AI Enthusiast & CSE Student";
const DESCRIPTION =
  "Futuristic Technical Developer Newton Adhikari — CSE student, AI developer, and future researcher building next-generation intelligent systems.";

// viewport is a separate export in modern Next.js (App Router).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030014" },
    { media: "(prefers-color-scheme: light)", color: "#030014" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: `${SITE_NAME} Portfolio`,
  keywords: [
    "Newton Adhikari",
    "AI Portfolio",
    "CSE Student",
    "Artificial Intelligence and Machine Learning Developer",
    "Full Stack Developer",
    "Android Developer",
    "Machine Learning Engineer",
    "Neural Networks",
    "Deep Learning",
    "Next.js Developer",
    "AI Researcher",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: { "en-US": SITE_URL },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description:
      "CSE student, Full Stack Web & App Developer, AI developer, and future researcher building next-generation intelligent systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Newton Adhikari — Passionate AI Developer & CSE Student",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@newton_adhi2722",
    creator: "@newton_adhi2722",
    title: TITLE,
    description: "AI developer building next-generation intelligent systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-name.png", type: "image/png" },
    ],
    shortcut: "/logo-name.png",
    apple: "/logo-name.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "dSVmtyvenEEbKg7Rzz-c9EhnNE0eO4il60dpaaKvKo4",
  },
};

//Website Schema: tells search engines about your website and how to search it. Important for SEO and discoverability.
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,

  name: SITE_NAME,
  alternateName: "Newton Adhikari Portfolio",

  url: SITE_URL,

  description:
    "Official portfolio website of Newton Adhikari, a Computer Science Engineering student, AI developer, Full Stack Developer, and future researcher building intelligent systems.",

  inLanguage: "en-US",

  author: {
    "@type": "Person",
    "@id": `${SITE_URL}#person`,
  },

  publisher: {
    "@type": "Person",
    "@id": `${SITE_URL}#person`,
  },
};


// Person schema: tells search engines who you are and links your social profiles.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}#person`,

  name: SITE_NAME,
  givenName: "Newton",
  familyName: "Adhikari",

  alternateName: [
    "Newton",
    "Adhikari",
    "Newton Adhikari AI Developer",
    "Newton Adhikari Full Stack Developer",
    "Newton Adhikari Portfolio",
  ],

  jobTitle: "AI Developer, Full Stack Developer, and CSE Student",

  description: DESCRIPTION,

  url: SITE_URL,

  image: `${SITE_URL}/og-image.png`,

  nationality: {
    "@type": "Country",
    name: "Nepal",
  },

  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Guru Nanak Institute of Technology, Hyderabad",
  },

  sameAs: [
    "https://github.com/NewtonAdhikari",
    "https://www.linkedin.com/in/newton-adhikari",
    "https://www.instagram.com/victorix_newton",
    "https://twitter.com/newton_adhi2722",
    "https://www.facebook.com/newton.adhikari.501510",
    "https://www.researchgate.net/profile/Newton-Adhikari-3",
    "https://orcid.org/my-orcid?orcid=0009-0007-1826-0918",
    "https://scholar.google.com/citations?user=f9tFraEAAAAJ&hl=en",
  ],

  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Neural Networks",
    "Generative AI",
    "Computer Vision",
    "Natural Language Processing",
    "Full Stack Web Development",
    "Next.js",
    "React.js",
    "TypeScript",
    "Node.js",
    "Android Development",
    "Cloud Computing",
    "Cybersecurity",
    "Blockchain Technology",
    "AI Research",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to font CDNs for faster first paint (Core Web Vitals). */}
        <meta name="google-site-verification" content="dSVmtyvenEEbKg7Rzz-c9EhnNE0eO4il60dpaaKvKo4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
          __html: JSON.stringify([
           websiteSchema,
          personSchema
          ])
      }}
      />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ background: "#030014", color: "#e0e0e0" }}
      >
        {children}
      </body>
    </html>
  );
}
