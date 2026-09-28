"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FlipWords } from "@/app/components/ui/FlipWords";

const ROLES = [
  "6+ Years Shipping Production Distributed Systems",
  "Co-Inventor: Published Indian Patent 202541026299",
  "Ex-Senior Software Engineer @ Viasat (6 Years)",
  "High-Scale Fleet Telemetry @ 25M+ Events/Day",
  "Zero-Downtime Microservices & Cloud Architecture",
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/sai-yasaswini-majety-88548a125/",
    icon: "fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/saiyasaswinimajety",
    icon: "fa-github",
    label: "GitHub",
  },
  {
    href: "mailto:yasaswini7777@gmail.com",
    icon: "fa-envelope",
    label: "Email",
  },
  {
    href: "https://search.patentassist.ai/?mode=smart&office=ipo&q=Modular+Deep+Learning+Architecture+for+Cross-Domain+Transfer+and+Incremental+Learning&patent=202541026299",
    icon: "fa-certificate",
    label: "Indian Patent 202541026299",
  },
];

export default function Hero() {
  return (
    <header
      id="page-top"
      className="text-center text-white"
      style={{
        backgroundColor: "var(--bg)",
        paddingTop: "130px",
        paddingBottom: "60px",
        width: "100%",
        display: "block",
      }}
    >
      <div className="section-inner" style={{ textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            style={{
              position: "relative",
              width: "220px",
              height: "220px",
              margin: "0 auto",
              borderRadius: "50%",
              padding: "4px",
              background:
                "linear-gradient(135deg, var(--cyan) 0%, rgba(56, 189, 248, 0.2) 100%)",
              boxShadow: "0 8px 32px rgba(56, 189, 248, 0.2)",
            }}
          >
            <Image
              src="/img/avatar.jpg"
              alt="Sai Yasaswini Majety"
              width={220}
              height={220}
              priority
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                background: "#091227",
              }}
            />
          </div>

          <h1
            className="text-uppercase"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "0.08em",
              margin: "1.5rem 0 0.5rem",
              fontWeight: 800,
            }}
          >
            Sai Yasaswini Majety
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              margin: "0.5rem 0",
              color: "var(--cyan)",
            }}
          >
            <span
              style={{
                width: "30px",
                height: "2px",
                background: "var(--cyan)",
              }}
            />
            <i className="fa fa-star" style={{ fontSize: "0.9rem" }} />
            <span
              style={{
                width: "30px",
                height: "2px",
                background: "var(--cyan)",
              }}
            />
          </div>

          <span
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              letterSpacing: "0.05em",
              color: "var(--cyan)",
              fontWeight: 600,
              display: "block",
              minHeight: "2.2em",
              position: "relative",
            }}
          >
            <FlipWords words={ROLES} duration={2800} />
          </span>

          <p
            className="mt-4 mx-auto max-w-3xl"
            style={{
              fontSize: "1.05rem",
              letterSpacing: "0.02em",
              lineHeight: "1.75",
              color: "#cbd5e1",
            }}
          >
            Senior Backend & Cloud Infrastructure Engineer with 6+ years
            shipping high-availability distributed systems, in-flight fleet
            telemetry engines, and enterprise developer platforms. Ex-Senior
            Software Engineer at Viasat and co-inventor of published Indian
            Patent 202541026299 in parameter-efficient modular deep learning
            architectures.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center gap-6 mt-8"
        >
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "var(--text)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--cyan)";
                e.currentTarget.style.borderColor = "var(--cyan)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <i className={`fa ${icon}`} style={{ fontSize: "20px" }} />
            </a>
          ))}
        </motion.div>

        {/* Dual Status Badges: Work Authorization + Role Target */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 18px",
              background: "rgba(16, 185, 129, 0.12)",
              border: "1px solid #10B981",
              borderRadius: "999px",
              fontSize: "0.82rem",
              color: "#10B981",
              fontWeight: 600,
              fontFamily: "var(--font-montserrat), sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10B981",
                display: "inline-block",
                boxShadow: "0 0 8px #10B981",
              }}
            />
            US Work Authorized (H-4 EAD) - No Sponsorship Required
          </span>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 18px",
              background: "rgba(56, 189, 248, 0.12)",
              border: "1px solid var(--cyan)",
              borderRadius: "999px",
              fontSize: "0.82rem",
              color: "var(--cyan)",
              fontWeight: 600,
              fontFamily: "var(--font-montserrat), sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            <i className="fa fa-briefcase" style={{ fontSize: "0.85rem" }} />
            Open to Senior Backend & Cloud Infrastructure Roles
          </span>
        </motion.div>
      </div>
    </header>
  );
}
