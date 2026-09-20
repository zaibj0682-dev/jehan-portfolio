"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LiveStatus() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // Pakistan Standard Time
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Karachi',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
      setTime(formatter.format(new Date()));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px" }}>
      {/* Time */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", fontWeight: 600 }}>Local Time</span>
        <span style={{ fontSize: "15px", fontWeight: 500, color: "rgba(255,255,255,0.9)", fontVariantNumeric: "tabular-nums" }}>
          {time || "Loading..."} PKT
        </span>
      </div>

      {/* Divider */}
      <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />

      {/* Status */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", fontWeight: 600 }}>Status</span>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ position: "relative", display: "flex", height: "8px", width: "8px" }}>
            <motion.span 
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", inlineSize: "100%", blockSize: "100%", borderRadius: "9999px", background: "#4ade80" }} 
            />
            <span style={{ position: "relative", display: "inline-flex", borderRadius: "9999px", height: "8px", width: "8px", background: "#4ade80" }} />
          </span>
          <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>Available for projects</span>
        </div>
      </div>
    </div>
  );
}
