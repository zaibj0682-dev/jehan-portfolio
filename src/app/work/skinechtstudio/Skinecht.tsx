"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";

const meta = [
  { label: "Client", value: "Skinecht Studio" },
  { label: "Type", value: "WordPress · Elementor Pro" },
  { label: "Industry", value: "Beauty & Aesthetics" },
  { label: "Budget", value: "$1,000 – $2,500" },
  { label: "Timeline", value: "7 – 30 days" },
  { label: "Status", value: "Live" },
];

const stats = [
  { value: "5", label: "Pages built" },
  { value: "SEO", label: "Optimised structure" },
  { value: "Mobile", label: "Fully responsive" },
  { value: "5.0 ★", label: "Client rating" },
];

const approach = [
  {
    n: "01",
    title: "Luxury editorial design system",
    body: "Built a refined visual identity across every page — calming colour palette, generous whitespace, premium typography — so the site communicates the same quality as the treatments themselves before a single word is read.",
  },
  {
    n: "02",
    title: "Treatment pages that educate and convert",
    body: "Each treatment got its own dedicated page: clearly structured service benefits, before/after framing, and booking-focused CTAs positioned at the natural decision points in the scroll.",
  },
  {
    n: "03",
    title: "Booking-first information architecture",
    body: "Structured every page flow to funnel visitors toward the booking action — service highlight → trust signals → single CTA — removing friction and reducing the number of clicks to a booked appointment.",
  },
  {
    n: "04",
    title: "Performance & SEO foundation",
    body: "Optimised images, clean semantic HTML, speed tuning, and SEO-friendly architecture so the site ranks well for local beauty and aesthetics searches — not just looks good on day one.",
  },
  {
    n: "05",
    title: "High-quality imagery integration",
    body: "Worked closely with the client's photography assets, placing images intentionally throughout the layout to reinforce the premium spa-like atmosphere and build emotional trust with first-time visitors.",
  },
];

const outcomes = [
  "Luxury editorial layout",
  "5 dedicated treatment pages",
  "Booking-focused CTAs",
  "Mobile responsive",
  "Speed optimised",
  "SEO-friendly architecture",
  "Custom CSS refinements",
  "Premium brand consistency",
];

const stack = [
  "WordPress",
  "Elementor Pro",
  "Custom CSS",
  "Responsive Design",
  "Performance Optimisation",
  "SEO Best Practices",
];

const sectionHead: React.CSSProperties = {
  fontSize: "clamp(28px,3.5vw,44px)",
  fontWeight: 400,
  letterSpacing: "-0.03em",
  lineHeight: 1.1,
  fontFamily: "var(--font-display)",
  color: "var(--color-text-heading)",
  marginBottom: "16px",
};

const bodyText: React.CSSProperties = {
  fontSize: "clamp(15px,1.6vw,17px)",
  lineHeight: 1.75,
  color: "rgba(255,255,255,0.55)",
  maxWidth: "640px",
};

const chip: React.CSSProperties = {
  display: "inline-block",
  padding: "5px 14px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.1)",
  fontSize: "12px",
  color: "rgba(255,255,255,0.5)",
  letterSpacing: "0.02em",
};

