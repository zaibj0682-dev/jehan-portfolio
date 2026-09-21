"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface MarqueeProps {
  text: string;
  baseVelocity: number;
}

function MarqueeItem({ text, baseVelocity = 100 }: MarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div style={{ overflow: "hidden", display: "flex", flexWrap: "nowrap" }}>
      <motion.div style={{ x, display: "flex", whiteSpace: "nowrap" }}>
        {[...Array(6)].map((_, i) => (
          <span key={i} style={{ display: "block", paddingRight: "40px" }}>{text}</span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section style={{ padding: "80px 0", overflow: "hidden", display: "flex", flexDirection: "column", gap: "20px" }}>
      <div 
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(60px, 8vw, 120px)",
          fontWeight: 600,
          letterSpacing: "-0.04em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.15)",
          textTransform: "uppercase"
        }}
      >
        <MarqueeItem text="NEXT.JS · REACT · NODE.JS · THREE.JS · TAILWIND" baseVelocity={-2} />
      </div>
      <div 
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(60px, 8vw, 120px)",
          fontWeight: 600,
          letterSpacing: "-0.04em",
          color: "rgba(255,255,255,0.05)",
          textTransform: "uppercase"
        }}
      >
        <MarqueeItem text="FRAMER MOTION · AWS · VERCEL · STRIPE · SUPABASE" baseVelocity={2} />
      </div>
    </section>
  );
}
