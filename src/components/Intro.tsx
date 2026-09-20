"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion, useMotionTemplate } from "framer-motion";

const lines = [
  "My journey started in a university dorm room, balancing lectures with late-night coding.",
  "I learned a new framework in the morning and deployed it for a real client by evening.",
  "That relentless pace — engineering fast, delivering faster — became my entire philosophy.",
  "It took 18 months of uncompromising dedication to earn my first Top Rated badge.",
  "Then came the first enterprise contract. Then clients in the US. Then the UK. Then globally.",
  "To handle the immense scale, I founded an agency.",
  "Today, we architect and launch over 100 bespoke web experiences every single month.",
  "But despite the growth, every project still goes through me. Every client speaks to me directly.",
  "Over 3,300 projects deployed. 2,277 five-star reviews. Zero compromises on quality.",
  "I don't just build websites. I engineer digital assets that drive revenue.",
  "I study your market, your competitors, and your audience before writing a single line of code.",
  "Because a beautiful design is worthless if it doesn't convert visitors into clients.",
  "This approach is why founders return for their second, third, and fourth platforms.",
  "One dedicated expert. One elite standard. From our first call to launch day.",
  "That is the promise. And it is the same one I made on day one.",
];

function StoryLine({ text }: { text: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 45%"],
  });

  const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const background = useMotionTemplate`linear-gradient(90deg, #ffffff ${percentage}%, rgba(255,255,255,0.15) ${percentage}%)`;
  const y = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <motion.div ref={ref} style={{ y }}>
      <motion.p
        style={{
          fontSize: "clamp(22px, 3vw, 36px)",
          lineHeight: 1.35,
          letterSpacing: "-0.025em",
          fontWeight: 400,
          fontFamily: "var(--font-display)",
          backgroundImage: background,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          display: "inline",
        }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
}

export default function Intro() {
  return (
    <section
      style={{
        maxWidth: "1600px",
        margin: "0 auto",
        padding: "clamp(60px, 7vw, 100px) 40px",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(20px, 2.5vw, 32px)",
        }}
      >
        {/* Label */}
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
            marginBottom: "8px",
          }}
        >
          The story
        </p>

        {lines.map((text, i) => (
          <StoryLine key={i} text={text} index={i} />
        ))}
      </div>
    </section>
  );
}
