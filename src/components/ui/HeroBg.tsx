// Pure CSS animation — no JS RAF loop, GPU-accelerated, zero main-thread cost.
// Stripe colors: #6ec3f4 cyan · #3a3aff electric blue · #ff61ab hot pink · #E63946 red

export default function HeroBg() {
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
          0% { transform: scaleX(-1) scaleY(1); }
          100% { transform: scaleX(-1.15) scaleY(1.15); }
        }
      `}</style>

      {/* The 20MB Video - browser natively streams it asynchronously via range requests */}
      {/* preload="auto" ensures it starts downloading immediately but without blocking the main thread */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.85, 
          mixBlendMode: "screen", 
          filter: "saturate(1.3) contrast(1.15)", // A bit more pop since we flipped it to the dark side
          animation: "cinematic-zoom 25s ease-in-out infinite alternate",
        }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Soft left-side darkening overlay so white text stays ultra-readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(6,6,6,0.95) 0%, rgba(6,6,6,0.6) 35%, rgba(6,6,6,0.0) 100%)",
          zIndex: 1, // Place above the video
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
          zIndex: 1,
        }}
      />
    </div>
  );
}
