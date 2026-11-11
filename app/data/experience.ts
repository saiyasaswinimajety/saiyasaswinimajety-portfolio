import type { Job } from "@/app/types";

export const jobs: Job[] = [
  {
    company: "Intuit",
    logo: "/img/companies/intuit.svg",
    role: "Senior Full Stack Developer (Contractor)",
    period: "Sep 2024 - Present",
    location: "Mountain View, CA (Remote)",
    desc: "Architected and delivered scalable backend microservices, asynchronous RESTful APIs, and responsive enterprise dashboards using Python (FastAPI, Flask), React 18, Next.js, and TypeScript. Implemented enterprise Retrieval-Augmented Generation (RAG) pipelines with FAISS and Hugging Face transformer embeddings for sub-200ms semantic document retrieval, integrated automated PII sanitization filters, and built real-time WebSocket monitoring dashboards.",
    stack:
      "Python 3.12, FastAPI, Flask, React 18, Next.js, TypeScript, PostgreSQL, Redis, Celery, FAISS, Hugging Face, Docker, AWS (ECS, S3, RDS), GitHub Actions, Tailwind CSS",
    overview:
      "Driving full stack development and enterprise AI integration for financial intelligence workflows. Architecting high-throughput FastAPI microservices, contextual RAG pipelines over complex tax and policy documentation, dynamic React analytics interfaces, and asynchronous background worker queues.",
    highlights: [
      {
        label: "Asynchronous Microservices & REST APIs",
        detail:
          "Engineered high-throughput backend microservices and asynchronous RESTful APIs using Python 3.12 (FastAPI, Flask) and Pydantic, supporting concurrent financial data processing with sub-25ms response latencies.",
      },
      {
        label: "Enterprise AI & RAG Retrieval Pipelines",
        detail:
          "Implemented production Retrieval-Augmented Generation (RAG) pipelines using FAISS vector indexing and Hugging Face transformer embeddings, delivering sub-200ms semantic search across enterprise tax, compliance, and policy documentation.",
      },
      {
        label: "Automated PII Protection & LLM Guardrails",
        detail:
          "Architected LLM integration layers with contextual chunking, structured prompt validation, and automated PII redaction filters ensuring regulatory privacy compliance before vector indexing.",
      },
      {
        label: "Component-Driven React 18 & Next.js Portals",
        detail:
          "Developed dynamic single-page web applications and responsive operational dashboards in React 18, Next.js, TypeScript, and Tailwind CSS with real-time WebSocket state management.",
      },
      {
        label: "Distributed Task Pipelines & Database Optimization",
        detail:
          "Designed asynchronous background worker queues using Celery and Redis for non-blocking document ingestion and optimized PostgreSQL queries via SQLAlchemy connection pooling, cutting query latency by 35%.",
      },
    ],
    metrics: [
      "Sub-200ms semantic retrieval across enterprise document repositories",
      "35% reduction in PostgreSQL database query latency",
      "85%+ automated test coverage across critical backend APIs and UI components",
      "No Visa Sponsorship Required (Authorized to Work in US)",
    ],
    stackList: [
      "Python 3.12",
      "FastAPI",
      "React 18",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Celery",
      "FAISS",
      "Hugging Face",
      "Docker",
      "AWS ECS",
      "Tailwind CSS",
    ],
    problemStatement:
      "Enterprise financial operations required unified semantic search and real-time document intelligence across distributed tax and policy data repositories, while preserving strict PII compliance and sub-second SLA latency.",
    solutions: [
      {
        title: "Enterprise RAG Semantic Search Architecture",
        desc: "Integrated FAISS vector database with Hugging Face sentence transformers and asynchronous FastAPI endpoints, enabling precise contextual search with automated PII redaction.",
      },
      {
        title: "Real-Time WebSocket Operational Dashboard",
        desc: "Constructed dynamic React 18 dashboard streaming background Celery worker execution states and financial data ingestion telemetry via bi-directional WebSockets.",
      },
    ],
  },
  {
    company: "Independent Research",
    logo: "/img/companies/research.svg",
    role: "Lead Systems & Cloud Infrastructure Researcher",
    period: "Mar 2024 - Present",
    location: "Houston, TX (Remote)",
    desc: "Architected asynchronous microservices in Java 21, Spring Boot 3.2, and Python alongside interactive full stack exploratory portals in React 18 and TypeScript with Dockerized AWS deployments.",
    stack:
      "Java 21, Spring Boot 3.2, React 18, TypeScript, PostgreSQL 16, Redis, Docker, AWS ECS Fargate, Terraform",
    overview:
      "Conducting applied systems research across high-throughput distributed microservices, React single-page analytics interfaces, and cloud-native infrastructure automation.",
    highlights: [
      {
        label: "Java 21 & Spring Boot Microservices",
        detail:
          "Architected asynchronous microservice APIs and distributed caching proxies using Java 21, Spring Boot 3.2, and Redis, achieving sub-15ms P99 latency while sustaining 12,000+ req/sec under peak loads.",
      },
      {
        label: "React 18 & TypeScript Portals",
        detail:
          "Developed full stack exploratory portals in React 18 and TypeScript with TanStack Query and dynamic vector similarity dashboards, validated with Playwright and Jest suites.",
      },
      {
        label: "Declarative Cloud Automation",
        detail:
          "Architected containerized microservices deployments on AWS (ECS Fargate, RDS PostgreSQL 16, S3, IAM) utilizing Terraform Infrastructure-as-Code and automated GitHub Actions CI/CD pipelines.",
      },
    ],
    metrics: [
      "12,000+ req/sec sustained throughput",
      "Sub-15ms P99 caching latency",
      "No Visa Sponsorship Needed",
    ],
    stackList: [
      "Java 21",
      "Spring Boot 3.2",
      "React 18",
      "TypeScript",
      "PostgreSQL 16",
      "Redis",
      "Docker",
      "AWS ECS",
      "Terraform",
    ],
    problemStatement:
      "High-throughput enterprise API gateways face severe tail latency degradation under burst traffic, while distributed teams lack real-time observability portals and declarative infrastructure automation.",
    solutions: [
      {
        title: "High-Throughput Reactive Microservices",
        desc: "Engineered non-blocking request pipelines and Redis caching proxies in Java 21 and Spring Boot, bounding P99 latency to sub-15ms.",
      },
      {
        title: "Component-Driven React 18 Observability",
        desc: "Built responsive single-page portals in React 18 and TypeScript, providing operators with live latency heatmaps and real-time telemetry streams.",
      },
    ],
  },
  {
    company: "Viasat Inc.",
    logo: "/img/companies/viasat.svg",
    role: "Senior Software Engineer - I (Full-Time Direct Hire)",
    period: "Jan 2023 - Feb 2024",
    location: "Chennai, India",
    desc: "Spearheaded Commercial Aviation ground-to-air microservices and real-time fleet telemetry, scaling platform availability to 99.99% across 1,000+ commercial aircraft (Delta Air Lines). Executed zero-downtime Multi-AZ RDS MySQL upgrades and automated enterprise TLS/SSL certificate lifecycles across 500+ edge gateways.",
    stack:
      "Python, FastAPI, AWS (ECS, RDS Aurora/MySQL), CloudFormation, Redis, MySQL, OAuth 2.0, Okta, Palo Alto, Aruba",
    overview:
      "Led senior backend architecture and cloud reliability engineering across Viasat's flagship Commercial Aviation platform. Delivered 99.99% network uptime across commercial airline fleets, automated enterprise security gateways, and executed multi-terabyte zero-downtime database upgrades.",
    highlights: [
      {
        label: "Commercial Air Network Access",
        detail:
          "Scaled real-time passenger portal and telemetry API microservices to 99.99% uptime across 1,000+ commercial aircraft (Delta Air Lines) with asynchronous Python FastAPI gateways and distributed Redis caching.",
      },
      {
        label: "Zero-Downtime Multi-AZ Database Migrations",
        detail:
          "Executed live schema migrations across multi-terabyte AWS RDS MySQL clusters (v5.6 to 5.7 and 8.0) with zero customer downtime and zero data loss.",
      },
      {
        label: "Enterprise Security & TLS Automation",
        detail:
          "Automated enterprise TLS/SSL certificate lifecycle across 500+ edge gateways (Viasat Spotlight Award) and decoupled OAuth 2.0 / SAML identity routing (reducing partner onboarding from 3 weeks to 2 days).",
      },
      {
        label: "High-Assurance Telemetry Resiliency",
        detail:
          "Hardened in-flight fleet connectivity across intermittent satellite links by implementing exponential backoff retry algorithms, store-and-forward edge queues, and synthetic health-check heartbeats.",
      },
    ],
    metrics: [
      "99.99% in-flight network availability across 1,000+ aircraft",
      "500+ edge endpoints automated with zero-outage certificate renewals",
      "Viasat Spotlight Award & Architecture Commendation recipient",
      "Promoted to Senior Software Engineer - I (Full-Time Direct Hire)",
    ],
    recognition: [
      "Viasat Spotlight Award: Automated Certificate Lifecycle Management",
      "Architecture Commendation: Decoupled OAuth 2.0 Gateway Routing",
      "Senior SWE - I Promotion (Full-Time Direct Hire)",
    ],
    stackList: [
      "Python",
      "FastAPI",
      "AWS ECS",
      "AWS RDS",
      "CloudFormation",
      "Redis",
      "MySQL",
      "OAuth 2.0",
      "Palo Alto Firewalls",
      "Aruba Networks",
      "Pytest",
    ],
    problemStatement:
      "Commercial in-flight broadband networks require sub-second access control, strict compliance, multi-aircraft telemetry synchronization, and zero downtime across global satellite transitions.",
    solutions: [
      {
        title: "Edge Resilience & Telemetry Buffering",
        desc: "Engineered Python store-and-forward edge queueing services caching operational metrics locally on the aircraft during orbital handoffs.",
      },
      {
        title: "Automated Certificate Lifecycle Daemon",
        desc: "Developed a Python daemon automating TLS/SSL certificate verification, revocation, and renewal across 500+ edge gateways.",
      },
    ],
  },
  {
    company: "Viasat Inc.",
    logo: "/img/companies/viasat.svg",
    role: "Software Engineer II (Full-Time Direct Hire)",
    period: "Jan 2021 - Dec 2022",
    location: "Chennai, India",
    desc: "Led microservices API design, cloud migration, and developer productivity tooling across Viasat cloud platform. Won CEO Performance Award (2021) for outstanding contribution to platform reliability.",
    stack:
      "Python, Django, AWS, Docker, Kubernetes, PostgreSQL, Jenkins, Groovy, Redis, OpenAPI, REST APIs",
    overview:
      "Designed and deployed cloud-native backend services, unified internal developer platforms, and built distributed observability pipelines across multi-team engineering orgs.",
    highlights: [
      {
        label: "Distributed API Microservices",
        detail:
          "Architected 15+ containerized Python microservices on AWS ECS, implementing clean domain-driven architecture and asynchronous message queues.",
      },
      {
        label: "Internal Developer Platform (CandEx 2.0)",
        detail:
          "Scaled centralized talent platform to 500+ internal users with Sphinx full-text search indexing 10,000+ profiles with sub-180ms query times.",
      },
      {
        label: "CI/CD & Pipeline Modernization",
        detail:
          "Reduced build and deployment cycle times by 40% across 50+ Jenkins nodes by authoring reusable Groovy pipeline shared libraries.",
      },
      {
        label: "CEO Recognition & Focal Bonus",
        detail:
          "Selected by executive leadership for the 2021 Viasat CEO Discretionary Performance Award for high-impact infrastructure delivery.",
      },
    ],
    metrics: [
      "15+ production microservices deployed to AWS ECS",
      "40% reduction in CI/CD pipeline verification latency",
      "Viasat CEO Discretionary Performance Award (2021)",
      "Promoted to Software Engineer II (Full-Time Direct Hire)",
    ],
    recognition: [
      "Viasat CEO Discretionary Performance Award (2021)",
      "Executive Merit Promotion to Software Engineer II (Full-Time Direct Hire)",
    ],
    stackList: [
      "Python",
      "Django",
      "AWS",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Jenkins",
      "Groovy",
      "Redis",
      "OpenAPI",
    ],
    problemStatement:
      "Engineering teams faced fragmented developer tooling, unstandardized deployment pipelines, and high onboarding friction across distributed microservices.",
    solutions: [
      {
        title: "Standardized CI/CD Shared Libraries",
        desc: "Authored modular Jenkins Groovy libraries incorporating automated security scanning, container image signing, and deployment smoke tests.",
      },
      {
        title: "Unified Service Registry & API Docs",
        desc: "Built automated OpenAPI documentation aggregator enabling real-time schema validation and interactive API exploration for engineering teams.",
      },
    ],
  },
  {
    company: "Viasat Inc.",
    logo: "/img/companies/viasat.svg",
    role: "Software Engineer I (Full-Time Direct Hire)",
    period: "Jun 2018 - Dec 2020",
    location: "Chennai, India",
    desc: "Built full-stack internal developer tools, pipeline automation, and automated test frameworks. Won 1st Place in the Viasat Global IoT Hackathon (2019) among 24 international engineering teams.",
    stack:
      "Python, Flask, React, Jenkins, Groovy, Robot Framework, MariaDB, Linux, Bash",
    overview:
      "Joined Viasat full-time following campus recruitment. Engineered telemetry dashboards, automated pre-merge regression verification suites, and contributed to internal talent search platforms.",
    highlights: [
      {
        label: "Pipeline Observability Dashboard (PAT)",
        detail:
          "Engineered real-time pipeline observability dashboard in React and Python Flask aggregating telemetry, build execution times, and open defect trends across 50+ Jenkins nodes.",
      },
      {
        label: "Pre-Merge Regression Verification",
        detail:
          "Standardized release quality gates by programming automated pre-merge regression verification pipelines in Groovy, preventing breaking API regressions from reaching staging.",
      },
      {
        label: "End-to-End Test Automation",
        detail:
          "Authored comprehensive regression test suites spanning frontend UI and backend handshakes using Robot Framework, executing 100+ automated test scenarios per release candidate.",
      },
      {
        label: "Global IoT Hackathon Winner",
        detail:
          "Won 1st place in Viasat Global IoT Hackathon (2019) for designing an edge telemetry prototyping solution.",
      },
    ],
    metrics: [
      "40% reduction in release cycle verification latency",
      "100+ automated regression test scenarios per release candidate",
      "1st Place Winner - Viasat IoT Global Hackathon (2019)",
      "Full-Time Campus SWE I Direct Hire Appointment (Jun 4, 2018)",
    ],
    recognition: [
      "1st Place Winner: Viasat IoT Global Hackathon (2019)",
      "Full-Time SWE I Direct Hire Appointment (Jun 4, 2018)",
    ],
    stackList: [
      "Python",
      "Flask",
      "React",
      "Jenkins",
      "Groovy",
      "Robot Framework",
      "MariaDB",
      "Linux",
    ],
    problemStatement:
      "Release engineers lacked centralized visibility into build health and test failure patterns across 50+ distributed Jenkins nodes, delaying weekly release sign-offs.",
    solutions: [
      {
        title: "Real-Time Telemetry Dashboard (PAT)",
        desc: "Built full-stack React and Flask dashboard polling Jenkins API webhooks to visualize live build pass rates and flaky test frequencies.",
      },
      {
        title: "Standardized Groovy Quality Gates",
        desc: "Implemented automated quality gates blocking merges if test coverage dropped or regressions were detected on critical paths.",
      },
    ],
  },
  {
    company: "Viasat Inc.",
    logo: "/img/companies/viasat.svg",
    role: "Software Engineer Intern (Full-Time Direct Hire Internship)",
    period: "Jan 2018 - May 2018",
    location: "Chennai, India",
    desc: "Architected and deployed 'CandEx 2.0', an automated enterprise recruitment and candidate evaluation platform adopted across Viasat HR and technical hiring teams with Sphinx full-text search across 10,000+ candidate profiles.",
    stack:
      "Python, Django, Angular, MongoDB, Sphinx Search Engine, Apache Solr, MariaDB, REST APIs",
    overview:
      "Undergraduate capstone internship with Viasat Inc. Built full-stack recruitment automation platform streamlining candidate ingestion, resume parsing, and interview scheduling. Recognized with formal Viasat Leadership Appreciation.",
    highlights: [
      {
        label: "Full-Text Search Engine",
        detail:
          "Integrated Sphinx Search Engine and Apache Solr with Python Django microservices, cutting query latency from 3.2s to <180ms across 10,000+ candidate profiles.",
      },
      {
        label: "Bulk Ingestion Pipeline",
        detail:
          "Built high-throughput bulk resume parsing workflows in Django, automating candidate ingestion and interview invitation dispatches.",
      },
      {
        label: "Relational Schema Optimization",
        detail:
          "Designed relational schemas and indexed queries in MariaDB, supporting concurrent multi-recruiter workflows with zero locking contention.",
      },
    ],
    metrics: [
      "Sub-second search (<180ms) across 10,000+ candidate resumes",
      "Formal Leadership Appreciation Award for CandEx 2.0 delivery",
      "Converted to Full-Time Software Engineer I Direct Hire upon graduation",
    ],
    recognition: ["Viasat Leadership Appreciation Award: CandEx 2.0 Platform"],
    stackList: [
      "Python",
      "Django",
      "Angular",
      "Sphinx",
      "MongoDB",
      "Apache Solr",
      "MariaDB",
      "REST APIs",
    ],
    problemStatement:
      "Recruiters faced multi-second query delays and manual data entry bottlenecks when searching through tens of thousands of candidate resumes for technical hiring.",
    solutions: [
      {
        title: "Sphinx Full-Text Indexing Engine",
        desc: "Configured inverted index with stemming and n-gram indexing in Sphinx, delivering sub-second keyword search across PDF/DOC resumes.",
      },
      {
        title: "Automated Ingestion Pipeline",
        desc: "Engineered background worker queue in Django processing incoming applicant archives and synchronizing status flags in real-time.",
      },
    ],
  },
];
