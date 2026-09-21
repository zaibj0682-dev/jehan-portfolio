"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import Magnetic from "./ui/Magnetic";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { usePreloader } from "@/context/PreloaderContext";
import { useSound } from "@/context/SoundContext";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { isReadyToAnimate } = usePreloader();
  const { soundEnabled, toggleSound, playHover } = useSound();
  const { scrollYProgress } = useScroll();

  const blur = useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(12px)"]);
  const bg = useTransform(scrollYProgress, [0, 0.05], ["rgba(8,8,8,0)", "rgba(8,8,8,0.75)"]);
  const borderBottom = useTransform(scrollYProgress, [0, 0.05], ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.06)"]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isReadyToAnimate ? 1 : 0, y: isReadyToAnimate ? 0 : -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
        <Magnetic intensity={0.1}>
          <Link
            href="/"
            aria-label="Jehan Zaib"
            className="group"
            style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", padding: "8px 0" }}
          >
            <span
              className="transition-colors duration-300 group-hover:text-white"
              style={{
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "rgba(255,255,255,0.9)",
                textShadow: "0 0 20px rgba(255,255,255,0)",
              }}
            >
              Jehan Zaib
            </span>
            <span
              className="transition-colors duration-300 group-hover:text-white/40 group-hover:border-white/20"
              style={{
                fontSize: "11px",
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,0.25)",
                paddingLeft: "10px",
                borderLeft: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Digital Platform Architect
            </span>
          </Link>
        </Magnetic>

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
                playHover();
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
        <div className="hidden tablet:flex items-center" style={{ gap: "24px" }}>
          
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="group flex items-center justify-center transition-colors hover:text-white"
            style={{ color: soundEnabled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
            aria-label="Toggle sound"
          >
            {soundEnabled ? <Volume2 size={16} strokeWidth={2} /> : <VolumeX size={16} strokeWidth={2} />}
          </button>

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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{
              overflow: "hidden",
              background: "rgba(8,8,8,0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            }}
          >
            <div style={{ padding: "24px 0 16px 0", display: "flex", flexDirection: "column" }}>
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      padding: "16px 32px",
                      fontSize: "24px",
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      letterSpacing: "-0.03em",
                      color: "rgba(255,255,255,0.85)",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </a>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.4, delay: links.length * 0.05 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ padding: "32px 32px 16px 32px", marginTop: "16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <a
                  href="https://www.fiverr.com/jehanzaib_007"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "18px",
                    borderRadius: "999px",
                    background: "linear-gradient(180deg, #fff, rgba(255,255,255,0.8))",
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    textDecoration: "none",
                  }}
                >
                  Start a project on Fiverr
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
