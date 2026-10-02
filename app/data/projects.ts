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
    name: "Real-Time Geospatial Critical Infrastructure Monitoring SaaS",
    description:
      "Cloud-native real-time geospatial SaaS platform engineered in Python (FastAPI) and PostgreSQL/PostGIS. Ingests high-frequency environmental sensor telemetry (seismic vibration, SO2 gas concentrations, flood stage levels) across 10,000+ spatial coordinates, serves dynamic sub-500ms Mapbox vector tiles (ST_AsMVT), and triggers automated maintenance work orders in IBM Maximo and SAP PM.",
    tags: [
      { name: "fastapi", color: "#38BDF8" },
      { name: "postgis", color: "#38BDF8" },
      { name: "mapbox-gl", color: "#38BDF8" },
      { name: "postgresql", color: "#38BDF8" },
      { name: "ibm-maximo", color: "#94A3B8" },
      { name: "sap-pm", color: "#94A3B8" },
      { name: "docker", color: "#10B981" },
    ],
    image: "/img/slideshow/slide_1_hero_cloud_platform.png",
    github:
      "https://github.com/saiyasaswinimajety/geospatial-infrastructure-monitoring-saas",
  },
  {
    name: "Edge Store-and-Forward Telemetry Daemon",
    description:
      "Lightweight, crash-consistent edge telemetry queueing and synchronization daemon in Python for airborne servers and embedded Linux IoT gateways. Guarantees zero data loss across intermittent satellite and cellular handovers using SQLite WAL ring-buffering and reduces uplink bandwidth consumption by 65% via streaming Zstandard compression.",
    tags: [
      { name: "python", color: "#38BDF8" },
      { name: "sqlite-wal", color: "#38BDF8" },
      { name: "zstandard", color: "#38BDF8" },
      { name: "embedded-linux", color: "#94A3B8" },
      { name: "systemd", color: "#94A3B8" },
      { name: "resilience", color: "#10B981" },
    ],
    image: "/img/slideshow/slide_3_fleet_telemetry_scale.png",
    github: "https://github.com/saiyasaswinimajety/edge-telemetry-daemon",
  },
  {
    name: "Enterprise LLM Gateway & Semantic Caching Microservice",
    description:
      "High-throughput OpenAI-compatible enterprise LLM routing proxy with two-layer exact and semantic vector caching over Redis. Intercepts API queries, bounds P95 retrieval to sub-20ms, cuts downstream model token expenditures by 60%, and enforces multi-tenant rate limits and cost accounting.",
    tags: [
      { name: "python", color: "#38BDF8" },
      { name: "fastapi", color: "#38BDF8" },
      { name: "redis-vector", color: "#38BDF8" },
      { name: "semantic-cache", color: "#38BDF8" },
      { name: "pydantic-v2", color: "#94A3B8" },
      { name: "docker", color: "#10B981" },
    ],
    image: "/img/slideshow/slide_5_tech_stack_ecosystem.png",
    github: "https://github.com/saiyasaswinimajety/enterprise-llm-gateway",
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
];
