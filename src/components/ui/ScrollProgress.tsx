"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Magnetic from "./Magnetic";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0.1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        zIndex: 90,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <Magnetic intensity={0.2}>
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group relative flex items-center justify-center"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(10px)",
            border: "none",
            cursor: "pointer",
          }}
        >
          {/* SVG Ring Background */}
          <svg width="56" height="56" viewBox="0 0 100 100" style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}>
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="4"
            />
            {/* SVG Ring Progress */}
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                pathLength: scaleY,
              }}
            />
          </svg>
          
          <ArrowUp 
            size={20} 
            strokeWidth={2} 
            className="text-white/60 transition-colors duration-300 group-hover:text-white"
          />
        </button>
      </Magnetic>
    </motion.div>
  );
}
