import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saiyasaswini.me"),
  title: {
    default:
      "Sai Yasaswini Majety - Senior Full Stack Developer | Enterprise Cloud & Distributed Systems",
    template: "%s - Sai Yasaswini Majety",
  },
  description:
    "Senior Full Stack Developer with 6+ years shipping mission-critical distributed systems, high-throughput Java 21 / Spring Boot microservices, React 18 & TypeScript portals, and enterprise cloud architectures. Ex-Senior Software Engineer at Viasat (6 years, 2 CEO Bonuses).",
  keywords: [
    "Sai Yasaswini Majety",
    "Yasaswini Majety",
    "saiyasaswinimajety",
    "Senior Full Stack Developer",
    "Senior Full Stack Engineer",
    "Senior Backend Engineer",
    "Java 21",
    "Spring Boot 3.2",
    "React 18",
    "TypeScript",
    "PostgreSQL 16",
    "Temporal SDK",
    "AWS ECS",
    "AWS RDS Multi-AZ",
    "Flyway",
    "Docker",
    "Kubernetes",
    "Microservices",
    "Distributed Systems",
    "Viasat Senior Software Engineer",
    "Commercial Aviation Connectivity",
    "OAuth 2.0",
    "Okta MSAL",
    "SASTRA University",
    "No Visa Sponsorship Needed",
  ],
  authors: [
    {
      name: "Sai Yasaswini Majety",
      url: "https://saiyasaswini.me",
    },
  ],
  creator: "Sai Yasaswini Majety",
  publisher: "Sai Yasaswini Majety",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "https://saiyasaswini.me",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saiyasaswini.me",
    siteName: "Sai Yasaswini Majety - Portfolio",
    title:
      "Sai Yasaswini Majety - Senior Full Stack Developer | Enterprise Cloud & Distributed Systems",
    description:
      "Senior Full Stack Developer with 6+ years shipping mission-critical distributed systems, Java 21 / Spring Boot microservices, React 18 portals, and high-availability cloud platforms. Ex-Viasat (6 years, 2 CEO Bonuses).",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Yasaswini Majety - Senior Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sai Yasaswini Majety - Senior Full Stack Developer | Enterprise Cloud & Distributed Systems",
    description:
      "Senior Full Stack Developer. Ex-Viasat (6 years, 2 CEO Bonuses), architect of high-availability Java 21 / Spring Boot microservices, React 18 portals, and cloud platforms.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#18BC9C" />
        <meta name="author" content="Sai Yasaswini Majety" />
        <link rel="canonical" href="https://saiyasaswini.me" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/* Schema.org Person metadata */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sai Yasaswini Majety",
              alternateName: ["Yasaswini Majety", "saiyasaswinimajety"],
              url: "https://saiyasaswini.me",
              image: "https://saiyasaswini.me/img/profile.jpeg",
              email: "mailto:yasaswini7777@gmail.com",
              jobTitle: "Senior Full Stack Developer",
              description:
                "Senior Full Stack Developer with 6+ years shipping mission-critical distributed systems, Java 21 / Spring Boot microservices, React 18 & TypeScript enterprise web applications, and high-availability cloud platforms. Ex-Senior Software Engineer at Viasat.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Houston",
                addressRegion: "TX",
                addressCountry: "United States",
              },
              knowsLanguage: ["English", "Telugu", "Hindi"],
              knowsAbout: [
                "Full Stack Development",
                "Java 21",
                "Spring Boot 3.2",
                "React 18",
                "TypeScript",
                "PostgreSQL 16",
                "Temporal SDK",
                "Distributed Systems",
                "Cloud Infrastructure",
                "AWS Cloud Architecture (ECS, RDS, CloudFormation)",
                "In-Flight Telemetry Ingestion",
                "Flyway Schema Migrations",
                "Docker",
                "Kubernetes",
                "OAuth 2.0 & Okta",
                "TLS/SSL Automation",
              ],
              sameAs: [
                "https://www.linkedin.com/in/saiyasaswinimajety/",
                "https://github.com/saiyasaswinimajety",
                "https://saiyasaswini.me",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Independent Applied Systems Research",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Shanmugha Arts, Science, Technology & Research Academy (SASTRA Deemed University)",
                  department: "Electrical and Electronics Engineering",
                },
              ],
              award: [
                "1st Place Winner: Viasat IoT Global Hackathon",
                "Viasat Leadership Commendation: Certificate Automation",
                "Viasat Engineering Award: OAuth 2.0 Security Migration",
                "Dean's Merit Scholarship (Top 3% Academic Cohort)",
              ],
              workExperience: [
                {
                  "@type": "Organization",
                  name: "Viasat Inc.",
                  description:
                    "Senior Software Engineer - Commercial In-Flight Fleet Telemetry, TLS/SSL Automation Daemon, Zero-Downtime Multi-AZ Cloud Migration",
                },
                {
                  "@type": "Organization",
                  name: "Independent Applied Systems Research",
                  description:
                    "Lead Systems Researcher - Full Stack & Distributed Microservices Architecture",
                },
              ],
            }),
          }}
        />
        {/* Schema.org WebSite metadata */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sai Yasaswini Majety",
              url: "https://saiyasaswini.me",
              description:
                "Portfolio of Sai Yasaswini Majety - Senior Full Stack Developer. Ex-Viasat (6 years, 2 CEO Bonuses).",
              author: {
                "@type": "Person",
                name: "Sai Yasaswini Majety",
                url: "https://saiyasaswini.me",
              },
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-lato), sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
