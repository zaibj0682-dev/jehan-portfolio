"use client";
import { motion } from "framer-motion";

export default function AnimatedText({
  text,
  highlighted,
  className,
  style,
  delay = 0,
}: {
  text: string;
  highlighted?: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.h1
      className={className}
      style={style}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.08, delayChildren: delay } },
        hidden: {},
      }}
    >
      {words.map((word: string, i: number) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, filter: "blur(12px)", y: 15 },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
      {highlighted && (
        <motion.span
          variants={{
            hidden: { opacity: 0, filter: "blur(12px)", y: 15 },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          style={{ display: "inline-block", color: "rgba(255,255,255,0.35)" }}
        >
          {highlighted}
        </motion.span>
      )}
    </motion.h1>
  );
}
