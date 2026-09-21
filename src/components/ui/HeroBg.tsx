// Pure CSS animation — no JS RAF loop, GPU-accelerated, zero main-thread cost.
// Stripe colors: #6ec3f4 cyan · #3a3aff electric blue · #ff61ab hot pink · #E63946 red

"use client";
import { useEffect, useRef } from "react";
import { usePreloader } from "@/context/PreloaderContext";

export default function HeroBg() {
  const { setVideoReady, isReadyToAnimate } = usePreloader();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isReadyToAnimate && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isReadyToAnimate]);

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
    >
      <style>{`
        @keyframes cinematic-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
      `}</style>

      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
        onCanPlay={setVideoReady}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          mixBlendMode: "screen",
          animation: "cinematic-zoom 25s ease-in-out infinite alternate",
        }}
      >
        <source src="/videos/hero-bg.webm" type="video/webm" />
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Section transition — fades hero into the page background below */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50vh",
          background: "linear-gradient(to top, #000000 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
