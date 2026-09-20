"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PrimaryButton from "./ui/PrimaryButton";
import GhostButton from "./ui/GhostButton";
import { Star } from "lucide-react";
import HeroBg from "./ui/HeroBg";
import TiltCard from "./ui/TiltCard";
import AnimatedText from "./ui/AnimatedText";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "clamp(800px, 100svh, 1080px)",
        paddingLeft: "clamp(20px, 4vw, 40px)",
        paddingRight: "clamp(20px, 4vw, 40px)",
        maxWidth: "1920px",
        margin: "0 auto",
      }}
    >
      {/* bg gradient */}
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} aria-hidden />

      {/* Canvas-based animated gradient / Video */}
      <HeroBg />

      {/* Content — two-column on desktop */}
      <div
        className="relative z-10 w-full flex flex-col desktop:flex-row desktop:items-center desktop:justify-between gap-12 desktop:gap-16"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingTop: "clamp(100px, 14vw, 160px)",
          paddingBottom: "clamp(80px, 10vw, 120px)",
        }}
      >
        {/* Left: main copy */}
        <div className="flex flex-col gap-8" style={{ maxWidth: "640px" }}>
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", width: "fit-content" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                padding: "6px 14px",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "999px",
                backdropFilter: "blur(10px)",
              }}
            >
              <Star size={11} strokeWidth={1.5} style={{ color: "#d39794" }} />
              Top Rated · Fiverr · Since 2020
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance"
            style={{
              fontSize: "clamp(40px, 5.5vw, 72px)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "rgba(255,255,255,0.92)",
              fontFamily: "var(--font-display)",
              maxWidth: "600px",
            }}
          >
            High-converting web experiences engineered for industry leaders.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(15px, 1.3vw, 17px)",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.42)",
              maxWidth: "480px",
              marginTop: "24px",
              marginBottom: "40px",
            }}
          >
            Partnering with ambitious brands to engineer high-performance platforms. Over 3,300+ successful deployments globally. One dedicated expert, from strategy to launch.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <PrimaryButton href="https://www.fiverr.com/jehanzaib_007" target="_blank">
              Start a project
            </PrimaryButton>
            <GhostButton href="#work">View my work</GhostButton>
          </motion.div>

          {/* Trust strip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2" 
            style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}
          >
            <span className="flex items-center gap-1.5">
              <Star size={11} strokeWidth={1.5} style={{ color: "#d39794" }} />
              5.0 · 2,277 reviews
            </span>
            <span>3,300+ projects</span>
            <span>~1 hr reply</span>
          </motion.div>
        </div>

        {/* Right: profile card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1000 }}
          className="hidden desktop:block shrink-0"
        >
          <TiltCard>
            <div
              className="magic-border"
              style={{
                width: "300px",
                borderRadius: "20px",
                background: "rgba(12,12,12,0.8)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
              }}
            >
              <div className="magic-border-inner" />
              <div className="magic-border-content">
              {/* Profile header */}
              <div style={{ padding: "28px 24px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,255,255,0.1)" }}>
                  <Image src="/images/profile.png" alt="Jehan Zaib" width={72} height={72} className="object-cover object-top w-full h-full" priority />
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "-0.02em", color: "var(--color-text-heading)", lineHeight: 1.2 }}>Jehan Zaib</p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "3px" }}>WordPress Designer & Developer</p>
                </div>
                <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                  <span className="flex items-center gap-1"><Star size={10} strokeWidth={1.5} style={{ color: "#d39794" }} />5.0</span>
                  <span>2,277 reviews</span>
                  <span>Top Rated</span>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

              {/* Project previews */}
              <div style={{ padding: "16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {[
                  { name: "Bliss Thai Spa", img: "/images/projects/blissthaispa-mockup.png" },
                  { name: "Penguin Keys", img: "/images/projects/penguinkeys-mockup.png" },
                  { name: "21 Neptune", img: "/images/projects/neptune-mockup.png" },
                  { name: "Panel Paramedics", img: "/images/projects/panelparamedics-mockup.png" },
                ].map(({ name, img }) => (
                  <div key={name} style={{ borderRadius: "8px", overflow: "hidden", aspectRatio: "4/3", background: "#111" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ padding: "0 16px 20px" }}>
                <a
                  href="https://www.fiverr.com/jehanzaib_007"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "11px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                >
                  View Fiverr profile →
                </a>
              </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
