"use client";
import { useRef, ReactElement } from "react";
import { motion, useSpring, type SpringOptions } from "framer-motion";
import { useSound } from "@/context/SoundContext";

export default function Magnetic({
  children,
  intensity = 0.2,
  springConfig = { stiffness: 150, damping: 15, mass: 0.1 },
}: {
  children: ReactElement;
  intensity?: number;
  springConfig?: SpringOptions;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { playHover } = useSound();

  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * intensity);
    y.set(middleY * intensity);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    playHover();
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ x, y, display: "inline-block", position: "relative" }}
    >
      {children}
    </motion.div>
  );
}
