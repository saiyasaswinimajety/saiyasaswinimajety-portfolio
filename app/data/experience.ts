import type { Job } from "@/app/types";

export const jobs: Job[] = [
  {
    company: "Independent Research",
    logo: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
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
      "0 visa sponsorship required (Approved H-4 EAD)",
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
    logo: "https://logo.clearbit.com/viasat.com",
    role: "Senior Software Engineer (DevOps & System Integration)",
    period: "Jun 2018 – Feb 2024",
    location: "Chennai, India",
    desc: "Spearheaded cloud infrastructure, backend microservices, and network automation for global commercial in-flight broadband networks serving commercial airline fleets worldwide (including Delta Air Lines).",
    stack:
      "Python, AWS (RDS, ECS, CloudFormation), Jenkins, Groovy, Docker, Go, MySQL, Aruba, Palo Alto",
    overview:
      "Led end-to-end backend and cloud automation for Viasat's Commercial Aviation platform. Delivered 99.99% availability across airborne network gateways, automated multi-environment AWS deployments, and executed live zero-downtime database upgrades.",
    highlights: [
      {
        label: "Commercial Air Network Access",
        detail:
          "Engineered resilient backend microservices in Python FastAPI and Go, delivering low-latency service management and authentication across in-flight networks.",
      },
      {
        label: "CI/CD Pipeline Automation",
        detail:
          "Authored modular AWS CloudFormation templates and scripted Jenkins Groovy pipelines, reducing deployment cycle times by 65%.",
      },
      {
        label: "Zero-Downtime RDS Database Migrations",
        detail:
          "Executed high-availability AWS RDS MySQL upgrades (5.6 to 5.7 and 8.0) across Multi-AZ environments with zero customer downtime.",
      },
      {
        label: "SSL/TLS & Security Automation",
        detail:
          "Automated enterprise SSL/TLS certificate lifecycles across production gateways, earning leadership commendation for eliminating production downtime risks.",
      },
    ],
    metrics: [
      "5.7+ years of continuous high-impact tenure",
      "99.99% in-flight network availability",
      "65% reduction in deployment cycle times",
      "1st Place Winner - Viasat IoT Global Hackathon",
    ],
    recognition: [
      "1st Place Winner: Viasat IoT Global Hackathon",
      "Leadership Commendation: Certificate Automation",
      "Engineering Award: OAuth 2.0 Security Migration",
    ],
    stackList: [
      "Python",
      "AWS ECS",
      "AWS RDS",
      "CloudFormation",
      "Jenkins",
      "Groovy",
      "Docker",
      "Go (Golang)",
      "MySQL",
      "Aruba Networks",
      "Palo Alto Firewalls",
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
    logo: "https://logo.clearbit.com/viasat.com",
    role: "Software Engineer Intern",
    period: "Jan 2018 – May 2018",
    location: "Chennai, India",
    desc: "Architected and deployed 'CandEx 2.0', an automated enterprise recruitment and candidate evaluation platform adopted across Viasat HR and technical hiring teams.",
    stack:
      "Python, Django, Angular, MongoDB, Sphinx Search Engine, Apache Solr, REST APIs",
    overview:
      "Built full-stack recruitment automation platform streamlining candidate ingestion, resume parsing, and interview scheduling. Recognized with formal Viasat Leadership Appreciation.",
    highlights: [
      {
        label: "Full-Text Search Indexing",
        detail:
          "Integrated Sphinx Search Engine and Apache Solr to power sub-second keyword indexing across tens of thousands of uploaded technical resumes.",
      },
      {
        label: "Bulk Ingestion Pipeline",
        detail:
          "Built high-throughput bulk resume parsing workflows in Django, automating candidate ingestion and interview invitation dispatches.",
      },
    ],
    metrics: [
      "Sub-second search across 10,000+ candidate resumes",
      "Formal Leadership Appreciation Award for CandEx 2.0",
    ],
    stackList: [
      "Django",
      "Angular",
      "Sphinx",
      "MongoDB",
      "Python",
      "Apache Solr",
    ],
  },
];
