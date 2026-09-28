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
    "Senior Backend & Cloud Infrastructure Engineer with 6+ years shipping high-availability distributed systems, in-flight fleet telemetry engines, and enterprise developer platforms. Ex-Senior Software Engineer at Viasat and co-inventor of published Indian Patent 202541026299.",
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
  ],
  authors: [{ name: "Sai Yasaswini Majety" }],
  creator: "Sai Yasaswini Majety",
  publisher: "Sai Yasaswini Majety",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saiyasaswinimajety.github.io",
    siteName: "Sai Yasaswini Majety - Portfolio",
    title:
      "Sai Yasaswini Majety - Senior Backend & Cloud Infrastructure Engineer",
    description:
      "Senior Backend & Cloud Infrastructure Engineer. Ex-Viasat (6 years), Co-Inventor of Published Indian Patent 202541026299, and architect of distributed in-flight fleet telemetry pipelines.",
    images: [
      {
        url: "/img/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Sai Yasaswini Majety",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sai Yasaswini Majety - Senior Backend & Cloud Infrastructure Engineer",
    description:
      "Senior Backend & Cloud Infrastructure Engineer. Ex-Viasat, Indian Patent 202541026299 Co-Inventor.",
    images: ["/img/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <head>
        <link rel="canonical" href="https://saiyasaswinimajety.github.io" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
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
                "Senior Backend & Cloud Infrastructure Engineer with 6+ years shipping production distributed systems, in-flight fleet telemetry engines, and enterprise developer platforms. Ex-Senior Software Engineer at Viasat and co-inventor of published Indian Patent 202541026299.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Houston",
                addressRegion: "TX",
                addressCountry: "United States",
              },
              knowsAbout: [
                "Backend Engineering",
                "Distributed Systems",
                "Cloud Infrastructure",
                "AWS Cloud Architecture",
                "In-Flight Telemetry Ingestion",
                "FastAPI",
                "Django",
                "Python",
                "PostgreSQL",
                "Docker",
                "Kubernetes",
                "HashiCorp Vault",
                "OAuth 2.0 & Okta",
                "Modular Deep Learning",
                "Parameter-Efficient Adapter Architectures",
              ],
              sameAs: [
                "https://www.linkedin.com/in/sai-yasaswini-majety-88548a125/",
                "https://github.com/saiyasaswinimajety",
                "https://search.patentassist.ai/?mode=smart&office=ipo&q=Modular+Deep+Learning+Architecture+for+Cross-Domain+Transfer+and+Incremental+Learning&patent=202541026299",
              ],
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Shanmugha Arts, Science, Technology & Research Academy (SASTRA Deemed University)",
                  department: "Electrical and Electronics Engineering",
                },
              ],
              workExperience: [
                {
                  "@type": "Organization",
                  name: "Viasat Inc.",
                  description:
                    "Senior Software Engineer - In-Flight Fleet Telemetry, Certificate Automation, Monolith to Microservices Cloud Migration",
                },
              ],
            }),
          }}
        />
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
