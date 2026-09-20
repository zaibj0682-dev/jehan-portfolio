"use client";
import { ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const fiverr = [
  { label: "Message on Fiverr", href: "https://www.fiverr.com/jehanzaib_007" },
  { label: "Main gig", href: "https://www.fiverr.com/jehanzaib_007/design-and-develop-a-professional-wordpress-website-and-blog" },
  { label: "Start a project", href: "https://www.fiverr.com/jehanzaib_007/design-and-develop-a-professional-wordpress-website-and-blog" },
];

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
      {/* Main footer body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0",
          padding: "clamp(40px, 6vw, 64px)",
          borderRadius: "32px",
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.25)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
          marginBottom: "clamp(40px, 6vw, 64px)",
        }}
      >
        {/* Top section: brand + cols */}
        <div
          className="flex flex-col tablet:flex-row tablet:justify-between gap-12"
          style={{ marginBottom: "64px" }}
        >
          {/* Brand block */}
          <div style={{ maxWidth: "340px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.9)", marginBottom: "4px" }}>
                Jehan Zaib
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
                WordPress Designer & Developer
              </p>
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.65, color: "rgba(255,255,255,0.3)", maxWidth: "280px" }}>
              Top Rated on Fiverr since 2020. 3,300+ projects delivered for clients across the US, UK, Europe and beyond.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "inline-block",
                  boxShadow: "0 0 6px rgba(74,222,128,0.5)",
                }}
              />
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
                Available for new projects
              </span>
            </div>
          </div>

          {/* Link columns */}
          <div style={{ display: "flex", gap: "clamp(40px, 8vw, 120px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
                Navigate
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
                Fiverr
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {fiverr.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5px", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {l.label}
                    <ExternalLink size={10} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Jehan Zaib · Upastra Digital Media · All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.18)" }}>
            All enquiries handled via Fiverr.
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}
