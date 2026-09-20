"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "@/context/PreloaderContext";

const WORDS = ["Crafting.", "Building.", "Launching."];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const { setReady } = usePreloader();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Cycle through words every 700ms, stop on the last word
    const wordInterval = setInterval(() => {
      setWordIndex((i) => {
        if (i >= WORDS.length - 1) {
          clearInterval(wordInterval);
          return i;
        }
        return i + 1;
      });
    }, 700);

    // Progress counter — slow & organic, takes ~2.5–3s total
    let current = 0;
    const interval = setInterval(() => {
      // Slow near the end for dramatic effect
      const remaining = 100 - current;
      const increment = remaining > 30
        ? Math.floor(Math.random() * 6) + 3   // fast early: +3 to +8
        : Math.floor(Math.random() * 2) + 1;   // slow near end: +1 to +2
      current = Math.min(current + increment, 100);
      if (current >= 100) {
        clearInterval(interval);
        clearInterval(wordInterval);
        setIsComplete(true); // Trigger text/UI fade out
        setTimeout(() => {
          const blocker = document.getElementById("ssr-blocker");
          if (blocker) blocker.remove();

          const main = document.getElementById("main");
          if (main) main.style.opacity = "1";
          
          setIsLoading(false); // Trigger panel split
          document.body.style.overflow = "";
          window.scrollTo(0, 0);
          
          // Let the app know the preloader is done sliding
          setTimeout(() => {
            setReady();
          }, 400); // Trigger hero animation slightly before preloader finishes completely for smooth transition
          
        }, 500); // Wait for fade out before splitting
      }
      setProgress(current);
    }, 90); // 90ms interval × ~25 steps ≈ ~2.5s

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
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0 }}
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
          </motion.div>

          {/* Bottom panel */}
          <motion.div
            key="preloader-bottom"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0 }}
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
                {!isComplete && (
                  <motion.p
                    key={wordIndex}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-110%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(48px, 8vw, 96px)", // Increased size
                      fontWeight: 500,
                      letterSpacing: "-0.04em",
                      color: "rgba(255,255,255,0.85)", // Brighter color
                      lineHeight: 1,
                      textAlign: "center",
                      paddingBottom: "60px",
                    }}
                  >
                    {WORDS[wordIndex]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Progress bar + counter — pinned to very bottom */}
            <AnimatePresence>
              {!isComplete && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                  }}
                >
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
                </motion.div>
              )}
            </AnimatePresence>
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
