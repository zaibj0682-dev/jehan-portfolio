"use client";
import Parallax from "./ui/Parallax";

import Reveal from "./ui/Reveal";

const services = [
  {
    iconUrl: "/images/icons/business.png",
    label: "Bespoke Web Platforms",
    description:
      "Enterprise-grade websites engineered using WordPress, Wix, or custom stacks, tailored entirely to your brand architecture.",
    delivery: "2–4 weeks",
  },
  {
    iconUrl: "/images/icons/store.png",
    label: "E-Commerce Ecosystems",
    description:
      "High-converting online stores deployed on Shopify or WooCommerce, fully integrated with scalable backend logic.",
    delivery: "2–3 weeks",
  },
  {
    iconUrl: "/images/icons/landing.png",
    label: "Brand Identity & Graphics",
    description:
      "Comprehensive visual strategy including logo design, typography, and UI/UX assets to position you as an industry leader.",
    delivery: "1-2 weeks",
  },
  {
    iconUrl: "/images/icons/redesign.png",
    label: "Custom Software",
    description:
      "Complex web applications and custom software engineering built on modern, multi-stack frameworks for unique business challenges.",
    delivery: "4+ weeks",
  },
  {
    iconUrl: "/images/icons/care.png",
    label: "Performance & Scaling",
    description:
      "Ongoing strategic retainers covering technical SEO, security architecture, and performance optimization for growing platforms.",
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
                One elite architect.{" "}
                <span className="text-muted">A full-stack ecosystem.</span>
              </h2></Parallax>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <p
              className="text-body text-body-lg text-balance"
              style={{ maxWidth: "380px" }}
            >
              From bespoke brand identity and visual graphics to multi-stack web platforms and custom software—engineered to dominate.
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
          
          {/* 6th Box: Gradient CTA */}
          <Reveal delay={5 * 0.04}>
            <a
              href="https://www.fiverr.com/jehanzaib_007"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-4 group"
              style={{
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(135deg, rgba(58,58,255,0.15) 0%, rgba(255,97,171,0.15) 100%)",
                padding: "clamp(28px, 3vw, 40px)",
                height: "100%",
                minHeight: "240px",
                textDecoration: "none",
              }}
            >
              {/* Vibrant gradient hover state */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, #3a3aff 0%, #ff61ab 50%, #6ec3f4 100%)",
                }}
              />
              
              {/* Subtle idle gradient mesh */}
              <div 
                className="absolute inset-0 opacity-60 group-hover:opacity-0 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at top left, rgba(110,195,244,0.2) 0%, transparent 60%), radial-gradient(circle at bottom right, rgba(255,97,171,0.2) 0%, transparent 60%)",
                }}
              />
              
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <span 
                  style={{
                    fontSize: "24px",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Start your project
                </span>
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white group-hover:border-white transition-all duration-500"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:text-black transition-colors duration-500">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
