import type { AboutCard, CareerStat, Skill } from "@/app/types";

export const stats: CareerStat[] = [
  {
    value: "9",
    label: "Appreciations",
    sublabel: "CEO, Spotlight & Spot Awards",
    icon: "fa-trophy",
    href: "#recognition",
    highlight: true,
  },
  {
    value: "2",
    label: "Promotions",
    sublabel: "SWE I → SWE II → Senior SWE I",
    icon: "fa-line-chart",
    href: "#experience",
    highlight: true,
  },
  {
    value: "2",
    label: "Performance Bonuses",
    sublabel: "CEO Dankberg & Focal Awards",
    icon: "fa-gift",
    href: "#recognition",
    highlight: true,
  },
  {
    value: "5.7+ Yrs",
    label: "Tenure @ Viasat",
    sublabel: "Aviation Systems Engineering",
    icon: "fa-building-o",
    href: "#experience",
  },
  {
    value: "1 Patent",
    label: "Modular DL Research",
    sublabel: "IPO Published (202541026299)",
    icon: "fa-lightbulb-o",
    href: "#publications",
  },
  {
    value: "0 Visa",
    label: "Sponsorship Needed",
    sublabel: "Authorized to Work (H-4 EAD)",
    icon: "fa-check-circle",
    href: "#contact",
  },
];

export const cards: AboutCard[] = [
  {
    icon: "fa-cloud",
    title: "Cloud Infrastructure & IaC",
    desc: "Production deployments on AWS (ECS, RDS Multi-AZ, CloudFormation, S3, IAM, CloudWatch) with zero-drift declarative configuration.",
  },
  {
    icon: "fa-plane",
    title: "Commercial Aviation Networks",
    desc: "Automated telemetry, access control, and telemetry pipelines powering in-flight broadband connectivity for major airline fleets (Delta Air Lines).",
  },
  {
    icon: "fa-cogs",
    title: "DevOps & CI/CD Pipelines",
    desc: "Engineered automated Jenkins & Groovy pipelines, reducing deployment cycle times by 65% with strict pre-release regression gates.",
  },
  {
    icon: "fa-lightbulb-o",
    title: "Deep Learning & Patent Research",
    desc: "Co-inventor on published Indian Patent 202541026299 for modular deep learning architectures with parameter-efficient adapter routing.",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Python",
    label: "Python",
    color: "#38BDF8",
    icon: "fa-code",
    shortDescription:
      "FastAPI, Flask, Django, Pytest, Pandas, asynchronous microservices",
  },
  {
    name: "AWS",
    label: "AWS Cloud",
    color: "#F59E0B",
    icon: "fa-cloud",
    shortDescription:
      "ECS, RDS Multi-AZ, CloudFormation, CloudWatch, S3, IAM, VPC",
  },
  {
    name: "Kubernetes",
    label: "Kubernetes & Docker",
    color: "#3B82F6",
    icon: "fa-cubes",
    shortDescription:
      "Containerized microservices, pod lifecycles, Docker multi-stage builds",
  },
  {
    name: "DevOps",
    label: "CI/CD & DevOps",
    color: "#10B981",
    icon: "fa-cogs",
    shortDescription:
      "Jenkins scripted pipelines, Groovy, automated regression suites, GitOps",
  },
  {
    name: "Go",
    label: "Go (Golang)",
    color: "#06B6D4",
    icon: "fa-terminal",
    shortDescription:
      "High-concurrency microservices, network telemetry endpoints, CLI tools",
  },
  {
    name: "Networking",
    label: "Network Security & SD-WAN",
    color: "#8B5CF6",
    icon: "fa-shield",
    shortDescription:
      "Aruba Controllers, Palo Alto firewalls, Silver Peak SD-WAN, OAuth 2.0, SSL/TLS",
  },
  {
    name: "Databases",
    label: "Databases & Storage",
    color: "#EC4899",
    icon: "fa-database",
    shortDescription:
      "AWS RDS MySQL/PostgreSQL, zero-downtime schema migrations, MariaDB, Redis",
  },
  {
    name: "AI & RAG",
    label: "GenAI & Modular DL",
    color: "#A855F7",
    icon: "fa-brain",
    shortDescription:
      "Dynamic adapter routing, parameter-efficient transfer, RAG pipelines, LiteLLM",
  },
];
