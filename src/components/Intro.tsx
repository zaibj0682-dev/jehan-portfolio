"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion, useMotionTemplate } from "framer-motion";

const lines = [
  "I started on Fiverr while still at university in Okara, Pakistan.",
  "Learning a new technique in the morning. Shipping it for a real client by evening.",
  "That pace — learning fast, delivering faster — became my whole approach.",
  "My first Top Rated badge came after 18 months of late nights and early mornings.",
  "Then my first $2,500 project. Then my first client in the US. Then the UK. Then everywhere.",
  "I founded Upastra Digital Media to handle the scale.",
  "Today, my team delivers 100 to 120 WordPress websites every single month.",
  "But every project still goes through me. Every client still talks to me directly.",
  "3,300 projects delivered. 2,277 five-star reviews. Not one handed off to a stranger.",
  "I don't give you a template and call it done.",
  "I study your industry before I open Elementor.",
  "I think about your customers, your goals, what the page actually needs to do.",
  "That's why clients come back — for the second site, the third, the fourth.",
  "One contact. One standard. From your first message to the day you go live.",
  "That's the promise. And it's the same one I made on day one.",
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
