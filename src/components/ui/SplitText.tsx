"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  trigger?: boolean;
}

export default function SplitText({ text, className, style, delay = 0, trigger = true }: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(4px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView && trigger ? "visible" : "hidden"}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", ...style }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em", paddingBottom: "0.1em" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
