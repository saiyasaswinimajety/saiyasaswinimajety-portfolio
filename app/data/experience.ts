import type { Job } from "@/app/types";

export const jobs: Job[] = [
  {
    company: "Independent Research",
    logo: "/img/companies/research.svg",
    role: "AI Systems & Cloud Infrastructure Researcher",
    period: "Mar 2024 – Present",
    location: "Houston, TX (Remote)",
    desc: "Co-authored and published Indian Patent 202541026299 for modular deep learning architectures while engineering high-throughput RAG microservices and cloud infrastructure automation.",
    stack:
      "Python, FastAPI, Docker, Terraform, AWS ECS/EKS, LiteLLM, Vector Stores",
    overview:
      "Conducting applied systems research across modular neural architectures, retrieval-augmented generation (RAG), and cloud-native infrastructure automation during US permanent relocation.",
    highlights: [
      {
        label: "Patent Co-Inventor",
        detail:
          "Published patent 'Modular Deep Learning Architecture for Cross-Domain Transfer and Incremental Learning' (IPO App. 202541026299). Designed dynamic adapter routing to eliminate catastrophic forgetting.",
      },
      {
        label: "GenAI & RAG Microservices",
        detail:
          "Engineered high-throughput RAG microservices using FastAPI, LiteLLM proxy routing, semantic vector caching, and Dockerized deployment workflows.",
      },
      {
        label: "Declarative Cloud Automation",
        detail:
          "Authored infrastructure-as-code modules in Terraform for automated multi-tier cloud deployments with strict security boundary validation.",
      },
    ],
    metrics: [
      "1 Published Patent (IPO 202541026299)",
      "80% compute reduction in incremental fine-tuning",
      "No Visa Sponsorship Needed (H-4 EAD Approved)",
    ],
    stackList: [
      "Python",
      "FastAPI",
      "Docker",
      "Terraform",
      "AWS ECS",
      "LiteLLM",
      "Vector Databases",
    ],
    problemStatement:
      "Enterprise deep learning models suffer from catastrophic forgetting and prohibitive retraining costs when transferring across domains, while LLM application pipelines face high latency and lack semantic caching.",
    solutions: [
      {
        title: "Modular Transfer Mechanism (MTM)",
        desc: "Designed parameter-efficient adapter projections that isolate domain gradients while keeping foundational weights frozen.",
      },
      {
        title: "Semantic Vector Caching Layer",
        desc: "Built low-latency vector cache in FastAPI, bounding P95 response times to sub-20ms for recurring enterprise semantic queries.",
      },
    ],
  },
  {
    company: "Viasat Inc.",
    logo: "/img/companies/viasat.svg",
    role: "Senior Software Engineer - I (Backend & Cloud Infrastructure)",
    period: "Jan 2023 – Feb 2024",
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
      "Promoted to Senior Software Engineer - I (Effective Jan 1, 2023)",
    ],
    recognition: [
      "Viasat Spotlight Award: Automated Certificate Lifecycle Management",
      "Architecture Commendation: Decoupled OAuth 2.0 Gateway Routing",
      "Senior SWE - I Promotion (Effective Jan 1, 2023)",
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
        title: "Automated Certificate Lifecycle Manager",
        desc: "Engineered automated daemon validating SSL/TLS certificates and rotating credentials before expiration, eliminating manual operational bottlenecks.",
      },
      {
        title: "Multi-AZ Database Schema Migration Engine",
        desc: "Designed rolling schema migration strategy for AWS RDS MySQL clusters, preserving data consistency across continuous active flights.",
      },
    ],
  },
  {
    company: "Viasat Inc.",
    logo: "/img/companies/viasat.svg",
    role: "Software Engineer II (Cloud Platform & API Microservices)",
    period: "Jan 2021 – Dec 2022",
    location: "Chennai, India",
    desc: "Accelerated multi-region cloud deployment velocity by 65% (from 4 hours to 45 minutes MTTR) by authoring modular AWS CloudFormation IaC templates and scripted Jenkins Groovy CI/CD pipelines. Elevated automated test coverage across billing and telemetry paths to >92% with Pytest.",
    stack:
      "Python, AWS CloudFormation, Jenkins, Groovy, Docker, Pytest, AWS RDS, Linux, Bash",
    overview:
      "Promoted to Software Engineer II to drive cloud infrastructure automation, CI/CD pipeline modernization, and automated test reliability across Commercial Air platform microservices.",
    highlights: [
      {
        label: "Infrastructure as Code (IaC) Velocity",
        detail:
          "Accelerated deployment velocity by 65% (from 4 hours to 45 minutes MTTR) by authoring modular AWS CloudFormation IaC templates and declarative Jenkins CI/CD pipelines.",
      },
      {
        label: "Automated Regression Test Harnesses",
        detail:
          "Elevated automated test coverage across critical billing, telemetry, and authentication paths from 60% to >92% by architecting automated Pytest suites and mock network failure harnesses.",
      },
      {
        label: "Database High Availability & Disaster Recovery",
        detail:
          "Engineered automated database backup validation, failover health checks, and cross-region replication monitoring across enterprise AWS RDS instances.",
      },
    ],
    metrics: [
      "65% reduction in deployment cycle latency (4 hours to 45 mins)",
      ">92% automated test coverage across critical microservices",
      "Awarded 2021 Mark Dankberg CEO & Chairman Performance Bonus",
      "Promoted to Software Engineer II (Effective Jan 1, 2021)",
    ],
    recognition: [
      "2021 Chairman & CEO Mark Dankberg Performance Award",
      "Software Engineer II Promotion (Effective Jan 1, 2021)",
    ],
    stackList: [
      "Python",
      "AWS CloudFormation",
      "Jenkins",
      "Groovy",
      "Docker",
      "Pytest",
      "AWS RDS",
      "Linux",
      "Bash",
    ],
    problemStatement:
      "Manual infrastructure provisioning and fragmented test suites created 4-hour deployment release delays and regression risks across multi-region commercial air deployments.",
    solutions: [
      {
        title: "Modular CloudFormation Orchestration",
        desc: "Designed standardized infrastructure-as-code templates with parameter-driven multi-environment parity between staging and production.",
      },
      {
        title: "Automated Failure Simulation Test Harness",
        desc: "Authored Pytest harnesses injecting network dropouts, rate-limiting, and bad authentication handshakes to validate edge microservice resilience.",
      },
    ],
  },
  {
    company: "Viasat Inc.",
    logo: "/img/companies/viasat.svg",
    role: "Software Engineer I (Distributed Systems & Tooling Automation)",
    period: "Jun 2018 – Dec 2020",
    location: "Chennai, India",
    desc: "Built Commercial Air PAT (Pipeline & Telemetry Observability) dashboard in Flask and React, reducing release cycle verification latency by 40%. Standardized pre-merge Groovy regression pipelines across 50+ Jenkins nodes, and optimized CandEx 2.0 full-text search in Sphinx & Django (<180ms queries).",
    stack:
      "Python, Flask, React, Jenkins, Groovy, Robot Framework, MariaDB, Docker, Linux",
    overview:
      "Joined Viasat full-time following campus recruitment. Engineered telemetry dashboards, automated pre-merge regression verification suites, and contributed to internal talent search platforms.",
    highlights: [
      {
        label: "Pipeline Observability (PAT)",
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
      "Full-Time Campus SWE I Appointment (Jun 4, 2018)",
    ],
    recognition: [
      "1st Place Winner: Viasat IoT Global Hackathon (2019)",
      "Full-Time SWE I Appointment (Jun 4, 2018)",
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
    role: "Software Engineer Intern (Talent Systems & Search Automation)",
    period: "Jan 2018 – May 2018",
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
      "Converted to Full-Time Software Engineer I upon graduation",
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
