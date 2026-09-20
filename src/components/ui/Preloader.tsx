"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Crafting.", "Building.", "Launching."];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Cycle through words
    const wordInterval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 600);

    // Progress counter
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 14) + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        clearInterval(wordInterval);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
          window.scrollTo(0, 0);
        }, 500);
      }
      setProgress(current);
    }, 65);

    return () => {
      clearInterval(interval);
      clearInterval(wordInterval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* Top panel */}
          <motion.div
            key="preloader-top"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1], delay: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: "50vh",
              zIndex: 99999,
              background: "#060606",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: "0",
              overflow: "hidden",
            }}
          >
            {/* Ambient gradient top-left */}
            <div style={{
              position: "absolute",
              top: "-20%",
              left: "-10%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(58,58,200,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            {/* Ambient gradient top-right */}
            <div style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(180,60,120,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Name reveal — clips up into view */}
            <div style={{ overflow: "hidden", paddingBottom: "1px", paddingTop: "80px" }}>
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 5vw, 68px)",
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  color: "rgba(255,255,255,0.92)",
                  lineHeight: 1,
                  textAlign: "center",
                }}
              >
                Jehan Zaib
              </motion.p>
            </div>
          </motion.div>

          {/* Bottom panel */}
          <motion.div
            key="preloader-bottom"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1], delay: 0 }}
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50vh",
              zIndex: 99999,
              background: "#060606",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingTop: "0",
              overflow: "hidden",
            }}
          >
            {/* Ambient gradient bottom */}
            <div style={{
              position: "absolute",
              bottom: "-20%",
              left: "30%",
              width: "500px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(100,180,240,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Cycling word */}
            <div style={{ overflow: "hidden", marginTop: "0", paddingTop: "1px" }}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={wordIndex}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-110%", opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(36px, 5vw, 68px)",
                    fontWeight: 500,
                    letterSpacing: "-0.04em",
                    color: "rgba(255,255,255,0.15)",
                    lineHeight: 1,
                    textAlign: "center",
                    paddingBottom: "60px",
                  }}
                >
                  {WORDS[wordIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress bar + counter — pinned to very bottom */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
            }}>
              {/* Counter */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 clamp(24px, 4vw, 48px)",
                marginBottom: "10px",
              }}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  Digital Platform Architect
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.06em",
                    color: "rgba(255,255,255,0.3)",
                    fontVariantNumeric: "tabular-nums",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {progress}%
                </motion.span>
              </div>

              {/* Progress track */}
              <div style={{
                width: "100%",
                height: "1px",
                background: "rgba(255,255,255,0.06)",
                position: "relative",
              }}>
                <motion.div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "1px",
                    background: "linear-gradient(90deg, rgba(58,58,200,0.8), rgba(180,60,120,0.8), rgba(100,180,240,0.8))",
                    width: `${progress}%`,
                    transition: "width 0.12s ease-out",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Centre hairline divider between panels */}
          <motion.div
            key="preloader-divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: "50vh",
              left: "10%",
              right: "10%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
              zIndex: 99999,
              transformOrigin: "center",
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
