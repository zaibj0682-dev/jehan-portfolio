"use client";
import { motion } from "framer-motion";

export default function LiveStatus() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span style={{ position: "relative", display: "flex", height: "8px", width: "8px" }}>
        <motion.span
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", inlineSize: "100%", blockSize: "100%", borderRadius: "9999px", background: "#4ade80" }}
        />
        <span style={{ position: "relative", display: "inline-flex", borderRadius: "9999px", height: "8px", width: "8px", background: "#4ade80" }} />
      </span>
      <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>Available for projects</span>
    </div>
  );
}
