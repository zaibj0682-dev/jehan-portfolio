"use client";
import Parallax from "./ui/Parallax";

import Reveal from "./ui/Reveal";

const services = [
  {
    iconUrl: "/images/icons/business.png",
    label: "Business websites",
    description:
      "Multi-page WordPress + Elementor sites built around your customers, your brand, and your goals — not a generic template.",
    delivery: "2–4 weeks",
  },
  {
    iconUrl: "/images/icons/landing.png",
    label: "Landing pages",
    description:
      "Up to 5 sections, fast-loading and conversion-focused. You get a finished, live page in 3 days.",
    delivery: "3 days",
  },
  {
    iconUrl: "/images/icons/store.png",
    label: "Online stores",
    description:
      "WooCommerce shops with full product setup, payment integration, category pages, and mobile-first design.",
    delivery: "2–3 weeks",
  },
  {
    iconUrl: "/images/icons/redesign.png",
    label: "Redesigns & migrations",
    description:
      "Fresh design on your existing content — blog migration, domain transfer, and performance fixes handled.",
    delivery: "1–3 weeks",
  },
  {
    iconUrl: "/images/icons/care.png",
    label: "Care plans",
    description:
      "Monthly updates, security scans, backups, and priority support so the site stays fast and safe after launch.",
    delivery: "Monthly",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{ width: "100%", paddingTop: "clamp(60px,7vw,100px)", paddingBottom: "clamp(60px,7vw,100px)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        {/* ── Header ─────────────────────────────────── */}
        <div
          className="flex flex-col desktop:flex-row desktop:items-end desktop:justify-between gap-6"
          style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}
        >
          <div style={{ maxWidth: "522px" }}>
            <Reveal>
              <p
                className="text-caption text-muted uppercase tracking-[0.08em]"
                style={{ marginBottom: "16px" }}
              >
                What I do
              </p>
              <Parallax offset={20}><h2
                className="text-strong text-balance"
                style={{
                  fontSize: "var(--text-h2)",
                  lineHeight: 1.35,
                  letterSpacing: "-0.04em",
                  fontWeight: 500,
                }}
              >
                One WordPress specialist.{" "}
                <span className="text-muted">Every kind of project.</span>
              </h2></Parallax>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <p
              className="text-body text-body-lg text-balance"
              style={{ maxWidth: "380px" }}
            >
              From a 3-day landing page to a full WooCommerce store — same
              contact, same quality, start to finish.
            </p>
          </Reveal>
        </div>

        {/* ── Cards grid ─────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
        {services.map(({ iconUrl, label, description, delivery }, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div
                className="flex flex-col gap-4 group"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: "#090909",
                  padding: "clamp(28px, 3vw, 40px)",
                  height: "100%",
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
                    src={iconUrl} 
                    alt="" 
                    className="transition-all duration-500 grayscale group-hover:grayscale-0"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2 flex-1 relative z-10 pt-2">
                  <p
                    className="text-heading font-medium"
                    style={{
                      fontSize: "var(--text-h6)",
                      lineHeight: 1.3,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-body"
                    style={{ lineHeight: 1.6, fontSize: "14px" }}
                  >
                    {description}
                  </p>
                </div>

                {/* Delivery badge */}
                <p
                  className="text-caption text-muted relative z-10"
                  style={{ marginTop: "auto", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  Typical delivery: {delivery}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
