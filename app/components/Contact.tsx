"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";

const Globe = dynamic(() => import("@/app/components/ui/Globe"), {
  ssr: false,
});

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/sai-yasaswini-majety-88548a125/",
    icon: "fa-linkedin",
    label: "LinkedIn",
    color: "#0e76a7",
  },
  {
    href: "https://github.com/saiyasaswinimajety",
    icon: "fa-github",
    label: "GitHub",
    color: "var(--text)",
  },
  {
    href: "https://search.patentassist.ai/?mode=smart&office=ipo&q=Modular+Deep+Learning+Architecture+for+Cross-Domain+Transfer+and+Incremental+Learning&patent=202541026299",
    icon: "fa-certificate",
    label: "Indian Patent 202541026299",
    color: "var(--cyan)",
  },
  {
    href: "mailto:yasaswini7777@gmail.com",
    icon: "fa-envelope",
    label: "Email",
    color: "#e05c5c",
  },
];

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "#94a3b8",
  fontSize: "0.82rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  marginBottom: "0.4rem",
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-wrapper"
      style={{ paddingBottom: "3rem" }}
    >
      <div className="section-inner">
        <SectionHeading
          title="Get In Touch"
          subtitle="Contact & Opportunities"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          {/* LEFT: Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(1.4rem, 4vw, 2.5rem)",
                color: "var(--text)",
                textTransform: "uppercase",
                lineHeight: 1.15,
                margin: "0 0 1rem",
                fontWeight: 800,
              }}
            >
              LET&apos;S CONNECT
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "1rem",
                lineHeight: "1.75",
                margin: "0 0 2rem",
              }}
            >
              I am actively seeking Senior Backend, Distributed Systems, and
              Cloud Infrastructure roles. Whether you are discussing engineering
              opportunities, satellite and telemetry architectures, or modular
              deep learning research - my inbox is always open.
            </p>

            <div style={{ marginBottom: "1.5rem" }}>
              <p style={{ ...labelStyle }}>Email Directly</p>
              <a
                href="mailto:yasaswini7777@gmail.com"
                style={{
                  color: "var(--cyan)",
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                yasaswini7777@gmail.com
              </a>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <p style={{ ...labelStyle }}>Location & Availability</p>
              <p style={{ color: "#e2e8f0", margin: 0, fontSize: "0.95rem" }}>
                Houston, TX · Open to Relocation & Remote Roles
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <p style={{ ...labelStyle }}>US Work Authorization</p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#10B981",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#10B981",
                  }}
                />
                H-4 EAD (Authorized to work for any US employer without
                sponsorship)
              </div>
            </div>

            <div
              style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}
            >
              {socialLinks.map(({ href, icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    color,
                    fontSize: "1.75rem",
                    transition: "transform 0.2s, opacity 0.2s",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.75";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <i className={`fa ${icon}`} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Live Orbital Globe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              width: "100%",
              maxWidth: "460px",
              aspectRatio: "1",
              position: "relative",
              overflow: "hidden",
              borderRadius: "50%",
              margin: "0 auto",
              border: "1px solid rgba(56, 189, 248, 0.25)",
              boxShadow: "0 12px 48px rgba(56, 189, 248, 0.15)",
              transform: "translateZ(0)",
              WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            }}
          >
            <Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "rgba(56,189,248,0.04)",
                  }}
                />
              }
            >
              <Globe />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
