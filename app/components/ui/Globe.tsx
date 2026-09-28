"use client";
import React, { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth * 2);
    let height = (canvas.height = canvas.offsetHeight * 2);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * 2;
      height = canvas.height = canvas.offsetHeight * 2;
    };
    window.addEventListener("resize", handleResize);

    const cx = () => width / 2;
    const cy = () => height / 2;
    const R = () => Math.min(width, height) * 0.36;

    // Satellites with orbital inclinations and speeds
    const satellites = [
      {
        name: "VIASAT-3 AMERICAS",
        radiusMult: 1.28,
        angle: 0.2,
        speed: 0.006,
        inc: 0.35,
        color: "#38BDF8",
      },
      {
        name: "VIASAT-2",
        radiusMult: 1.42,
        angle: 1.8,
        speed: 0.004,
        inc: -0.42,
        color: "#10B981",
      },
      {
        name: "VIASAT-1",
        radiusMult: 1.15,
        angle: 3.2,
        speed: 0.008,
        inc: 0.55,
        color: "#38BDF8",
      },
      {
        name: "KA-SAT",
        radiusMult: 1.35,
        angle: 4.5,
        speed: 0.005,
        inc: -0.25,
        color: "#A855F7",
      },
    ];

    let rotationAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const center_x = cx();
      const center_y = cy();
      const r = R();

      // Atmospheric outer glow
      const glowGrad = ctx.createRadialGradient(
        center_x,
        center_y,
        r * 0.8,
        center_x,
        center_y,
        r * 1.35,
      );
      glowGrad.addColorStop(0, "rgba(56, 189, 248, 0.2)");
      glowGrad.addColorStop(0.5, "rgba(56, 189, 248, 0.05)");
      glowGrad.addColorStop(1, "transparent");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(center_x, center_y, r * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // Earth body gradient
      const globeGrad = ctx.createRadialGradient(
        center_x - r * 0.35,
        center_y - r * 0.35,
        r * 0.1,
        center_x,
        center_y,
        r,
      );
      globeGrad.addColorStop(0, "#1e293b");
      globeGrad.addColorStop(0.7, "#0f172a");
      globeGrad.addColorStop(1, "#020617");

      ctx.fillStyle = globeGrad;
      ctx.beginPath();
      ctx.arc(center_x, center_y, r, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw latitude lines (3D projection)
      for (let lat = -60; lat <= 60; lat += 30) {
        const rad = (lat * Math.PI) / 180;
        const y = center_y + r * Math.sin(rad);
        const rx = r * Math.cos(rad);
        ctx.beginPath();
        ctx.ellipse(center_x, y, rx, rx * 0.28, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw rotating longitude lines
      for (let i = 0; i < 8; i++) {
        const theta = rotationAngle + (i * Math.PI) / 4;
        const cosTheta = Math.cos(theta);
        ctx.beginPath();
        ctx.ellipse(
          center_x,
          center_y,
          Math.abs(cosTheta * r),
          r,
          0,
          0,
          Math.PI * 2,
        );
        ctx.strokeStyle = "rgba(56, 189, 248, 0.14)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw orbital satellite tracks and positions
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        const orbitRadius = r * sat.radiusMult;

        // Draw orbital track ellipse
        ctx.save();
        ctx.translate(center_x, center_y);
        ctx.rotate(sat.inc);
        ctx.beginPath();
        ctx.ellipse(0, 0, orbitRadius, orbitRadius * 0.45, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.18)";
        ctx.setLineDash([4, 6]);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]);

        // Satellite position on orbit
        const satX = orbitRadius * Math.cos(sat.angle);
        const satY = orbitRadius * 0.45 * Math.sin(sat.angle);

        // Satellite beacon glow
        ctx.fillStyle = sat.color;
        ctx.beginPath();
        ctx.arc(satX, satY, 4.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Telemetry ping ring
        ctx.beginPath();
        ctx.arc(
          satX,
          satY,
          8 + (Math.sin(sat.angle * 4) + 1) * 3,
          0,
          Math.PI * 2,
        );
        ctx.strokeStyle = `${sat.color}44`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Label
        ctx.font = "600 14px var(--font-montserrat), sans-serif";
        ctx.fillStyle = "#94a3b8";
        ctx.fillText(sat.name, satX + 10, satY - 6);

        ctx.restore();
      });

      rotationAngle += 0.003;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at center, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 0.95) 100%)",
        borderRadius: "50%",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
      {/* Telemetry HUD overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(9, 18, 39, 0.85)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(56, 189, 248, 0.3)",
          borderRadius: "999px",
          padding: "4px 14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#10B981",
            boxShadow: "0 0 6px #10B981",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: "0.72rem",
            color: "var(--cyan)",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Aviation Telemetry Live
        </span>
      </div>
    </div>
  );
}
