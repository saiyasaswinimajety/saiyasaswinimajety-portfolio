export type ProjectTag = { name: string; color: string };

export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  github?: string;
  deploy?: string;
}

export const projects: Project[] = [
  {
    name: "CandEx 2.0: Internal Developer Platform & Documentation Hub",
    description:
      "Architected and owned the central enterprise developer portal and automated API catalog serving 500+ software engineers across Viasat. Built with Django, Angular, Sphinx, and PostgreSQL, containerized with Docker on AWS ECS. Reduced new-engineer onboarding ramp time by 65% and unified documentation across 60+ distributed services.",
    tags: [
      { name: "django", color: "#38BDF8" },
      { name: "angular", color: "#38BDF8" },
      { name: "postgresql", color: "#38BDF8" },
      { name: "sphinx", color: "#94A3B8" },
      { name: "docker", color: "#38BDF8" },
      { name: "aws-ecs", color: "#94A3B8" },
    ],
    image: "/img/appreciations/Screenshot 2024-02-12 at 11.24.33 AM.png",
  },
  {
    name: "Modular Deep Learning Adapter Framework (Indian Patent 202541026299)",
    description:
      "Engineered a novel parameter-efficient adapter framework enabling foundation models to transfer representations dynamically across disparate cross-domain distributions without catastrophic forgetting. Published with the Indian Patent Office (IPO). Features inter-layer routing adapters and catastrophic forgetting mitigation algorithms.",
    tags: [
      { name: "pytorch", color: "#38BDF8" },
      { name: "modular-dl", color: "#38BDF8" },
      { name: "patent", color: "#9b59b6" },
      { name: "transfer-learning", color: "#38BDF8" },
      { name: "huggingface", color: "#94A3B8" },
    ],
    image: "/img/patent/patent-page.png",
    deploy:
      "https://search.patentassist.ai/?mode=smart&office=ipo&q=Modular+Deep+Learning+Architecture+for+Cross-Domain+Transfer+and+Incremental+Learning&patent=202541026299",
  },
  {
    name: "In-Flight Telemetry Ingestion & Real-Time Fleet Pipeline",
    description:
      "Designed high-throughput telemetry ingestion backend streaming connectivity health data from thousands of commercial aircraft in flight. Ingests 25M+ events daily with sub-second dashboard query latencies on AWS ECS, Kafka, and PostgreSQL. Supported 99.99% connectivity uptime SLAs for commercial airline carriers.",
    tags: [
      { name: "python", color: "#38BDF8" },
      { name: "fastapi", color: "#38BDF8" },
      { name: "aws-ecs", color: "#38BDF8" },
      { name: "kafka", color: "#94A3B8" },
      { name: "postgresql", color: "#38BDF8" },
      { name: "telemetry", color: "#94A3B8" },
    ],
    image: "/img/appreciations/RBO_scorecard_appreciation.png",
  },
  {
    name: "Automated TLS/SSL Certificate Lifecycle Engine",
    description:
      "Engineered automated certificate provisioning and rotation engine across 150+ microservice endpoints using HashiCorp Vault and Let's Encrypt / DigiCert APIs. Replaced manual multi-day renewal procedures with automated hot-reloading, eliminating certificate expiration outage risk completely.",
    tags: [
      { name: "python", color: "#38BDF8" },
      { name: "hashicorp-vault", color: "#38BDF8" },
      { name: "tls-ssl", color: "#38BDF8" },
      { name: "devops", color: "#94A3B8" },
      { name: "automation", color: "#94A3B8" },
    ],
    image: "/img/appreciations/cert_automation_appreciation.png",
  },
  {
    name: "Enterprise Multi-Tenant OAuth 2.0 & Okta Identity Hub",
    description:
      "Architected federated authentication and authorization gateway securing external airline client portals. Implemented dynamic token exchange, custom claims validation, and granular role-based access control (RBAC), satisfying strict aerospace enterprise cybersecurity compliance.",
    tags: [
      { name: "oauth2.0", color: "#38BDF8" },
      { name: "okta", color: "#38BDF8" },
      { name: "security", color: "#38BDF8" },
      { name: "jwt", color: "#94A3B8" },
      { name: "rbac", color: "#94A3B8" },
    ],
    image: "/img/appreciations/oauth_flexibility_appreciation.png",
  },
  {
    name: "IoT Smart Telemetry & Gateway Monitor",
    description:
      "Hardware and cloud IoT monitoring solution capturing environmental and electrical distribution parameters via MQTT with real-time alerting. Won 1st Place in Viasat IoT Hackathon and served as the foundation for undergraduate research capstone at SASTRA University.",
    tags: [
      { name: "iot", color: "#38BDF8" },
      { name: "mqtt", color: "#38BDF8" },
      { name: "python", color: "#38BDF8" },
      { name: "microcontrollers", color: "#94A3B8" },
      { name: "hackathon-winner", color: "#10B981" },
    ],
    image: "/img/appreciations/VMS_appreciation.png",
  },
];
