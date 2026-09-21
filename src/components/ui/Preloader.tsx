"use client";
import { useEffect, useRef, useState } from "react";
import { usePreloader } from "@/context/PreloaderContext";

const MIN_MS = 3000;
const MAX_MS = 7500;

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(1);
  const [hidden, setHidden] = useState(false);
  const { setReady, isVideoReady } = usePreloader();
  const isVideoReadyRef = useRef(isVideoReady);

  useEffect(() => { isVideoReadyRef.current = isVideoReady; }, [isVideoReady]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Reveal main immediately — our overlay covers it during load
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
      document.body.style.overflow = "";
      window.scrollTo(0, 0);

      // Brief pause at 100%, then fade out
      setTimeout(() => {
        setOverlayOpacity(0);
        setTimeout(() => {
          setHidden(true);
          setReady();
        }, 950);
      }, 180);
    }

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= MAX_MS) { complete(); return; }

      if (elapsed < MIN_MS) {
        const t = elapsed / MIN_MS;
        const eased = t < 0.65
          ? (t / 0.65) * 0.82
          : 0.82 + ((t - 0.65) / 0.35) * 0.08;
        setProgress(Math.round(eased * 100));
      } else {
        const phase2 = (elapsed - MIN_MS) / (MAX_MS - MIN_MS);
        setProgress(Math.round(90 + phase2 * 9));
        if (isVideoReadyRef.current) complete();
      }
    }, 50);

    return () => { clearInterval(interval); document.body.style.overflow = ""; };
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#060606",
        opacity: overlayOpacity,
        transition: overlayOpacity < 1 ? "opacity 0.95s cubic-bezier(0.76, 0, 0.24, 1)" : "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: overlayOpacity < 0.4 ? "none" : "auto",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes drift1 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-50px, 40px) scale(1.12); }
        }
        @keyframes drift2 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(50px, -35px) scale(1.18); }
        }
        @keyframes drift3 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(25px, 50px) scale(0.88); }
        }
        @keyframes loader-name-in {
          0%   { opacity: 0; transform: translateY(18px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0);    filter: blur(0px); }
        }
        @keyframes loader-sub-in {
          0%   { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Aurora glows — matching particle video palette */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "-15%", right: "-8%",
          width: "55vw", height: "55vw", maxWidth: "700px", maxHeight: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(110,195,244,0.13) 0%, transparent 65%)",
          animation: "drift1 9s ease-in-out infinite alternate",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", left: "-8%",
          width: "50vw", height: "50vw", maxWidth: "650px", maxHeight: "650px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,97,171,0.11) 0%, transparent 65%)",
          animation: "drift2 11s ease-in-out infinite alternate",
        }} />
        <div style={{
          position: "absolute", top: "25%", left: "15%",
          width: "40vw", height: "40vw", maxWidth: "520px", maxHeight: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(58,58,200,0.09) 0%, transparent 65%)",
          animation: "drift3 14s ease-in-out infinite alternate",
        }} />
      </div>

      {/* Centre identity */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 7.5vw, 92px)",
            fontWeight: 400,
            letterSpacing: "-0.04em",
            color: "rgba(255,255,255,0.90)",
            lineHeight: 1,
            margin: 0,
            animation: "loader-name-in 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        >
          Jehan Zaib
        </h1>

        {/* Thin gradient rule */}
        <div style={{
          width: "48px", height: "1px", margin: "18px auto 0",
          background: "linear-gradient(90deg, #6ec3f4, #3a3aff, #ff61ab)",
          borderRadius: "999px",
        }} />

        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.22)",
            marginTop: "14px",
            fontWeight: 500,
            animation: "loader-sub-in 0.9s 0.25s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          Digital Platform Architect
        </p>
      </div>

      {/* Progress — pinned to bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 clamp(20px, 4vw, 48px)",
          marginBottom: "10px",
        }}>
          <span style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.16)",
          }}>
            Loading experience
          </span>
          <span style={{
            fontSize: "10px",
            letterSpacing: "0.06em",
            color: "rgba(255,255,255,0.22)",
            fontVariantNumeric: "tabular-nums",
            fontFamily: "var(--font-display)",
          }}>
            {progress}%
          </span>
        </div>

        {/* Progress track */}
        <div style={{
          width: "100%", height: "1px",
          background: "rgba(255,255,255,0.05)",
          position: "relative",
        }}>
          <div style={{
            position: "absolute", left: 0, top: 0, height: "1px",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #3a3aff, #6ec3f4, #ff61ab)",
            transition: "width 0.08s linear",
            boxShadow: "0 0 8px rgba(110,195,244,0.5)",
          }} />
        </div>
      </div>
    </div>
  );
}
