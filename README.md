# Newton Adhikari --- Personal Portfolio

[![Live
Website](https://img.shields.io/badge/Live%20Website-newtonadhikari.cc.cd-00d9ff?style=for-the-badge)](https://newtonadhikari.cc.cd)
[![Portfolio](https://img.shields.io/badge/Portfolio-Personal%20Website-7c3aed?style=for-the-badge)](https://newtonadhikari.cc.cd)

A personal developer and research portfolio showcasing Newton Adhikari's
background, technical skills, academic journey, software projects,
research interests, certifications, and contact information.

**Live website:** https://newtonadhikari.cc.cd/

------------------------------------------------------------------------

## Overview

The portfolio presents Newton as a Computer Science and Engineering
student, full-stack developer, AI enthusiast, and aspiring researcher.
Its visual direction uses a futuristic, AI-inspired interface with a
technology-focused identity.

The website is intended to provide visitors, collaborators, recruiters,
and academic contacts with a single place to explore professional work
and get in touch.

## Website Sections

-   **Home** --- Introductory hero section, short professional
    statement, portfolio statistics, resume link, and social links.
-   **About** --- Personal introduction, career vision, AI interests,
    research interests, and community involvement.
-   **Skills** --- Technical skills and tools across frontend, backend,
    AI/ML, databases, and development infrastructure.
-   **Education** --- Academic history, institutions, qualifications,
    and academic highlights.
-   **Projects** --- Selected software and research-oriented projects
    with descriptions, technology tags, GitHub links, and demo links
    where provided.
-   **Research** --- Published, patent-related, and under-publication
    research work.
-   **Certifications** --- Professional and academic credentials.
-   **Contact** --- Contact form for project inquiries, research
    collaboration, and other messages.

## Featured Projects

The live portfolio currently highlights projects including:

1.  **A Hybrid Reinforcement Learning for End-to-End Supply Chain
    Management** --- A reinforcement-learning-based approach to
    inventory, demand forecasting, production planning, and logistics
    coordination.
2.  **Education Operating System** --- An integrated education platform
    for learning management, academic administration, student
    engagement, and institutional analytics.
3.  **Intelligent GPS Tracking & Fleet Monitoring System** --- A fleet
    platform covering live tracking, route optimization, geofencing,
    travel history, and asset management.
4.  **Enterprise Email Authentication & Identity Verification Platform**
    --- An identity platform featuring email verification, JWT
    authorization, password recovery, OTP validation, and role-based
    access control.
5.  **Smart Event Registration & Attendance Management System** --- A
    registration and attendance workflow with Google Sheets integration.
6.  **Intelligent Voice-Based AI Assistant** --- A conversational
    assistant concept involving voice commands, speech-to-text,
    natural-language processing, and automation.

See the live website for the latest project descriptions, repository
links, and demonstrations.

## Research Highlights

The research section of the portfolio includes:

-   **Performance and Security Analysis of Blockchain-Based
    Decentralized Cloud Storage Systems** --- Listed as published
    research.
-   **A Hybrid Reinforcement Learning Framework for End-to-End Supply
    Chain Management** --- Listed under patent.
-   **Decision-Calibrated Probabilistic Learning for Cost-Sensitive and
    Risk-Aware Decision Making** --- Listed as under publication.

Refer to the portfolio for the current publication and project status.

## Technology

The portfolio's published skills and technology areas include:

  -----------------------------------------------------------------------
  Area                                Technologies listed on the
                                      portfolio
  ----------------------------------- -----------------------------------
  Frontend                            HTML5, CSS3, JavaScript, React,
                                      Next.js, TypeScript

  Backend                             Node.js, Go, Express

  AI / Machine Learning               TensorFlow, PyTorch

  Databases                           MongoDB, PostgreSQL

  DevOps / Tools                      Docker, Git, Linux

  Additional interests                GraphQL, WebSocket, OpenCV, NLP,
                                      BERT, GANs, Blockchain, IPFS, D3.js
  -----------------------------------------------------------------------

> This table reflects technologies presented on the portfolio. It is not
> a claim that every listed technology is a runtime dependency of this
> website.

## Contact Form

The portfolio includes a contact form for visitors to send inquiries.

The contact workflow is designed around a Google Apps Script web app and
Google Sheets:

1.  The visitor completes the contact form.
2.  The website sends the submission to the Apps Script web app.
3.  The backend validates and sanitizes the submitted fields.
4.  The submission is stored in the `Submissions` spreadsheet.
5.  An email notification is sent to the portfolio owner.
6.  A confirmation email is sent to the visitor.
7.  Email attempt statuses are recorded in the spreadsheet.

The Apps Script backend uses server-side validation, a shared request
token, duplicate detection, and per-email rate limiting. Email sending
requires the Apps Script project to be authorized with the appropriate
mail scope.

### Contact backend configuration

The Apps Script configuration includes:

-   Spreadsheet tab: `Submissions`
-   Owner notification address: configured in the Apps Script `CONFIG`
-   Website URL: `https://newtonadhikari.cc.cd`
-   Request token: configured on both the website and Apps Script
    backend

**Security note:** A token embedded in client-side website code is
visible to visitors and should not be treated as a secret or as strong
authentication. Keep privileged credentials on the server, validate all
incoming requests, and apply appropriate abuse protection.

## Local Development

The public website identifies technologies such as React, Next.js, and
TypeScript, but the live site alone does not expose the repository's
exact package manager, scripts, environment variable names, or directory
structure.

To run the project locally:

1.  Clone the project repository.
2.  Install the dependencies using the package manager specified by the
    repository lockfile.
3.  Configure the environment variables required by the application.
4.  Run the development command defined in `package.json`.
5.  Open the local URL printed by the development server.

For example, if the repository is a Next.js project using npm, the
commands may look like:

``` bash
git clone <your-repository-url>
cd <project-directory>
npm install
npm run dev
```

Use these commands only if they match the actual repository
configuration. Check `package.json` for the authoritative scripts and
dependencies.

## Deployment

The portfolio is publicly available at:

**https://newtonadhikari.cc.cd/**

For future deployments, configure the hosting provider with the
project's actual build command, output settings, and environment
variables. If the contact form uses Google Apps Script, deploy the Apps
Script web app with the intended execution identity and access settings,
authorize its required scopes, and update the website's endpoint
configuration when the deployment URL changes.

## Customization

Portfolio content such as projects, skills, education, research entries,
certifications, and social links should be updated in the source or
content-management workflow used by the repository.

Before publishing changes:

-   Verify all project and social links.
-   Check that resume downloads work.
-   Test the contact form from the deployed website.
-   Confirm that submissions appear in Google Sheets.
-   Verify both owner and visitor email flows.
-   Test the layout on mobile and desktop.
-   Review accessibility, metadata, and page performance.

## Author

**Newton Adhikari**\
Computer Science & Engineering Student · Full-Stack Developer · AI
Enthusiast · Aspiring Researcher

-   Website: https://newtonadhikari.cc.cd/
-   GitHub: https://github.com/
-   LinkedIn: https://www.linkedin.com/

> Replace the generic GitHub and LinkedIn profile URLs above with the
> exact profile URLs from the website before publishing this README.

## License

No repository license was verified from the public website. Add a
`LICENSE` file and update this section if you intend to distribute the
source code under an open-source license.
