"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const blur = useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(20px)"]);
  const bg = useTransform(scrollYProgress, [0, 0.05], ["rgba(8,8,8,0)", "rgba(8,8,8,0.75)"]);
  const borderBottom = useTransform(scrollYProgress, [0, 0.05], ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.06)"]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
        background: bg,
        borderBottom,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, #6ec3f4, #3a3aff, #ff61ab)",
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      />
      <div
        className="flex items-center justify-between"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,40px)",
          height: "60px",
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label="Jehan Zaib"
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Jehan Zaib
          </span>
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.04em",
              color: "rgba(255,255,255,0.25)",
              paddingLeft: "10px",
              borderLeft: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            WordPress Designer
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden tablet:flex items-center" style={{ gap: "2px" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "-0.01em",
                padding: "6px 14px",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right: Fiverr CTA */}
        <div className="hidden tablet:flex items-center" style={{ gap: "16px" }}>
          {/* Available dot */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#4ade80",
                display: "inline-block",
                boxShadow: "0 0 6px rgba(74,222,128,0.6)",
              }}
            />
            Available
          </span>

          <a
            href="https://www.fiverr.com/jehanzaib_007"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              padding: "10px 20px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.9)",
              color: "#000",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            Start a project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="tablet:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{
            padding: "8px",
            color: "rgba(255,255,255,0.6)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            background: "rgba(8,8,8,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "16px 24px",
                fontSize: "15px",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ padding: "16px 24px" }}>
            <a
              href="https://www.fiverr.com/jehanzaib_007"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                padding: "12px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.9)",
                color: "#000",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Start a project on Fiverr
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
