"use client";
import Image from "next/image";
import Reveal from "./ui/Reveal";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  { year: "2020", event: "Launched career. First 10 projects shipped in 30 days." },
  { year: "2022", event: "Achieved Top Rated status. First enterprise-scale project." },
  { year: "2023", event: "Founded agency to scale operations globally." },
  { year: "2026", event: "Thousands of custom platforms delivered. Maintaining a 5.0 elite standard." },
];

function ProfileImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <motion.div
      ref={ref}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "115%",
        y,
      }}
    >
      <Image
        src="/images/profile.jpg"
        alt="Jehan Zaib"
        fill
        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 1280px) 50vw, 340px"
        priority
      />
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      style={{ width: "100%", paddingTop: "clamp(60px,7vw,100px)", paddingBottom: "clamp(60px,7vw,100px)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>

        {/* Label */}
        <Reveal>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "clamp(32px, 4vw, 56px)",
            }}
          >
            About
          </p>
        </Reveal>

        {/* Two-column layout */}
        <div className="flex flex-col desktop:flex-row gap-12 desktop:gap-20 items-stretch">

          {/* Left: story */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Pull quote */}
            <Reveal>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.04em",
                  fontWeight: 400,
                  color: "var(--color-text-heading)",
                  fontFamily: "var(--font-display)",
                  maxWidth: "560px",
                }}
              >
                My journey started in a university dorm room.{" "}
                <span style={{ color: "rgba(255,255,255,0.35)" }}>It evolved into a global agency.</span>
              </h2>
            </Reveal>

            {/* Body paragraphs */}
            <Reveal delay={0.05}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: "520px",
                }}
              >
                <p>
                  I learned to code between lectures, deploying real-world solutions by evening. That relentless pace—engineering fast and delivering faster—became the foundation of my entire philosophy.
                </p>
                <p>
                  What started as a solo hustle has scaled into a dedicated operation. Today, my team and I architect and launch over 100 bespoke web experiences every single month for industry leaders worldwide. 
                </p>
                <p>
                  But despite the immense scale, my standards remain unchanged. I don't just hand off templates; I engineer digital assets driven by UX thinking, competitor analysis, and a relentless focus on conversion.
                </p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontStyle: "italic" }}>
                  "A beautiful design is worthless if it doesn't convert." — This is why founders return to me for their second, third, and fourth platforms.
                </p>
              </div>
            </Reveal>

            {/* Timeline */}
            <Reveal delay={0.08}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  marginTop: "8px",
                }}
              >
                {milestones.map((t, i) => (
                  <div
                    key={t.year}
                    style={{
                      display: "flex",
                      gap: "24px",
                      alignItems: "baseline",
                      padding: "14px 0",
                      borderBottom: i < milestones.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.06em",
                        color: "rgba(255,255,255,0.25)",
                        minWidth: "36px",
                        flexShrink: 0,
                      }}
                    >
                      {t.year}
                    </span>
                    <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>{t.event}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: photo + stats */}
          <Reveal delay={0.1} className="shrink-0 w-full desktop:w-[460px] flex flex-col">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", height: "100%", flex: 1 }}>
              {/* Photo */}
              <div
                className="group"
                style={{
                  width: "100%",
                  flex: 1, // Stretches to fill remaining vertical space
                  minHeight: "340px", // Reduced from 400px so it's not overly tall on mobile
                  padding: "10px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="aspect-square desktop:aspect-auto"
                  style={{
                    width: "100%",
                    flex: 1,
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                    background: "#060606",
                  }}
                >
                  <ProfileImage />
                  {/* Subtle inner shadow so it sits nicely in the frame */}
                  <div 
                    style={{ 
                      position: "absolute", 
                      inset: 0, 
                      boxShadow: "inset 0 0 20px rgba(0,0,0,0.15)", 
                      pointerEvents: "none" 
                    }} 
                  />
                </div>
              </div>

              {/* Stats strip */}
              <div
                className="magic-border"
                style={{
                  borderRadius: "24px",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <div className="magic-border-inner" />
                <div className="magic-border-content" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", borderRadius: "24px", overflow: "hidden" }}>
                {[
                  { value: "3,300+", label: "Projects Delivered" },
                  { value: "5.0", label: "Average Rating" },
                  { value: "6+ yrs", label: "Top Rated Status" },
                  { value: "~20", label: "Expert Team" },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      padding: "24px 16px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      gap: "8px",
                      transition: "background 0.3s ease",
                    }}
                    className="hover:bg-white/5"
                  >
                    <span 
                      style={{ 
                        fontSize: "28px", 
                        fontWeight: 600, 
                        letterSpacing: "-0.04em", 
                        background: "linear-gradient(180deg, #fff, rgba(255,255,255,0.7))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        lineHeight: 1 
                      }}
                    >
                      {s.value}
                    </span>
                    <span 
                      style={{ 
                        fontSize: "10px", 
                        color: "rgba(255,255,255,0.45)", 
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontWeight: 500
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
