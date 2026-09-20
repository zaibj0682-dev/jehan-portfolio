"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  fadeOnly?: boolean;
}

export default function Reveal({ children, className, delay = 0, fadeOnly }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: fadeOnly ? 0 : 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: fadeOnly ? 0.8 : 0.7,
            ease: [0.2, 0.1, 0.2, 1],
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