export default function SkinechtCaseStudy() {
  return (
    <>
      <Nav />

      <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh", paddingTop: "80px" }}>

        {/* Back */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingTop: "clamp(40px,5vw,64px)" }}>
          <Reveal>
            <Link
              href="/#work"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              All work
            </Link>
          </Reveal>
        </div>

        {/* Header */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingTop: "clamp(32px,4vw,48px)" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>
              Case Study · Beauty & Aesthetics
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 style={{ fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 1.05, fontFamily: "var(--font-display)", color: "var(--color-text-heading)", maxWidth: "780px", marginBottom: "12px" }}>
              Skinecht Studio
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ ...bodyText, marginBottom: "40px" }}>
              A luxury beauty and aesthetics studio needed a digital presence as refined as their treatments — editorial design, clear service architecture, and booking-focused UX built to convert first-time visitors into paying clients.
            </p>
          </Reveal>

          {/* Meta grid */}
          <Reveal delay={0.12}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden", marginBottom: "clamp(48px,6vw,80px)" }}>
              {meta.map(({ label, value }) => (
                <div key={label} style={{ background: "var(--color-bg)", padding: "20px 24px" }}>
                  <p style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "6px" }}>{label}</p>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Hero image */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", marginBottom: "clamp(48px,6vw,80px)" }}>
          <Reveal>
            <ParallaxImage
              src="/images/projects/skinechtstudio/hero.webp"
              alt="Skinecht Studio — luxury beauty website mockup"
              width={1448}
              height={1086}
              priority
            />
          </Reveal>
        </div>

        {/* Stats */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", marginBottom: "clamp(64px,8vw,100px)" }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden" }}>
              {stats.map(({ value, label }) => (
                <div key={label} style={{ background: "#0a0a0a", padding: "clamp(24px,3vw,40px) 24px", textAlign: "center" }}>
                  <p style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 500, letterSpacing: "-0.04em", color: "var(--color-text-heading)", fontFamily: "var(--font-display)", marginBottom: "6px" }}>{value}</p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Challenge */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", marginBottom: "clamp(64px,8vw,100px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "start" }}>
            <Reveal>
              <p style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "20px" }}>The challenge</p>
              <h2 style={sectionHead}>Communicating luxury before a word is read</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p style={{ ...bodyText, paddingTop: "clamp(0px,2vw,36px)" }}>
                Skinecht Studio offers premium skincare treatments — facial rejuvenation, Morpheus8, wellness therapies — but their digital presence didn't reflect the quality of the experience. The client needed a website that immediately communicated trust, professionalism, and calm luxury, while making it effortless for visitors to explore treatments and book appointments. The design had to do the heavy lifting.
              </p>
            </Reveal>
          </div>
        </div>


        {/* Approach */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", marginBottom: "clamp(64px,8vw,100px)" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "20px" }}>Approach</p>
            <h2 style={{ ...sectionHead, maxWidth: "560px", marginBottom: "clamp(40px,5vw,64px)" }}>How I built it</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.07)", borderRadius: "20px", overflow: "hidden" }}>
            {approach.map(({ n, title, body }, i) => (
              <Reveal key={n} delay={i * 0.04}>
                <div style={{ background: "#0a0a0a", padding: "clamp(28px,3vw,40px)" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)", marginBottom: "16px" }}>{n}</p>
                  <h3 style={{ fontSize: "16px", fontWeight: 500, color: "rgba(255,255,255,0.85)", marginBottom: "12px", letterSpacing: "-0.02em" }}>{title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(255,255,255,0.45)" }}>{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Outcomes + Stack */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", marginBottom: "clamp(64px,8vw,100px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)" }}>
            <Reveal>
              <p style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "20px" }}>What was delivered</p>
              <h2 style={{ ...sectionHead, marginBottom: "28px" }}>Outcomes</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {outcomes.map(o => <span key={o} style={chip}>{o}</span>)}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "20px" }}>Technologies</p>
              <h2 style={{ ...sectionHead, marginBottom: "28px" }}>Stack</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {stack.map(s => <span key={s} style={chip}>{s}</span>)}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Next project */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(64px,8vw,100px)", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "clamp(48px,6vw,80px)" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "20px" }}>Next</p>
            <Link
              href="/work/fashionablyfab"
              style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget.querySelector("span") as HTMLElement).style.color = "rgba(255,255,255,0.92)"; }}
              onMouseLeave={e => { (e.currentTarget.querySelector("span") as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
            >
              <span style={{ fontSize: "clamp(24px,3.5vw,44px)", fontWeight: 400, letterSpacing: "-0.03em", fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.5)", transition: "color 0.3s" }}>
                FashionablyFab →
              </span>
            </Link>
          </Reveal>
        </div>

      </main>

      <Footer />
    </>
  );
}
