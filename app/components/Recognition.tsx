"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { Modal } from "@/app/components/ui/Modal";
import { recognitions } from "@/app/data";
import type { Recognition as RecognitionType } from "@/app/types";

export default function Recognition() {
  const [index, setIndex] = useState(0);
  const [selectedProof, setSelectedProof] = useState<RecognitionType | null>(
    null,
  );

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, recognitions.length - 1));
  const item = recognitions[index];

  const btnStyle = (disabled: boolean): React.CSSProperties => ({
    flexShrink: 0,
    width: "44px",
    height: "64px",
    borderRadius: "6px",
    background: "rgba(56,189,248,0.12)",
    border: "2px solid var(--cyan)",
    color: "var(--cyan)",
    fontSize: "1.2rem",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.3 : 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
  });

  return (
    <section id="recognition" className="section-wrapper">
      <div className="section-inner">
        <SectionHeading title="Recognition & Commendations" divider="light" />

        <div style={{ position: "relative", marginTop: "1rem" }}>
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous"
            className="hidden md:flex"
            style={{
              ...btnStyle(index === 0),
              position: "absolute",
              left: "-68px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            ◀
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(56,189,248,0.3)",
                borderRadius: "14px",
                padding: "2.5rem 2.75rem",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
              }}
            >
              {/* Badge */}
              {item.badge && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(56,189,248,0.15)",
                      color: "var(--cyan)",
                      border: "1px solid var(--cyan)",
                      padding: "4px 12px",
                      borderRadius: "999px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.badge}
                  </span>
                  {item.date && (
                    <span
                      style={{
                        color: "#94a3b8",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                      }}
                    >
                      {item.date}
                    </span>
                  )}
                </div>
              )}

              {/* Decorative quote mark */}
              <span
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1.5rem",
                  fontSize: "6rem",
                  lineHeight: 1,
                  color: "var(--cyan)",
                  opacity: 0.12,
                  fontFamily: "Georgia, serif",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                &ldquo;
              </span>

              <p
                style={{
                  color: "#e2e8f0",
                  fontSize: "1.05rem",
                  lineHeight: "1.85",
                  margin: "0 0 2rem",
                  whiteSpace: "pre-line",
                  position: "relative",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1.25rem",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: "1.25rem",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(56,189,248,0.13)",
                      border: "2px solid var(--cyan)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className="fa fa-award"
                      style={{ color: "var(--cyan)", fontSize: "1.1rem" }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "var(--text)",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        margin: 0,
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        color: "var(--cyan)",
                        fontSize: "0.8rem",
                        margin: "0.15rem 0 0",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* View verified document button */}
                {item.image && (
                  <button
                    onClick={() => setSelectedProof(item)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 16px",
                      background: "rgba(56,189,248,0.12)",
                      border: "1px solid var(--cyan)",
                      borderRadius: "8px",
                      color: "var(--cyan)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--cyan)";
                      e.currentTarget.style.color = "#091227";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(56,189,248,0.12)";
                      e.currentTarget.style.color = "var(--cyan)";
                    }}
                  >
                    <i className="fa fa-file-text-o" />
                    <span>View Letter / Artifact</span>
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={index === recognitions.length - 1}
            aria-label="Next"
            className="hidden md:flex"
            style={{
              ...btnStyle(index === recognitions.length - 1),
              position: "absolute",
              right: "-68px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            ▶
          </button>
        </div>

        {/* Mobile Nav Buttons + Slide Dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <button
            onClick={prev}
            disabled={index === 0}
            className="md:hidden"
            style={{
              padding: "6px 12px",
              background: "rgba(56,189,248,0.15)",
              border: "1px solid var(--cyan)",
              color: "var(--cyan)",
              borderRadius: "4px",
              cursor: index === 0 ? "not-allowed" : "pointer",
              opacity: index === 0 ? 0.3 : 1,
            }}
          >
            ◀
          </button>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            {recognitions.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  background:
                    i === index ? "var(--cyan)" : "rgba(255,255,255,0.25)",
                  transition: "background 0.2s",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={index === recognitions.length - 1}
            className="md:hidden"
            style={{
              padding: "6px 12px",
              background: "rgba(56,189,248,0.15)",
              border: "1px solid var(--cyan)",
              color: "var(--cyan)",
              borderRadius: "4px",
              cursor:
                index === recognitions.length - 1 ? "not-allowed" : "pointer",
              opacity: index === recognitions.length - 1 ? 0.3 : 1,
            }}
          >
            ▶
          </button>
        </div>

        {/* Lightbox Modal for Verification */}
        {selectedProof && selectedProof.image && (
          <Modal
            open={!!selectedProof}
            onClose={() => setSelectedProof(null)}
            maxWidth="900px"
          >
            <div style={{ padding: "0.5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    background: "rgba(56,189,248,0.15)",
                    color: "var(--cyan)",
                    border: "1px solid var(--cyan)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {selectedProof.badge || "Verified Artifact"}
                </span>
                <h3
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                  }}
                >
                  {selectedProof.title}
                </h3>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "#0f172a",
                }}
              >
                <Image
                  src={selectedProof.image}
                  alt={selectedProof.name}
                  width={1200}
                  height={800}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.85rem",
                  marginTop: "1rem",
                  lineHeight: "1.6",
                }}
              >
                {selectedProof.quote}
              </p>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}
