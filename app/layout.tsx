import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { publications } from "@/app/data";
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
  metadataBase: new URL("https://saiyasaswinimajety.github.io"),
  title: {
    default:
      "Sai Yasaswini Majety - Senior Backend & Cloud Infrastructure Engineer",
    template: "%s - Sai Yasaswini Majety",
  },
  description:
    "Senior Backend & Cloud Infrastructure Engineer with 6+ years shipping high-availability distributed systems, in-flight fleet telemetry engines, and enterprise developer platforms. Ex-Senior Software Engineer at Viasat and co-inventor of published Indian Patent 202541026299. H-4 EAD approved.",
  keywords: [
    "Sai Yasaswini Majety",
    "Yasaswini Majety",
    "saiyasaswinimajety",
    "Viasat Senior Software Engineer",
    "Senior Backend Engineer",
    "Cloud Infrastructure Engineer",
    "Distributed Systems Engineer",
    "Commercial Aviation Connectivity",
    "In-Flight Telemetry Ingestion",
    "AWS ECS",
    "AWS RDS",
    "PostgreSQL",
    "FastAPI",
    "Django",
    "Python",
    "Golang",
    "Docker",
    "Kubernetes",
    "HashiCorp Vault",
    "TLS Certificate Automation",
    "OAuth 2.0",
    "Okta",
    "Modular Deep Learning",
    "Indian Patent 202541026299",
    "SASTRA University",
    "H-4 EAD",
    "No Visa Sponsorship Needed",
  ],
  authors: [
    {
      name: "Sai Yasaswini Majety",
      url: "https://saiyasaswinimajety.github.io",
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
    canonical: "https://saiyasaswinimajety.github.io",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saiyasaswinimajety.github.io",
    siteName: "Sai Yasaswini Majety - Portfolio",
    title:
      "Sai Yasaswini Majety - Senior Backend & Cloud Infrastructure Engineer",
    description:
      "Senior Backend & Cloud Infrastructure Engineer. Ex-Viasat (6 years), Co-Inventor of Published Indian Patent 202541026299, and architect of distributed in-flight fleet telemetry pipelines. H-4 EAD.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Yasaswini Majety - Senior Backend & Cloud Infrastructure Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sai Yasaswini Majety - Senior Backend & Cloud Infrastructure Engineer",
    description:
      "Senior Backend & Cloud Infrastructure Engineer. Ex-Viasat (6 years), Indian Patent 202541026299 Co-Inventor. H-4 EAD.",
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
        <link rel="canonical" href="https://saiyasaswinimajety.github.io" />
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
              url: "https://saiyasaswinimajety.github.io",
              image: "https://saiyasaswinimajety.github.io/img/avatar.jpg",
              email: "mailto:yasaswini7777@gmail.com",
              jobTitle: "Senior Backend & Cloud Infrastructure Engineer",
              description:
                "Senior Backend & Cloud Infrastructure Engineer with 6+ years shipping production distributed systems, in-flight fleet telemetry engines, and enterprise developer platforms. Ex-Senior Software Engineer at Viasat and co-inventor of published Indian Patent 202541026299. H-4 EAD approved.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Houston",
                addressRegion: "TX",
                addressCountry: "United States",
              },
              knowsLanguage: ["English", "Telugu", "Hindi"],
              knowsAbout: [
                "Backend Engineering",
                "Distributed Systems",
                "Cloud Infrastructure",
                "AWS Cloud Architecture (ECS, RDS, CloudFormation)",
                "In-Flight Telemetry Ingestion",
                "FastAPI",
                "Django",
                "Python",
                "Golang",
                "PostgreSQL",
                "Docker",
                "Kubernetes",
                "HashiCorp Vault",
                "OAuth 2.0 & Okta",
                "TLS/SSL Automation",
                "Modular Deep Learning",
                "Parameter-Efficient Adapter Architectures",
              ],
              sameAs: [
                "https://www.linkedin.com/in/sai-yasaswini-majety-88548a125/",
                "https://github.com/saiyasaswinimajety",
                "https://search.patentassist.ai/?mode=smart&office=ipo&q=Modular+Deep+Learning+Architecture+for+Cross-Domain+Transfer+and+Incremental+Learning&patent=202541026299",
                "https://saiyasaswinimajety.github.io",
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
                    "AI Systems & Cloud Infrastructure Researcher - Dynamic Adapter Architectures, Patent Co-Inventor",
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
              url: "https://saiyasaswinimajety.github.io",
              description:
                "Portfolio of Sai Yasaswini Majety - Senior Backend & Cloud Infrastructure Engineer. Ex-Viasat (6 years) and co-inventor of published Indian Patent 202541026299.",
              author: {
                "@type": "Person",
                name: "Sai Yasaswini Majety",
                url: "https://saiyasaswinimajety.github.io",
              },
            }),
          }}
        />
        {/* Schema.org Publications / Patents */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              publications.map((pub) => ({
                "@context": "https://schema.org",
                "@type":
                  pub.type === "patent" ? "CreativeWork" : "ScholarlyArticle",
                name: pub.title,
                author: pub.authors.split(",").map((a) => ({
                  "@type": "Person",
                  name: a.trim(),
                })),
                datePublished: pub.year,
                publisher: pub.publisher
                  ? { "@type": "Organization", name: pub.publisher }
                  : undefined,
                url: pub.links[0]?.url,
              })),
            ),
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
