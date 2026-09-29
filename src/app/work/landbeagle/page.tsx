"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";

const meta = [
  { label: "Client", value: "Land Beagle · Endeavor Ventures LLC" },
  { label: "Type", value: "Custom Platform · Full-Stack Web Application" },
  { label: "Scope", value: "Two-sided land marketplace + full admin console" },
  { label: "Status", value: "Live · landbeagle.net" },
];

const stats = [
  { value: "2-sided", label: "Marketplace" },
  { value: "Custom", label: "Admin console" },
  { value: "Vetted", label: "Seller system" },
  { value: "5.0", label: "Client rating" },
];

const approach = [
  {
    n: "01",
    title: "Full two-sided marketplace architecture",
    body: "Built distinct buyer and seller flows from the ground up — buyers browse, search, and message sellers directly; sellers go through an application and approval process before listing. Neither flow was templated — every interaction was designed and built custom.",
  },
  {
    n: "02",
    title: "Location-based property search",
    body: "Built a multi-filter search system with State, County, and City dropdowns alongside deal type, minimum price, and minimum acreage inputs — returning live listings matched to the buyer's exact criteria.",
  },
  {
    n: "03",
    title: "APN-indexed listing system",
    body: "Every property is tracked by its Assessor's Parcel Number — the legal identifier for land. Listings are indexed, searchable, and manageable by APN, giving sellers and admins a professional-grade record system that mirrors how real land transactions are tracked.",
  },
  {
    n: "04",
    title: "Vetted seller onboarding",
    body: "Built a full seller application and review flow — applicants submit, the admin reviews and approves or rejects, and only approved sellers can list. No anonymous listings, no unvetted inventory on the platform.",
  },
  {
    n: "05",
    title: "Bones rewards and invoicing system",
    body: "Designed and built a custom rewards program — 'Bones' — that tracks seller activity, applies tiered fee structures, and generates invoices, all managed through the admin console with a real-time sales pipeline showing Pending, Invoiced, and Paid stages.",
  },
  {
    n: "06",
    title: "Full admin console built from scratch",
    body: "Built a complete operator dashboard: overview metrics, featured listing rotation, listings management by APN, seller application review, direct messaging, blog management, media library, and settings — all as one cohesive internal tool built for a non-technical operator.",
  },
];

const outcomes = [
  "Full marketplace platform",
  "Custom admin console",
  "Vetted seller onboarding",
  "APN-indexed listings",
  "Bones rewards system",
  "Direct buyer-seller messaging",
];

const skills = {
  stack: [
    "Custom Full-Stack Platform",
    "Marketplace Architecture",
    "Member Authentication",
    "Location-Based Search",
    "Admin Dashboard",
    "Rewards & Invoicing System",
    "Blog & Community",
    "Media Library",
  ],
  disciplines: [
    "Two-sided Marketplace Design",
    "Buyer & Seller UX",
    "Admin Dashboard Design",
    "Custom Backend Architecture",
    "Search & Filter Systems",
    "Seller Vetting Workflow",
    "Financial Pipeline Management",
    "End-to-End Product Ownership",
  ],
};

