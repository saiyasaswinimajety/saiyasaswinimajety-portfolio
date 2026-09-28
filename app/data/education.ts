export interface EducationHighlight {
  label: string;
  detail: string;
}

export interface Degree {
  institution: string;
  shortName: string;
  logo: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
  overview: string;
  highlights: EducationHighlight[];
  coursework: string[];
  projects: string[];
  achievements: string[];
}

export const degrees: Degree[] = [
  {
    institution:
      "Shanmugha Arts, Science, Technology & Research Academy (SASTRA Deemed University)",
    shortName: "SASTRA",
    logo: "/img/education/sastra.svg",
    degree: "B.Tech in Electrical and Electronics Engineering (EEE)",
    period: "Aug 2014 – May 2018",
    location: "Thanjavur, Tamil Nadu, India",
    gpa: "8.2 / 10.0",
    overview:
      "4-year rigorous undergraduate engineering program spanning core electrical power systems, digital signal processing, microprocessors, embedded computing, and algorithmic problem-solving. Awarded the prestigious Dean's Merit Scholarship for ranking in the top 3% of the academic engineering cohort.",
    highlights: [
      {
        label: "Dean's Merit Scholarship",
        detail:
          "Awarded the Dean's Merit Scholarship (2016–2017) for exemplary academic performance, ranking in the top 3% of the cohort",
      },
      {
        label: "DAKSH National Fest Lead",
        detail:
          "Organized and spearheaded technical event management for DAKSH, SASTRA's premier National Techno-Management Fest",
      },
      {
        label: "IEEE Student Member",
        detail:
          "Active member of the IEEE Student Branch; conducted peer mentoring and hands-on workshops on microcontrollers and embedded programming",
      },
      {
        label: "Undergraduate Capstone",
        detail:
          "Architected an IoT-based Remote Telemetry and Substation Fault Detection unit combining sensor networks with cloud alerting",
      },
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Microprocessors & Microcontrollers (8051, ARM)",
      "Digital Signal Processing",
      "Control Systems Engineering",
      "Computer Architecture & Operating Systems",
      "Object-Oriented Programming (C++, Java)",
      "Power Electronics & Grid Systems",
      "Linear Algebra & Probability Theory",
    ],
    projects: [
      "IoT-based Remote Power Distribution & Telemetry Monitoring System (Python, MQTT, Arduino)",
      "Microcontroller-driven automated circuit fault diagnostic and relay trip mechanism",
      "Closed-loop speed and torque control simulation of BLDC motors in MATLAB/Simulink",
      "Automated sensor telemetry dashboard with real-time anomaly alerts",
    ],
    achievements: [
      "Dean's Merit Scholarship Recipient (2016–2017, Top 3% of cohort)",
      "Graduated First Class with Distinction (CGPA 8.2 / 10.0)",
      "1st Place Winner — Viasat IoT Hackathon (Inflight telemetry & smart monitoring)",
    ],
  },
];
