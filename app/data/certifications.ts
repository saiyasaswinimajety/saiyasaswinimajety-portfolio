export interface Certification {
  name: string;
  issuer: string;
  badge: string;
  metric?: string;
  url?: string;
  date?: string;
}

export const certifications: Certification[] = [
  {
    name: "Enterprise Full Stack Systems Architecture",
    issuer: "Viasat Engineering & Platform Operations",
    badge: "/img/badges/architecture.png",
    metric: "Java 21, Spring Boot & React Microservices",
    date: "2023",
  },
  {
    name: "Dean's Merit Scholarship: Academic Distinction",
    issuer: "SASTRA Deemed University",
    badge: "/img/badges/scholarship.png",
    metric: "Top 3% Percentile (1,200+ Cohort)",
    date: "2016-2017",
  },
  {
    name: "1st Place Winner: Real-Time Fleet Telemetry Pipeline",
    issuer: "Viasat IoT & Cloud Telemetry Hackathon",
    badge: "/img/badges/trophy.png",
    metric: "1st of 24 Engineering Teams",
    date: "2019",
  },
  {
    name: "Viasat Spotlight Award: Automated TLS/SSL Edge Security",
    issuer: "Viasat Core Infrastructure Group",
    badge: "/img/badges/spotlight.png",
    metric: "Zero-Outage SLA: 150+ Edge Gateways",
    date: "2023",
  },
  {
    name: "Architecture Commendation: Zero-Trust Identity Gateway",
    issuer: "Viasat Architecture & Security Committee",
    badge: "/img/badges/architecture.png",
    metric: "Multi-Tenant Okta & OAuth 2.0 Federation",
    date: "2022",
  },
  {
    name: "Five-Nines SLA (99.999%): Zero-Downtime AWS Cloud Migration",
    issuer: "Viasat Platform Operations",
    badge: "/img/badges/cloud-sync.png",
    metric: "99.999% Telemetry Uptime: 45% Compute Cut",
    date: "2022",
  },
];
