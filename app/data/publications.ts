export interface Publication {
  type: "patent" | "conference" | "ieee" | "book-chapter" | "journal";
  title: string;
  venue: string;
  publisher?: string;
  year: string;
  authors: string;
  topic: string;
  impact?: { label: string; value: string }[];
  badge?: string;
  badgeColor?: string;
  thumbnail?: string;
  links: { label: string; url: string }[];
}

export const publications: Publication[] = [
  {
    type: "patent",
    title:
      "Modular Deep Learning Architecture for Cross-Domain Transfer and Incremental Learning",
    venue: "Indian Patent Office — Application No. 202541026299",
    publisher: "Government of India — The Patent Office Journal No. 13/2025",
    year: "2025",
    authors: "Sai Likhith Kanuparthi, Sai Yasaswini Majety (Co-Inventors)",
    topic:
      "Architectures for modular, parameter-efficient deep learning adapters enabling foundation models to transfer representations dynamically across disparate cross-domain distributions without catastrophic forgetting. Formulates dynamic gating mechanisms, inter-layer routing adapters, and catastrophic forgetting mitigation algorithms. Classified under IPC: G06N 3/08 (Learning methods), G06N 3/045 (Value-driven neural networks), G06N 3/096 (Transfer learning), G06N 3/084 (Backpropagation), and G06N 20/00 (Machine learning).",
    badge: "OFFICIALLY PUBLISHED (IPO)",
    badgeColor: "#9b59b6",
    thumbnail: "/img/patent/patent-page.png",
    impact: [
      { label: "Application No.", value: "202541026299" },
      { label: "Status", value: "Published (The Patent Office Journal)" },
      { label: "Filing Date", value: "March 21, 2025" },
      { label: "Publication Date", value: "March 28, 2025" },
      { label: "Publication Issue", value: "Journal No. 13/2025, Part 1" },
      { label: "Jurisdiction", value: "Indian Patent Office (IPO)" },
    ],
    links: [
      {
        label: "Verify on PatentAssist",
        url: "https://search.patentassist.ai/?mode=smart&office=ipo&q=Modular+Deep+Learning+Architecture+for+Cross-Domain+Transfer+and+Incremental+Learning&patent=202541026299",
      },
    ],
  },
];
