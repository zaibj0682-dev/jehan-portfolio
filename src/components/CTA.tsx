import Reveal from "./ui/Reveal";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Magnetic from "./ui/Magnetic";

export default function CTA() {
  return (
    <section
      id="contact"
      style={{ width: "100%", paddingTop: "clamp(60px,7vw,100px)", paddingBottom: "clamp(60px,7vw,100px)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        <Reveal>
          <div
            className="magic-border"
            style={{
              borderRadius: "32px",
              background: "rgba(0,0,0,0.25)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
            }}
          >
            <div className="magic-border-inner" style={{ background: "#0a0a0a", borderRadius: "32px" }} />
            <div 
              className="magic-border-content"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "clamp(48px, 6vw, 80px) clamp(20px, 5vw, 40px)",
                textAlign: "center",
              }}
            >
            {/* Removed Background Image - Now handled in layout/page for full bleed */}

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "800px" }}>
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "24px",
                  background: "rgba(255,255,255,0.04)",
                  padding: "7px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", display: "inline-block" }} />
                Now accepting new projects
              </p>

              <h2
                style={{
                  fontSize: "clamp(32px, 5vw, 60px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.04em",
                  fontWeight: 400,
                  color: "var(--color-text-heading)",
                  fontFamily: "var(--font-display)",
                  marginBottom: "20px",
                }}
              >
                Let's build something your{" "}
                <span style={{ color: "rgba(255,255,255,0.35)" }}>competitors can't ignore.</span>
              </h2>

              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: "40px", maxWidth: "520px" }}>
                Stop losing high-ticket clients to poor design. Let's engineer a digital experience that reflects the true value of your brand.
              </p>

              <Magnetic>
                <a
                  href="https://www.fiverr.com/jehanzaib_007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-[1.02] hover:bg-white"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "18px 40px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.95)",
                    color: "#000",
                    fontSize: "16px",
                    fontWeight: 500,
                    textDecoration: "none",
                    boxShadow: "0 20px 40px -10px rgba(255,255,255,0.15)",
                    transition: "all 0.3s ease",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Start your project
                  <ExternalLink size={16} strokeWidth={2.5} />
                </a>
              </Magnetic>

              {/* Trust row */}
              <div style={{ marginTop: "28px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>~1 hr reply time</span>
                <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "inline-block" }} />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>5.0 · 2,277 reviews</span>
                <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "inline-block" }} />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>3,300+ platforms delivered</span>
              </div>
            </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
