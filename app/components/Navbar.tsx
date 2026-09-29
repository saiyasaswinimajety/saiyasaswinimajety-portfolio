"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { id: "about", label: "About & Skills" },
  { id: "recognition", label: "Recognition" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Projects" },
  { id: "publications", label: "Patents & Research" },
  { id: "certifications", label: "Honors" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const linkStyle: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontSize: "0.8rem",
  fontWeight: 700,
  transition: "color 0.2s ease",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: scrolled
          ? "rgba(9, 18, 39, 0.96)"
          : "rgba(9, 18, 39, 0.9)",
        padding: scrolled ? "8px 0" : "14px 0",
        fontFamily: "var(--font-montserrat), sans-serif",
        transition: "padding 0.25s ease, background-color 0.25s ease",
        borderBottom: "1px solid rgba(56, 189, 248, 0.12)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <a
          href="#page-top"
          style={{
            color: "#ffffff",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            textDecoration: "none",
            fontSize: scrolled ? "1.05rem" : "1.2rem",
            whiteSpace: "nowrap",
            transition: "font-size 0.25s ease",
          }}
        >
          Sai Yasaswini Majety
        </a>

        {/* Desktop nav */}
        <ul
          className="hidden md:flex"
          style={{
            gap: "1.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--cyan)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://search.patentassist.ai/?mode=smart&office=ipo&q=Modular+Deep+Learning+Architecture+for+Cross-Domain+Transfer+and+Incremental+Learning&patent=202541026299"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...linkStyle,
                color: "var(--cyan)",
                border: "1px solid var(--cyan)",
                padding: "6px 12px",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Patent 202541026299
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            color: "#ffffff",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: "var(--bg)",
            padding: "1rem 2rem 1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {[
            ...navLinks,
            { id: "patent", label: "Indian Patent 202541026299" },
          ].map((link) => (
            <a
              key={link.id}
              href={
                link.id === "patent"
                  ? "https://search.patentassist.ai/?mode=smart&office=ipo&q=Modular+Deep+Learning+Architecture+for+Cross-Domain+Transfer+and+Incremental+Learning&patent=202541026299"
                  : `#${link.id}`
              }
              target={link.id === "patent" ? "_blank" : undefined}
              rel={link.id === "patent" ? "noopener noreferrer" : undefined}
              style={{
                ...linkStyle,
                display: "block",
                padding: "0.65rem 0",
                color: link.id === "patent" ? "var(--cyan)" : "#ffffff",
              }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