export default function LandBeagleCaseStudy() {
  return (
    <>
      <Nav />

      <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh", paddingTop: "80px" }}>

        {/* Back link */}
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
              Case Study · Custom Platform
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 style={{ fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 1.05, fontFamily: "var(--font-display)", color: "var(--color-text-heading)", maxWidth: "780px", marginBottom: "12px" }}>
              Land Beagle
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p style={{ fontSize: "clamp(15px,1.3vw,18px)", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: "640px", marginBottom: "clamp(32px,4vw,56px)" }}>
              A full two-sided land marketplace built from scratch — vetted seller onboarding, location-based property search, APN-indexed listings, direct buyer-seller messaging, a custom Bones rewards system, and a complete admin console to operate the entire platform.
            </p>
          </Reveal>

          {/* Metadata row */}
          <Reveal delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden", marginBottom: "clamp(40px,5vw,72px)" }}>
              {meta.map((m) => (
                <div key={m.label} style={{ background: "var(--color-bg)", padding: "20px 24px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>{m.label}</span>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>{m.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Video hero */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", position: "relative" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
            <div style={{ position: "absolute", top: "15%", left: "-5%", width: "45%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,120,60,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
            <div style={{ position: "absolute", top: "10%", right: "-5%", width: "40%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle, rgba(180,90,40,0.09) 0%, transparent 70%)", filter: "blur(40px)" }} />
          </div>
          <Reveal delay={0.05}>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "#0a0a0a", position: "relative", zIndex: 1 }}>
              <video autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block" }}>
                <source src="/images/projects/landbeagle/demo.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>

        {/* Live link */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingTop: "20px", paddingBottom: "clamp(32px,4vw,48px)" }}>
          <Reveal>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://landbeagle.net" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "999px", padding: "7px 16px", textDecoration: "none", transition: "color 0.2s, border-color 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <ExternalLink size={11} strokeWidth={1.5} />
                landbeagle.net
              </a>
            </div>
          </Reveal>
        </div>

        {/* Stats strip */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(48px,5vw,72px)" }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", overflow: "hidden" }} className="stats-grid">
              {stats.map((s) => (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.02)", padding: "clamp(24px,3vw,40px) 24px", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", textAlign: "center" }}>
                  <span style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 600, letterSpacing: "-0.04em", background: "linear-gradient(180deg,#fff,rgba(255,255,255,0.6))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1 }}>{s.value}</span>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Challenge */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "clamp(60px,7vw,100px)", paddingBottom: "clamp(60px,7vw,100px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "clamp(40px,6vw,96px)", alignItems: "start" }} className="case-two-col">
              <Reveal>
                <div style={{ position: "sticky", top: "100px" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "16px" }}>01</p>
                  <h2 style={{ fontSize: "clamp(24px,2.8vw,36px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.2, fontFamily: "var(--font-display)", color: "var(--color-text-heading)" }}>The Challenge</h2>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "15px", lineHeight: 1.75, color: "rgba(255,255,255,0.55)" }}>
                  <p>The client needed a complete two-sided land marketplace built from the ground up — not a template, not a plugin, not a modified WordPress theme. Land Beagle had to work as a real product: buyers browsing vetted land listings, sellers applying to list their properties, and an operator managing all of it through a professional admin console.</p>
                  <p>Every feature on the list was custom. Location-based search across State, County, and City. APN-indexed listings — the same identifier system used in real land transactions. A seller vetting and application approval system so no anonymous listings ever appeared on the platform. Direct buyer-to-seller messaging. A rewards system ("Bones") tied to seller activity with tiered fee structures and invoice generation.</p>
                  <p>On top of the platform itself, the client needed a full admin console to actually operate the business — one tool that could handle listings management, seller applications, messaging, blog posts, the media library, invoicing, and all platform settings, without requiring technical knowledge to run it.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Homepage hero screenshot */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(20px,2vw,28px)" }}>
          <Reveal>
            <ParallaxImage src="/images/projects/landbeagle/hero-new.webp" alt="Land Beagle — homepage, Find your next parcel. Sell yours with confidence." width={1280} height={854} />
            <p style={{ marginTop: "12px", fontSize: "12px", color: "rgba(255,255,255,0.2)", textAlign: "center", letterSpacing: "0.04em" }}>
              Homepage — Find your next parcel. Sell yours with confidence.
            </p>
          </Reveal>
        </div>

        {/* Mobile experience pair */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(60px,7vw,100px)" }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="compare-grid">
              {[
                { src: "/images/projects/landbeagle/mobile-hero.webp", label: "Mobile Homepage", sub: "Full search + hero experience on mobile", w: 1920, h: 1440 },
                { src: "/images/projects/landbeagle/mobile-browse.webp", label: "Browse By State", sub: "Location-based search on any device", w: 1920, h: 1440 },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <Image src={item.src} alt={item.label} width={item.w} height={item.h} style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                  <div style={{ marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em", maxWidth: "220px", textAlign: "right" }}>{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Approach */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "clamp(60px,7vw,100px)", paddingBottom: "clamp(60px,7vw,100px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "clamp(40px,6vw,96px)", alignItems: "start" }} className="case-two-col">
              <Reveal>
                <div style={{ position: "sticky", top: "100px" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "16px" }}>02</p>
                  <h2 style={{ fontSize: "clamp(24px,2.8vw,36px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.2, fontFamily: "var(--font-display)", color: "var(--color-text-heading)" }}>My Approach</h2>
                </div>
              </Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {approach.map((step, i) => (
                  <Reveal key={step.n} delay={i * 0.04}>
                    <div style={{ padding: "28px 0", borderBottom: i < approach.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", display: "grid", gridTemplateColumns: "40px 1fr", gap: "20px", alignItems: "start" }}>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em", paddingTop: "3px" }}>{step.n}</span>
                      <div>
                        <p style={{ fontSize: "15px", fontWeight: 500, color: "rgba(255,255,255,0.85)", marginBottom: "8px", letterSpacing: "-0.01em" }}>{step.title}</p>
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{step.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About + Latest Listings — full width after Approach */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(20px,2vw,28px)" }}>
          <Reveal>
            <ParallaxImage src="/images/projects/landbeagle/about-listings.webp" alt="Land Beagle — About section and Latest Listings" width={1280} height={854} />
            <p style={{ marginTop: "12px", fontSize: "12px", color: "rgba(255,255,255,0.2)", textAlign: "center", letterSpacing: "0.04em" }}>
              About & Latest Listings — the vetted marketplace in action
            </p>
          </Reveal>
        </div>

        {/* Admin Console comparison */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(20px,2vw,28px)" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: "20px" }}>Admin console — built from the ground up for a non-technical operator</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="compare-grid">
              {[
                { src: "/images/projects/landbeagle/dashboard-new.webp", label: "Dashboard Overview", sub: "Metrics · Featured listings · Sales pipeline", w: 1920, h: 1080 },
                { src: "/images/projects/landbeagle/listings-new.webp", label: "Listings Management", sub: "APN-indexed · Status · Deal type · Actions", w: 1920, h: 1080 },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <Image src={item.src} alt={item.label} width={item.w} height={item.h} style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                  <div style={{ marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em" }}>{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Mobile about — two phones, full width */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(60px,7vw,100px)" }}>
          <Reveal>
            <ParallaxImage src="/images/projects/landbeagle/mobile-about.webp" alt="Land Beagle — mobile experience on two devices" width={1280} height={854} />
            <p style={{ marginTop: "12px", fontSize: "12px", color: "rgba(255,255,255,0.2)", textAlign: "center", letterSpacing: "0.04em" }}>
              Fully responsive — built to work on every device from day one
            </p>
          </Reveal>
        </div>

        {/* Result */}
        <section style={{ paddingBottom: "clamp(60px,7vw,100px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <Reveal>
              <div style={{ borderRadius: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", padding: "clamp(36px,5vw,64px)", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "clamp(32px,5vw,72px)", alignItems: "start" }} className="case-two-col">
                <div>
                  <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "16px" }}>03</p>
                  <h2 style={{ fontSize: "clamp(24px,2.8vw,36px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.2, fontFamily: "var(--font-display)", color: "var(--color-text-heading)" }}>The Result</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(255,255,255,0.55)" }}>
                    A fully operational two-sided land marketplace live at landbeagle.net — with location-based property search, APN-indexed listings, a vetted seller onboarding flow, direct buyer-seller messaging, and a custom Bones rewards and invoicing system. Every feature was custom-built. The platform is backed by a complete admin console that gives the operator full control over listings, sellers, applications, blog content, invoicing, and site settings — all in one tool.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {outcomes.map((o) => (
                      <span key={o} style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "999px", padding: "6px 14px", letterSpacing: "0.01em" }}>
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Skills Applied */}
        <section style={{ paddingBottom: "clamp(60px,7vw,100px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <Reveal>
              <div style={{ borderRadius: "24px", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden" }}>
                <div style={{ padding: "28px 32px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                  <div>
                    <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "6px" }}>04</p>
                    <h2 style={{ fontSize: "clamp(18px,2vw,24px)", fontWeight: 400, letterSpacing: "-0.03em", fontFamily: "var(--font-display)", color: "var(--color-text-heading)", margin: 0 }}>
                      Skills Applied
                    </h2>
                  </div>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", maxWidth: "360px", lineHeight: 1.6, textAlign: "right" }}>
                    Every capability used to take this project from brief to live — relevant to Fiverr Pro assessment.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }} className="skills-grid">
                  <div style={{ padding: "28px 32px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                    <p style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: "20px" }}>Stack & Tools</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                      {skills.stack.map((s, i) => (
                        <div key={s} style={{ padding: "11px 0", borderBottom: i < skills.stack.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#6ec3f4", flexShrink: 0, opacity: 0.7 }} />
                          <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)" }}>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: "28px 32px" }}>
                    <p style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: "20px" }}>Disciplines</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                      {skills.disciplines.map((s, i) => (
                        <div key={s} style={{ padding: "11px 0", borderBottom: i < skills.disciplines.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#ff61ab", flexShrink: 0, opacity: 0.7 }} />
                          <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)" }}>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Nav footer */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "clamp(40px,5vw,64px)", paddingBottom: "clamp(40px,5vw,64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <Link href="/#work"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              All work
            </Link>
            <Link href="https://www.fiverr.com/jehanzaib_007" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 500, padding: "10px 20px", borderRadius: "999px", background: "rgba(255,255,255,0.9)", color: "#000", textDecoration: "none", transition: "background 0.2s" }}
            >
              Start a project
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>

        <Footer />
      </main>

      <style>{`
        @media (max-width: 810px) {
          .case-two-col { grid-template-columns: 1fr !important; }
          .case-two-col > div:first-child { position: static !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .skills-grid > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07); }
          .compare-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
