"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    iconUrl: "/images/icons/business.png",
    num: "01",
    title: "Discovery & Strategy",
    detail: "Aligning digital goals",
    description:
      "We don't just build; we strategize. We align your digital presence with your core business objectives before writing a single line of code.",
    side: "left" as const,
  },
  {
    iconUrl: "/images/icons/research.png",
    num: "02",
    title: "Bespoke Engineering",
    detail: "Pixel-perfect execution",
    description:
      "Custom development optimized for speed, accessibility, and conversion. Every component is engineered to elevate your brand's authority.",
    side: "right" as const,
  },
  {
    iconUrl: "/images/icons/launch.png",
    num: "03",
    title: "Seamless Handoff",
    detail: "Frictionless deployment",
    description:
      "A flawless launch process with complete guidance, ensuring your team is fully empowered to manage your new digital asset from day one.",
    side: "left" as const,
  },
];

// Animated S-curve path connecting steps
function Connector({ from, to }: { from: "left" | "right"; to: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const startX = from === "left" ? 22 : 78;
  const endX = to === "left" ? 22 : 78;
  const cp1x = from === "left" ? 78 : 22;
  const cp2x = to === "left" ? 22 : 78;
  const d = `M ${startX} 0 C ${cp1x} 50, ${cp2x} 50, ${endX} 100`;

  const dotScale = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{ position: "relative", height: "clamp(56px, 7vw, 96px)", width: "100%", overflow: "visible" }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
      >
        <defs>
          <linearGradient id="glow-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6ec3f4" />
            <stop offset="100%" stopColor="#ff61ab" />
          </linearGradient>
        </defs>
        {/* Base faint path */}
        <path
          d={d}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        {/* Glowing scroll-driven path */}
        <motion.path
          d={d}
          fill="none"
          stroke="url(#glow-gradient)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: scrollYProgress }}
        />
        {/* Dot at end of path */}
        <motion.circle
          cx={endX}
          cy={99}
          r="2.5"
          fill="#ff61ab"
          vectorEffect="non-scaling-stroke"
          style={{ scale: dotScale, opacity: scrollYProgress }}
        />
      </svg>
    </div>
  );
}

function StepCard({ step }: { step: typeof steps[0] }) {
  const isLeft = step.side === "left";
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -32 : 32, y: 16 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        width: "100%",
      }}
    >
      <div
        className="group relative overflow-hidden"
        style={{
          width: "44%",
          minWidth: "260px",
          padding: "clamp(24px, 2.5vw, 32px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        {/* Background Icon */}
        <div
          style={{
            position: "absolute",
            top: "-5%",
            right: "-5%",
            width: "160px",
            height: "160px",
            pointerEvents: "none",
            zIndex: 0,
            transition: "all 0.5s ease",
            
          }}
          className="opacity-15 group-hover:opacity-80 group-hover:scale-105"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={step.iconUrl} 
            alt="" 
            className="transition-all duration-500 grayscale group-hover:grayscale-0"
            style={{ width: "100%", height: "100%", objectFit: "contain" }} 
          />
        </div>

        <div className="relative z-10">
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "16px" }}>
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              STEP {step.num}
            </span>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.22)",
              }}
            >
              {step.detail}
            </span>
          </div>

          <h3
            style={{
              fontSize: "clamp(17px, 1.6vw, 21px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.25,
              marginBottom: "12px",
            }}
          >
            {step.title}
          </h3>
          <p
            style={{
              fontSize: "clamp(13px, 1.1vw, 15px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      style={{ width: "100%", paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
      {/* Header */}
      <div style={{ maxWidth: "900px", margin: "0 auto", marginBottom: "clamp(56px, 8vw, 96px)" }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
            marginBottom: "20px",
          }}
        >
          Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 500,
            letterSpacing: "-0.04em",
            lineHeight: 1.15,
            color: "rgba(255,255,255,0.9)",
            marginBottom: "20px",
            maxWidth: "600px",
          }}
        >
          A frictionless workflow.{" "}
          <span style={{ color: "rgba(255,255,255,0.28)" }}>Engineered for impact.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            fontSize: "clamp(14px, 1.3vw, 16px)",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.38)",
            maxWidth: "480px",
          }}
        >
          From initial strategy to final deployment, every phase is optimized for speed, clarity, and business outcomes.
        </motion.p>
      </div>

      {/* Zigzag roadmap — desktop */}
      <div className="hidden desktop:block" style={{ maxWidth: "900px", margin: "0 auto" }}>
        {steps.map((step, i) => (
          <div key={i}>
            <StepCard step={step} />
            {i < steps.length - 1 && (
              <Connector from={step.side} to={steps[i + 1].side} />
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical list */}
      <div className="flex flex-col desktop:hidden" style={{ maxWidth: "560px", margin: "0 auto" }}>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
            style={{
              display: "flex",
              gap: "20px",
              padding: "24px 0",
              borderBottom:
                i < steps.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.25)",
                minWidth: "24px",
                paddingTop: "3px",
                flexShrink: 0,
              }}
            >
              {step.num}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <p
                style={{
                  fontSize: "17px",
                  letterSpacing: "-0.02em",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </p>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(255,255,255,0.42)" }}>
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
