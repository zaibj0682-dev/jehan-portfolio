// Pure CSS animation — no JS RAF loop, GPU-accelerated, zero main-thread cost.
// Stripe colors: #6ec3f4 cyan · #3a3aff electric blue · #ff61ab hot pink · #E63946 red

"use client";
import { useEffect, useRef } from "react";
import { usePreloader } from "@/context/PreloaderContext";

export default function HeroBg() {
  const { setVideoReady, isReadyToAnimate } = usePreloader();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Start playing the moment the preloader panels open — not before
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
        backgroundColor: "#050505", // Deep dark base
      }}
    >
      {/* Fallback ambient glow while the video streams in */}
      <div 
        style={{
           position: "absolute",
           inset: "-50%",
           background: "radial-gradient(circle at 50% 50%, rgba(110, 195, 244, 0.15) 0%, rgba(255, 97, 171, 0.05) 50%, transparent 70%)",
           animation: "pulse 8s ease-in-out infinite alternate"
        }}
      />
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes cinematic-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
      `}</style>

      {/* The 5.5MB Video - browser natively streams it asynchronously via range requests */}
      {/* preload="auto" ensures it starts downloading immediately but without blocking the main thread */}
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
          opacity: 0.65,
          mixBlendMode: "screen",
          filter: "saturate(0.75) contrast(1.05) brightness(1.1)",
          animation: "cinematic-zoom 25s ease-in-out infinite alternate",
        }}
      >
        <source src="/videos/hero-bg.webm" type="video/webm" />
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Cool-tint layer — knocks back warm yellows/oranges, lets cyan/pink breathe */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(8, 4, 28, 0.35)",
        mixBlendMode: "multiply",
        zIndex: 1,
      }} />

      {/* Left + right vignette so text is always readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(6,6,6,0.96) 0%, rgba(6,6,6,0.55) 38%, rgba(6,6,6,0.15) 60%, rgba(6,6,6,0.45) 100%)",
          zIndex: 2,
        }}
      />
      
      {/* Bottom fade into the next section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "25vh",
          background: "linear-gradient(to top, #060606 0%, transparent 100%)",
          zIndex: 2,
        }}
      />
    </div>
  );
}
