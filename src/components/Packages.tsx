"use client";
import Reveal from "./ui/Reveal";
import { Check } from "lucide-react";

const packages = [
  {
    name: "The Standard",
    price: "From $800",
    note: "Core Business Website",
    description: "A comprehensive 4-5 page digital presence engineered for growing businesses.",
    features: [
      "Up to 5 custom pages",
      "Essential custom features",
      "Mobile responsive design",
      "On-page SEO setup",
      "Standard support",
    ],
    cta: "Start with this",
    highlight: false,
    badge: null,
  },
  {
    name: "The Premium",
    price: "From $2,000",
    note: "Most Popular",
    description: "A highly bespoke, well-thought-out experience with custom animations and advanced features.",
    features: [
      "Bespoke strategy & design",
      "Custom advanced animations",
      "Complex integrations",
      "High-conversion focus",
      "Priority launch support",
    ],
    cta: "Start with this",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "The Enterprise",
    price: "Custom",
    note: "Let's Discuss",
    description: "Full-scale custom architecture for complex web applications and massive digital footprints.",
    features: [
      "Unlimited scope flexibility",
      "Proprietary feature development",
      "Advanced system architecture",
      "Dedicated long-term support",
      "Complete white-glove service",
    ],
    cta: "Request a quote",
    highlight: false,
    badge: null,
  },
];

export default function Packages() {
  return (
    <section
      id="pricing"
      style={{
        width: "100%",
        paddingTop: "clamp(60px,7vw,100px)",
        paddingBottom: "clamp(60px,7vw,100px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        {/* Header */}
        <Reveal>
          <div style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "16px" }}>
              Pricing
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: 1.15,
                letterSpacing: "-0.04em",
                fontWeight: 500,
                color: "rgba(255,255,255,0.92)",
              }}
            >
              Clear pricing.{" "}
              <span style={{ color: "rgba(255,255,255,0.25)" }}>No surprises.</span>
            </h2>
          </div>
        </Reveal>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "clamp(32px, 4vw, 48px)",
          }}
        >
          {packages.map((pkg, i) => {
            const cardContent = (
              <>
                {/* Plan name + badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    {pkg.name}
                  </p>
                  {pkg.badge && (
                    <span
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: pkg.highlight ? "var(--color-text-heading)" : "rgba(255,255,255,0.6)",
                        padding: "4px 10px",
                        borderRadius: "999px",
                        border: pkg.highlight ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.15)",
                        background: pkg.highlight ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
                      }}
                    >
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Price */}
                <p
                  style={{
                    fontSize: "clamp(36px, 4vw, 48px)",
                    fontWeight: pkg.highlight ? 500 : 400,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.92)",
                    fontFamily: "var(--font-display)",
                    marginBottom: "6px",
                  }}
                >
                  {pkg.price}
                </p>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", marginBottom: "20px", letterSpacing: "0.03em" }}>
                  {pkg.note}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "28px",
                    paddingBottom: "28px",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {pkg.description}
                </p>

                {/* Features */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1, marginBottom: "32px" }}>
                  {pkg.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Check size={13} strokeWidth={1.5} style={{ color: pkg.highlight ? "#fff" : "rgba(255,255,255,0.35)", flexShrink: 0 }} />
                      <span style={{ fontSize: "14px", color: pkg.highlight ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.6)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://www.fiverr.com/jehanzaib_007"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "13px 20px",
                    borderRadius: "999px",
                    border: `1px solid ${pkg.highlight ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.1)"}`,
                    background: pkg.highlight ? "rgba(255,255,255,0.9)" : "transparent",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    color: pkg.highlight ? "#000" : "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "background 0.2s, border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = pkg.highlight ? "#fff" : "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLAnchorElement).style.color = pkg.highlight ? "#000" : "rgba(255,255,255,0.9)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = pkg.highlight ? "transparent" : "rgba(255,255,255,0.3)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = pkg.highlight ? "rgba(255,255,255,0.9)" : "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = pkg.highlight ? "#000" : "rgba(255,255,255,0.45)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = pkg.highlight ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.1)";
                  }}
                >
                  {pkg.cta} →
                </a>
              </>
            );

            return (
            <Reveal key={i} delay={i * 0.06}>
              {pkg.highlight ? (
                <div className="magic-border" style={{ height: "100%", borderRadius: "0" }}>
                  <div className="magic-border-inner" style={{ borderRadius: "0", background: "#0a0a0a" }} />
                  <div 
                    className="magic-border-content"
                    style={{
                      padding: "clamp(28px, 3vw, 40px)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    {cardContent}
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    background: "#0a0a0a",
                    padding: "clamp(28px, 3vw, 40px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  {cardContent}
                </div>
              )}
            </Reveal>
            );
          })}
        </div>

        {/* Footnote */}
        <Reveal>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
            Need flexible long-term support? Hourly rate is{" "}
            <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>$50/hr</span>.{" "}
            <a
              href="https://www.fiverr.com/jehanzaib_007"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.4)", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Get in touch on Fiverr.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
