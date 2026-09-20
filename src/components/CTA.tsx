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
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(48px, 6vw, 80px) 20px",
              textAlign: "center",
              borderRadius: "32px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(0,0,0,0.25)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
              marginBottom: "40px",
            }}
          >
            {/* Removed Background Image - Now handled in layout/page for full bleed */}

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "800px" }}>
              <p
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "24px",
                  background: "rgba(0,0,0,0.5)",
                  padding: "8px 20px",
                  borderRadius: "999px",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                Ready to start?
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
                Ready to dominate your industry?
              </h2>
              
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "32px", maxWidth: "600px" }}>
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
                  Message me on Fiverr
                  <ExternalLink size={16} strokeWidth={2.5} />
                </a>
              </Magnetic>
              
              <div style={{ marginTop: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 12px #4ade80" }} />
                <span style={{ fontSize: "12px", letterSpacing: "0.06em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>
                  Available for new projects
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
