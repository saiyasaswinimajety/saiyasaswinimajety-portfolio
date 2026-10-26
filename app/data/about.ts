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
    value: "Full Stack",
    label: "Java 21 & React 18",
    sublabel: "Spring Boot 3.2 & TypeScript",
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
    desc: "Production web applications and transactional REST microservices engineered with Java 21, Spring Boot 3.2, React 18, TypeScript, and PostgreSQL 16 with zero-downtime schema migrations.",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Java & Spring",
    label: "Java 21 & Spring Boot",
    color: "#F97316",
    icon: "fa-coffee",
    shortDescription:
      "Spring Boot 3.2, Spring Data JPA, Hibernate, Temporal SDK, Spring Security",
  },
  {
    name: "React & TS",
    label: "React 18 & TypeScript",
    color: "#38BDF8",
    icon: "fa-code",
    shortDescription:
      "React 18, TypeScript, TanStack Query, Next.js, Zod, RouteGuard security",
  },
  {
    name: "Databases",
    label: "PostgreSQL & Flyway",
    color: "#EC4899",
    icon: "fa-database",
    shortDescription:
      "PostgreSQL 16, idempotent Flyway DDL migrations, immutable audit triggers, Redis",
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
    name: "Python",
    label: "Python & Microservices",
    color: "#06B6D4",
    icon: "fa-terminal",
    shortDescription:
      "FastAPI, Django, Pytest, Pandas, asynchronous event streaming pipelines",
  },
  {
    name: "Kubernetes",
    label: "Docker & Kubernetes",
    color: "#3B82F6",
    icon: "fa-cubes",
    shortDescription:
      "Containerized microservices, OpenShift, multi-stage builds, pod lifecycles",
  },
  {
    name: "DevOps",
    label: "CI/CD & DevOps",
    color: "#10B981",
    icon: "fa-cogs",
    shortDescription:
      "Jenkins Groovy pipelines, GitHub Actions, automated regression suites, GitOps",
  },
  {
    name: "Security",
    label: "Identity & Zero-Trust",
    color: "#8B5CF6",
    icon: "fa-shield",
    shortDescription:
      "OAuth 2.0 / SAML, Okta MSAL, TLS/SSL automation, immutable audit logging",
  },
];
