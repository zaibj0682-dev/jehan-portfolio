"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";
    
    // Animate progress to 100
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 18) + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
          window.scrollTo(0, 0);
        }, 300); // Wait a tiny bit at 100%
      }
      setProgress(current);
    }, 70); // Very fast interval

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }} // Smooth slide up reveal
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999, // Super high to cover everything
            background: "#050505",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: "clamp(20px, 4vw, 40px)",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(80px, 15vw, 240px)", // HUGE number
                lineHeight: 0.8,
                color: "rgba(255,255,255,0.03)", // Very subtle fill
                letterSpacing: "-0.04em",
                fontWeight: 500,
                WebkitTextStroke: "1px rgba(255,255,255,0.15)", // Outlined look
              }}
            >
              {progress}%
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
