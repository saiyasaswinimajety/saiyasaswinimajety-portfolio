export interface Certification {
  name: string;
  issuer: string;
  badge?: string;
  icon?: string;
  iconColor?: string;
  metric?: string;
  url?: string;
  date?: string;
}

export const certifications: Certification[] = [
  {
    name: "Indian Patent Published: Modular Deep Learning Architecture",
    issuer: "Indian Patent Office (IPO 202541026299)",
    icon: "fa-certificate",
    iconColor: "#F59E0B",
    metric: "Parameter-Efficient Adapter Routing",
    url: "https://search.patentassist.ai/?mode=smart&office=ipo&q=Modular+Deep+Learning+Architecture+for+Cross-Domain+Transfer+and+Incremental+Learning&patent=202541026299",
    date: "March 2025",
  },
  {
    name: "Dean's Merit Scholarship: Academic Distinction",
    issuer: "SASTRA Deemed University",
    icon: "fa-graduation-cap",
    iconColor: "#0EA5E9",
    metric: "Top 3% Percentile (1,200+ Cohort)",
    date: "2016-2017",
  },
  {
    name: "1st Place Winner: Real-Time Fleet Telemetry Pipeline",
    issuer: "Viasat IoT & Cloud Telemetry Hackathon",
    icon: "fa-trophy",
    iconColor: "#FBBF24",
    metric: "1st of 24 Engineering Teams",
    date: "2019",
  },
  {
    name: "Viasat Spotlight Award: Automated TLS/SSL Edge Security",
    issuer: "Viasat Core Infrastructure Group",
    icon: "fa-shield",
    iconColor: "#10B981",
    metric: "Zero-Outage SLA: 150+ Edge Gateways",
    date: "2023",
  },
  {
    name: "Architecture Commendation: Zero-Trust Identity Gateway",
    issuer: "Viasat Architecture & Security Committee",
    icon: "fa-key",
    iconColor: "#818CF8",
    metric: "Multi-Tenant Okta & OAuth 2.0 Federation",
    date: "2022",
  },
  {
    name: "Five-Nines SLA (99.999%): Zero-Downtime AWS Cloud Migration",
    issuer: "Viasat Platform Operations",
    icon: "fa-cloud",
    iconColor: "#38BDF8",
    metric: "99.999% Telemetry Uptime: 45% Compute Cut",
    date: "2022",
  },
];
