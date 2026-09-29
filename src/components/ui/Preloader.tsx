"use client";
import { useEffect, useRef, useState } from "react";
import { usePreloader } from "@/context/PreloaderContext";

const MIN_MS = 2400;
const MAX_MS = 7000;

type Phase = "loading" | "complete" | "lifting" | "done";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");
  const { setReady, isVideoReady } = usePreloader();
  const isVideoReadyRef = useRef(isVideoReady);

  useEffect(() => { isVideoReadyRef.current = isVideoReady; }, [isVideoReady]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const blocker = document.getElementById("ssr-blocker");
    if (blocker) blocker.remove();
    const main = document.getElementById("main");
    if (main) main.style.opacity = "1";

    const startTime = Date.now();
    let completed = false;

    function complete() {
      if (completed) return;
      completed = true;
      clearInterval(interval);
      setProgress(100);
      setPhase("complete");
      document.body.style.overflow = "";
      window.scrollTo(0, 0);

      // Pause at 100, then lift the curtain
      setTimeout(() => {
        setPhase("lifting");
        setTimeout(() => {
          setPhase("done");
          setReady();
        }, 900);
      }, 320);
    }

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= MAX_MS) { complete(); return; }

      if (elapsed < MIN_MS) {
        const t = elapsed / MIN_MS;
        const eased = t < 0.6
          ? (t / 0.6) * 0.78
          : 0.78 + ((t - 0.6) / 0.4) * 0.12;
        setProgress(Math.round(eased * 100));
      } else {
        const p2 = (elapsed - MIN_MS) / (MAX_MS - MIN_MS);
        setProgress(Math.round(90 + p2 * 9));
        if (isVideoReadyRef.current) complete();
      }
    }, 50);

    return () => { clearInterval(interval); document.body.style.overflow = ""; };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#060606",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        transform: phase === "lifting" ? "translateY(-100%)" : "translateY(0)",
        transition: phase === "lifting"
          ? "transform 0.88s cubic-bezier(0.76, 0, 0.24, 1)"
          : "none",
        pointerEvents: phase === "lifting" ? "none" : "auto",
      }}
    >
      <style>{`
        @keyframes pl-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pl-fade-a {
          0%, 100% { opacity: 0.55; }
          50%       { opacity: 0.85; }
        }
        @keyframes pl-fade-b {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.7; }
        }
        @keyframes pl-fade-c {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.55; }
        }
      `}</style>

      {/* Ambient glows — opacity-only animation avoids blur repaint flicker */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        {/* Cyan — top right */}
        <div style={{
          position: "absolute", top: "-30%", right: "-15%",
          width: "75vw", height: "75vw", maxWidth: "800px", maxHeight: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(110,195,244,0.22) 0%, rgba(110,195,244,0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
          willChange: "opacity",
          backfaceVisibility: "hidden",
          animation: "pl-fade-a 4.5s ease-in-out infinite",
        }} />
        {/* Pink — bottom left */}
        <div style={{
          position: "absolute", bottom: "-25%", left: "-12%",
          width: "70vw", height: "70vw", maxWidth: "750px", maxHeight: "750px",
          borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(255,97,171,0.2) 0%, rgba(255,97,171,0.07) 40%, transparent 70%)",
          filter: "blur(60px)",
          willChange: "opacity",
          backfaceVisibility: "hidden",
          animation: "pl-fade-b 5.5s 0.8s ease-in-out infinite",
        }} />
        {/* Blue — center left */}
        <div style={{
          position: "absolute", top: "20%", left: "-10%",
          width: "55vw", height: "55vw", maxWidth: "620px", maxHeight: "620px",
          borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(58,58,255,0.18) 0%, rgba(58,58,255,0.06) 40%, transparent 70%)",
          filter: "blur(55px)",
          willChange: "opacity",
          backfaceVisibility: "hidden",
          animation: "pl-fade-c 7s 1.5s ease-in-out infinite",
        }} />
      </div>

      {/* Identity + counter */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Nameplate */}
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
          fontWeight: 500,
          margin: "0 0 28px",
          animation: "pl-in 0.85s cubic-bezier(0.16,1,0.3,1) both",
        }}>
          Jehan Zaib
        </p>

        {/* Giant counter */}
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(100px, 17vw, 210px)",
          fontWeight: 600,
          letterSpacing: "-0.06em",
          lineHeight: 1,
          color: "rgba(255,255,255,0.92)",
          fontVariantNumeric: "tabular-nums",
          animation: "pl-in 0.85s 0.1s cubic-bezier(0.16,1,0.3,1) both",
          minWidth: "2.6ch",
          textAlign: "center",
        }}>
          {String(progress).padStart(2, "0")}
        </div>

        {/* Gradient divider */}
        <div style={{
          width: "clamp(160px, 20vw, 260px)",
          height: "1px",
          marginTop: "28px",
          background: "linear-gradient(90deg, transparent, #6ec3f4, #3a3aff, #ff61ab, transparent)",
          opacity: 0.65,
          animation: "pl-in 0.85s 0.18s cubic-bezier(0.16,1,0.3,1) both",
        }} />

        {/* Sub-label */}
        <p style={{
          fontSize: "10px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.18)",
          marginTop: "18px",
          animation: "pl-in 0.85s 0.24s cubic-bezier(0.16,1,0.3,1) both",
        }}>
          Digital Platform Architect
        </p>
      </div>
    </div>
  );
}
