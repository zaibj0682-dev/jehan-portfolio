"use client";
import Parallax from "./ui/Parallax";
import { ExternalLink } from "lucide-react";
import Reveal from "./ui/Reveal";
import Image from "next/image";
import SplitText from "./ui/SplitText";


interface CaseStudy {
  num: string;
  client: string;
  industry: string;
  need: string;
  time: string;
  result: string;
  url: string | null;
  caseStudy?: string;
  mockup: string;
  alt: string;
}

const studies: CaseStudy[] = [
  {
    num: "01",
    client: "Bliss Thai Spa",
    industry: "Wellness & Beauty",
    need: "Multi-page site to replace a minimal booking page — showcasing 8 signature treatments and driving online bookings.",
    time: "2 weeks",
    result: "Online bookings and direct calls increased noticeably after launch.",
    url: "https://blissthaispa.ca",
    mockup: "/images/projects/blissthaispa-mockup.png",
    alt: "Bliss Thai Spa website",
  },
  {
    num: "02",
    client: "Panel Paramedics",
    industry: "Solar & Home Services",
    need: "A conversion-focused web platform for a solar panel repair and maintenance company targeting homeowners and businesses.",
    time: "2 weeks",
    result: "Clear service breakdown drove a steady flow of quote requests from week one.",
    url: "https://panelparamedics.com",
    mockup: "/images/projects/panelparamedics-mockup.png",
    alt: "Panel Paramedics solar services website",
  },
  {
    num: "03",
    client: "21 Neptune Apartments",
    industry: "Real Estate",
    need: "A modern property landing page to drive tour bookings for a new Lynn, MA apartment building.",
    time: "10 days",
    result: "Conversion-focused design generated a strong flow of tour requests from week one.",
    url: "https://21neptuneapartments.com",
    mockup: "/images/projects/neptune-mockup.png",
    alt: "21 Neptune Apartments website",
  },
  {
    num: "04",
    client: "Penguin Keys",
    industry: "E-commerce",
    need: "A WooCommerce store to sell digital game keys, gift cards, and subscriptions to a global audience.",
    time: "3 weeks",
    result: "Store launched with full catalogue and seamless checkout. Client has since expanded the product range.",
    url: "https://penguinkeys.com",
    mockup: "/images/projects/penguinkeys-mockup.png",
    alt: "Penguin Keys WooCommerce store",
  },
  {
    num: "05",
    client: "Cognitrex & Hana Dhanji",
    industry: "Enterprise SaaS",
    need: "Two premium websites — a 26-page enterprise learning platform and an executive personal brand site — built in 17 days against press-release-driven launch deadlines.",
    time: "17 days",
    result: "Both sites launched on time. Featured in Forbes, GlobeNewsWire, and Canadian Business Today.",
    url: "https://cognitrex.com",
    caseStudy: "/work/cognitrex",
    mockup: "/images/projects/cognitrex/hero.png",
    alt: "Cognitrex enterprise learning platform",
  },
  {
    num: "06",
    client: "Velisse Labs",
    industry: "Research Products",
    need: "A premium WooCommerce store with custom account-gating, tiered bundle pricing, and per-SKU COA verification — all built beyond what the platform supports out of the box.",
    time: "Multi-month",
    result: "Fully custom store live. Client returned multiple times for new products. 5-star review with tip.",
    url: "https://velisselabs.com",
    caseStudy: "/work/velisse",
    mockup: "/images/projects/velisse/coa.png",
    alt: "Velisse Labs WooCommerce research peptide store",
  },
  {
    num: "07",
    client: "Lotus Ledger",
    industry: "SaaS / POS",
    need: "A premium SaaS marketing site that started on WordPress, hit a wall with scroll animations, and was fully rebuilt as a custom Next.js app — deployed on the client's own Vercel, with all copy and graphics created from scratch.",
    time: "Multi-phase",
    result: "Custom-coded site live on client's own infrastructure. Full pivot from WordPress without losing the client.",
    url: "https://www.lotusledger.io",
    caseStudy: "/work/lotusledger",
    mockup: "/images/projects/lotusledger/hero.png",
    alt: "Lotus Ledger salon POS SaaS marketing site",
  },
  {
    num: "08",
    client: "FashionablyFab",
    industry: "Lifestyle & Editorial",
    need: "A premium editorial lifestyle brand site built from a Figma file with no animation specs and no real mobile layout — with everything the client expected built from scratch beyond what the file specified.",
    time: "Phase 1 + 2",
    result: "\"I really love my site. You were able to execute my vision.\" — Phase 2 work booked immediately.",
    url: "https://www.fashionablyfab.com",
    caseStudy: "/work/fashionablyfab",
    mockup: "/images/projects/fashionablyfab/hero.png",
    alt: "FashionablyFab editorial lifestyle brand website",
  },
];

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ProjectCard({ study, index }: { study: CaseStudy; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Start at 0 (top visible) and pan up to -20% as we scroll down
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <Reveal delay={index * 0.06}>
      <div ref={ref} className="group flex flex-col gap-6 h-full">
        {/* Image Container */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 10",
            overflow: "hidden",
            borderRadius: "24px",
            position: "relative",
            background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.05)",
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
            transform: "translateZ(0)",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          }}
        >
          {/* Inner Parallax Wrapper */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "120%",
              y,
            }}
          >
            <Image
              src={study.mockup}
              alt={study.alt}
              fill
              sizes="(max-width: 810px) 100vw, (max-width: 1280px) 50vw, 480px"
              style={{
                objectFit: "contain",
                objectPosition: "center center",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
              className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
            />
          </motion.div>
          
          {/* Floating Industry Tag */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.9)",
              padding: "6px 12px",
              borderRadius: "999px",
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {study.industry}
          </div>
          
          {/* Subtle Inner Ring */}
          <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", pointerEvents: "none" }} />
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "0 4px", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
            <h3
              style={{
                fontSize: "clamp(20px, 2vw, 24px)",
                lineHeight: 1.2,
                letterSpacing: "-0.03em",
                fontWeight: 500,
                color: "var(--color-text-heading)",
                fontFamily: "var(--font-display)",
                margin: 0,
              }}
            >
              {study.client}
            </h3>
            {study.url && (
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.6)",
                  flexShrink: 0,
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#000";
                  el.style.background = "#fff";
                  el.style.transform = "scale(1.1)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "rgba(255,255,255,0.6)";
                  el.style.background = "rgba(255,255,255,0.05)";
                  el.style.transform = "scale(1)";
                }}
              >
                <ExternalLink size={14} strokeWidth={2} />
              </a>
            )}
          </div>

          <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(255,255,255,0.5)", margin: 0 }}>
            {study.need}
          </p>

          <div
            style={{
              marginTop: "auto",
              paddingTop: "16px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "11px", letterSpacing: "0.05em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>
                Delivery
              </span>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                {study.time}
              </span>
            </div>
            {study.caseStudy && (
              <a
                href={study.caseStudy}
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                Read case study →
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      style={{ width: "100%", paddingTop: "clamp(60px,7vw,100px)", paddingBottom: "clamp(60px,7vw,100px)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        {/* Header */}
        <div
          className="flex flex-col desktop:flex-row desktop:items-end desktop:justify-between gap-6"
          style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}
        >
          <div>
            <Reveal>
              <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "16px" }}>
                Selected work
              </p>
              <div
                style={{
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.04em",
                  fontWeight: 500,
                  maxWidth: "480px",
                }}
              >
                <SplitText text="Proven impact." style={{ color: "rgba(255,255,255,0.92)" }} />
                <SplitText text="Measurable results." delay={0.2} style={{ color: "rgba(255,255,255,0.25)" }} />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <p style={{ fontSize: "14px", lineHeight: 1.65, color: "rgba(255,255,255,0.38)", maxWidth: "340px" }}>
              A curated selection of digital platforms engineered to solve complex business challenges across wellness, real estate, and e-commerce.
            </p>
          </Reveal>
        </div>

        {/* 2-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
            gap: "clamp(14px, 2vw, 24px)",
          }}
        >
          {studies.map((s, i) => (
            <ProjectCard key={i} study={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
