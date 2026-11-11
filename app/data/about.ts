import type { AboutCard, CareerStat, Skill } from "@/app/types";

export const stats: CareerStat[] = [
  {
    value: "8+ Yrs",
    label: "Total Experience",
    sublabel: "Intuit & Viasat Engineering",
    icon: "fa-line-chart",
    href: "#experience",
    highlight: true,
  },
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
    sublabel: "SWE I -> SWE II -> Senior SWE I",
    icon: "fa-arrow-up",
    href: "#experience",
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
    value: "Full Stack",
    label: "Python & React 18",
    sublabel: "FastAPI, Next.js & TS",
    icon: "fa-code",
    href: "#experience",
  },
  {
    value: "0 Visa",
    label: "Sponsorship Needed",
    sublabel: "Authorized to Work (US)",
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
    icon: "fa-code",
    title: "Enterprise Full-Stack Architecture",
    desc: "Production web applications, AI-powered RAG pipelines, and transactional microservices engineered with Python 3.12, FastAPI, React 18, Next.js, TypeScript, and AWS with sub-200ms semantic search.",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Python & FastAPI",
    label: "Python 3.12 & FastAPI",
    color: "#06B6D4",
    icon: "fa-terminal",
    shortDescription:
      "FastAPI, Django, Flask, Pydantic, Celery, SQLAlchemy, asynchronous event pipelines",
  },
  {
    name: "React & TS",
    label: "React 18 & TypeScript",
    color: "#38BDF8",
    icon: "fa-code",
    shortDescription:
      "React 18, Next.js, TypeScript, Tailwind CSS, TanStack Query, Redux, WebSockets",
  },
  {
    name: "Enterprise AI",
    label: "AI Systems & RAG",
    color: "#8B5CF6",
    icon: "fa-database",
    shortDescription:
      "FAISS, Hugging Face Transformers, vector embeddings, prompt engineering, PII guardrails",
  },
  {
    name: "AWS",
    label: "AWS Cloud & IaC",
    color: "#F59E0B",
    icon: "fa-cloud",
    shortDescription:
      "ECS Fargate, RDS Multi-AZ, Terraform, CloudFormation, CloudWatch, S3, IAM",
  },
  {
    name: "Databases",
    label: "PostgreSQL & Redis",
    color: "#EC4899",
    icon: "fa-database",
    shortDescription:
      "PostgreSQL, Redis distributed caching, Flyway schema migrations, MySQL Multi-AZ",
  },
  {
    name: "Kubernetes",
    label: "Docker & Kubernetes",
    color: "#3B82F6",
    icon: "fa-cubes",
    shortDescription:
      "Containerized microservices, multi-stage builds, pod lifecycles, Docker Compose",
  },
  {
    name: "DevOps",
    label: "CI/CD & DevOps",
    color: "#10B981",
    icon: "fa-cogs",
    shortDescription:
      "GitHub Actions, Jenkins Groovy pipelines, automated regression suites, GitOps",
  },
  {
    name: "Security",
    label: "Identity & Zero-Trust",
    color: "#F97316",
    icon: "fa-shield",
    shortDescription:
      "OAuth 2.0 / SAML, Okta MSAL, TLS/SSL automation, automated PII sanitization filters",
  },
];
