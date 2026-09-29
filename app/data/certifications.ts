export interface Certification {
  name: string;
  issuer: string;
  badge: string;
  url?: string;
  date?: string;
}

export const certifications: Certification[] = [
  {
    name: "Indian Patent Published: Modular Deep Learning Architecture (202541026299)",
    issuer: "Indian Patent Office (IPO)",
    badge: "/img/badges/patent.png",
    url: "https://search.patentassist.ai/?mode=smart&office=ipo&q=Modular+Deep+Learning+Architecture+for+Cross-Domain+Transfer+and+Incremental+Learning&patent=202541026299",
    date: "March 2025",
  },
  {
    name: "Dean's Merit Scholarship (Top 3% Academic Distinction)",
    issuer: "SASTRA Deemed University",
    badge: "/img/badges/scholarship.png",
    date: "2016-2017",
  },
  {
    name: "1st Place Winner: Viasat IoT & Cloud Telemetry Hackathon",
    issuer: "Viasat Engineering",
    badge: "/img/badges/trophy.png",
    date: "2019",
  },
  {
    name: "Viasat Spotlight Award: Automated TLS/SSL Edge Security",
    issuer: "Viasat Core Infrastructure Group",
    badge: "/img/badges/spotlight.png",
    date: "2023",
  },
  {
    name: "Architecture Commendation: OAuth 2.0 & Enterprise Identity Gateway",
    issuer: "Viasat Architecture & Security Committee",
    badge: "/img/badges/architecture.png",
    date: "2022",
  },
  {
    name: "Engineering Excellence: Zero-Downtime Cloud Migration",
    issuer: "Viasat Platform Operations",
    badge: "/img/badges/cloud.png",
    date: "2022",
  },
];
