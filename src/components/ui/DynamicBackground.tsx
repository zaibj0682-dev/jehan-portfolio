"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DynamicBackground() {
  const { scrollYProgress } = useScroll();
  
  // Interpolate between pure black -> deep midnight blue -> pure black
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["#060606", "#060606", "#040b16", "#060606"]
  );

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -2,
        backgroundColor,
      }}
    />
  );
}
