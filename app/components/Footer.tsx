"use client";

export default function Footer() {
  const links = [
    { href: "https://github.com/saiyasaswinimajety", label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/saiyasaswinimajety/",
      label: "LinkedIn",
    },
    {
      href: "https://search.patentassist.ai/?mode=smart&office=ipo&q=Modular+Deep+Learning+Architecture+for+Cross-Domain+Transfer+and+Incremental+Learning&patent=202541026299",
      label: "Indian Patent 202541026299",
    },
    { href: "mailto:yasaswini7777@gmail.com", label: "Contact" },
  ];

  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "var(--bg)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "2rem 0",
        textAlign: "center",
      }}
    >
      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.75rem",
          marginBottom: "1rem",
        }}
        aria-label="Footer navigation"
      >
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{
              color: "#94a3b8",
              fontSize: "0.85rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
          >
            {label}
          </a>
        ))}
      </nav>
      <p style={{ color: "#64748b", fontSize: "0.82rem", margin: 0 }}>
        &copy; {new Date().getFullYear()} Sai Yasaswini Majety. All rights
        reserved.
      </p>
    </footer>
  );
}
