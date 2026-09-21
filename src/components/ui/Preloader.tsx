"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "@/context/PreloaderContext";

const WORDS = ["Crafting.", "Building.", "Launching."];
const MIN_MS = 3000;  // always show at least 3 seconds
const MAX_MS = 7500;  // force exit after 7.5 seconds regardless

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const { setReady, isVideoReady } = usePreloader();

  // Keep a ref so the interval closure always reads the latest value
  const isVideoReadyRef = useRef(isVideoReady);
  useEffect(() => { isVideoReadyRef.current = isVideoReady; }, [isVideoReady]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Cycle through words every 800ms, stop on the last one
    const wordInterval = setInterval(() => {
      setWordIndex((i) => {
        if (i >= WORDS.length - 1) { clearInterval(wordInterval); return i; }
        return i + 1;
      });
    }, 800);

    const startTime = Date.now();
    let completed = false;

    function complete() {
      if (completed) return;
      completed = true;
      clearInterval(interval);
      clearInterval(wordInterval);
      setProgress(100);
      setIsComplete(true);
      setTimeout(() => {
        const blocker = document.getElementById("ssr-blocker");
        if (blocker) blocker.remove();
        const main = document.getElementById("main");
        if (main) main.style.opacity = "1";
        setIsLoading(false);
        document.body.style.overflow = "";
        window.scrollTo(0, 0);
        setTimeout(() => setReady(), 400);
      }, 500);
    }

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;

      // Hard cap — exit no matter what after MAX_MS
      if (elapsed >= MAX_MS) { complete(); return; }

      if (elapsed < MIN_MS) {
        // Phase 1: organic progress 0 → 90 over the first 3s
        // Fast early (feels snappy), slows near 90 (suspense before reveal)
        const t = elapsed / MIN_MS;
        const eased = t < 0.65
          ? (t / 0.65) * 0.82              // 0 → 82% in first 65% of time
          : 0.82 + ((t - 0.65) / 0.35) * 0.08; // 82 → 90% in last 35%
        setProgress(Math.round(eased * 100));
      } else {
        // Phase 2: slow creep 90 → 99 while waiting for video
        const phase2Elapsed = elapsed - MIN_MS;
        const phase2Duration = MAX_MS - MIN_MS; // 4.5s window
        const creep = (phase2Elapsed / phase2Duration) * 9; // adds 0 → 9 on top of 90
        setProgress(Math.round(90 + creep));

        // Exit as soon as video signals it can play
        if (isVideoReadyRef.current) { complete(); }
      }
    }, 50);

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
