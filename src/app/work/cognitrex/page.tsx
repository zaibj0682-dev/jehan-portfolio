"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import PreloaderReady from "@/components/ui/PreloaderReady";

const meta = [
  { label: "Client", value: "Cognitrex · Hana Dhanji" },
  { label: "Type", value: "WordPress · Elementor · Go High Level" },
  { label: "Scope", value: "26-page corporate + 5-page personal brand" },
  { label: "Deadline", value: "Hard Jan 1st — press release driven" },
];

const stats = [
  { value: "26", label: "Pages built" },
  { value: "2", label: "Sites delivered" },
  { value: "2 days", label: "Initial deadline" },
  { value: "5.0", label: "Client rating" },
];

const approach = [
  {
    n: "01",
    title: "26-page build matched to spec",
    body: "Built the full Cognitrex site on WordPress and Elementor, mirroring the depth and structure of their reference site (LearningOS) across every Platform, Solutions, Services, and eight Use Case pages — all aligned to their brand guide.",
  },
  {
    n: "02",
    title: "Mid-build hosting migration",
    body: "When the client switched from GoDaddy to Go High Level partway through, I re-platformed the entire build without disrupting the timeline or missing a single external deadline.",
  },
  {
    n: "03",
    title: "Full design pivot on the personal site",
    body: "Implemented a locked editorial design system for hanadhanji.com — specific hex codes, the paid IvyPresto typeface at exact weight, and four approved photos placed exactly as the brand spec called for.",
  },
  {
    n: "04",
    title: "Same-day Coming Soon page — no charge",
    body: "When the client needed a placeholder live before a press release with almost no notice, I built and shipped a Coming Soon page at no extra cost to protect their public image.",
  },
  {
    n: "05",
    title: "High-volume feedback, fast turnarounds",
    body: "Worked directly from checklists, Notion docs, and screen recordings. Ran early-morning Zoom sessions timed around press release go-lives. Confirmed every ambiguity before touching the site.",
  },
  {
    n: "06",
    title: "Scope boundaries held clearly",
    body: "When requests moved into full SEO strategy, I pointed the client to the right specialist rather than overpromising — while handling everything design and development related myself, including post-launch troubleshooting.",
  },
];

const outcomes = [
  "Zero missed deadlines",
  "Mid-build migration",
  "Full design overhaul",
  "Repeat client",
  "Same-day emergency page",
  "Press-release launch",
];

export default function CognitrexCaseStudy() {
  return (
    <>
      <PreloaderReady />
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
              Case Study · WordPress
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 style={{ fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 1.05, fontFamily: "var(--font-display)", color: "var(--color-text-heading)", maxWidth: "780px", marginBottom: "12px" }}>
              Cognitrex{" "}
              <span style={{ color: "rgba(255,255,255,0.3)" }}>& Hana Dhanji</span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p style={{ fontSize: "clamp(15px,1.3vw,18px)", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: "600px", marginBottom: "clamp(32px,4vw,56px)" }}>
              Two complete websites — a 26-page enterprise learning platform and an executive personal brand — both delivered against hard press-release deadlines, through a mid-build hosting migration and a full design overhaul.
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

        {/* Hero image with ambient glow */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", position: "relative" }}>
          {/* Ambient glow */}
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
            <div style={{ position: "absolute", top: "20%", left: "-5%", width: "45%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle, rgba(110,195,244,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
            <div style={{ position: "absolute", top: "10%", right: "-5%", width: "40%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,97,171,0.09) 0%, transparent 70%)", filter: "blur(40px)" }} />
          </div>
          <Reveal delay={0.05}>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", position: "relative", zIndex: 1 }}>
              <Image
                src="/images/projects/cognitrex/hero.png"
                alt="Cognitrex homepage — enterprise AI LMS & LXP platform"
                width={1280}
                height={854}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
          </Reveal>
        </div>

        {/* Live links */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingTop: "20px" }}>
          <Reveal>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                { label: "cognitrex.com", href: "https://cognitrex.com" },
                { label: "hanadhanji.com", href: "https://hanadhanji.com" },
              ].map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "999px", padding: "7px 16px", textDecoration: "none", transition: "color 0.2s, border-color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                >
                  <ExternalLink size={11} strokeWidth={1.5} />
                  {l.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Stats strip */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingTop: "clamp(48px,5vw,72px)", paddingBottom: "clamp(48px,5vw,72px)" }}>
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
                  <p>The client needed a fully functional, premium website live within just 2 days — a brand-new company with nothing existing to fall back on. Cognitrex needed a 26-page WordPress site built to the depth of an established industry benchmark, covering Platform, Solutions, Services, and eight separate Use Case pages, all against a hard January 1st launch tied to national press releases going live on GlobeNewsWire, Forbes, and Canadian Business Today.</p>
                  <p>Midway through the build, the client asked to switch hosting from GoDaddy to Go High Level — meaning the entire site had to be re-platformed without losing momentum or missing the deadline.</p>
                  <p>Almost immediately after, the same client needed a second, completely different website: a personal executive-branding site for the founder herself. That project went through a full stylistic pivot mid-build — from a standard premium design to an exact, locked institutional design system, right down to specific hex codes, a paid custom typeface at a precise font weight, and a strict rule limiting the entire site to four specified photos in four specified positions.</p>
                  <p>On top of that, the client's team reviewed everything in extreme detail through checklists, Notion documents, and screen recordings — with additional out-of-scope requests surfacing throughout that needed to be scoped clearly without damaging the relationship.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Use Case image */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(40px,5vw,64px)" }}>
          <Reveal>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
              <Image
                src="/images/projects/cognitrex/use-case.png"
                alt="Cognitrex Automation Solution page — one of 8 Use Case pages built"
                width={1280}
                height={960}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p style={{ marginTop: "12px", fontSize: "12px", color: "rgba(255,255,255,0.2)", textAlign: "center", letterSpacing: "0.04em" }}>
              One of eight Use Case pages — Automation Solution
            </p>
          </Reveal>
        </div>

        {/* Video demo */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(60px,7vw,100px)" }}>
          <Reveal>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "#0a0a0a" }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                <source src="/images/projects/cognitrex/demo.mp4" type="video/mp4" />
              </video>
            </div>
            <p style={{ marginTop: "12px", fontSize: "12px", color: "rgba(255,255,255,0.2)", textAlign: "center", letterSpacing: "0.04em" }}>
              Live site walkthrough — cognitrex.com
            </p>
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

        {/* Pull quote */}
        <section style={{ paddingTop: "clamp(20px,3vw,40px)", paddingBottom: "clamp(60px,7vw,80px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <Reveal>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "clamp(48px,6vw,80px) 0", textAlign: "center" }}>
                <p style={{ fontSize: "clamp(22px,3vw,40px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.3, fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.85)", maxWidth: "800px", margin: "0 auto", fontStyle: "italic" }}>
                  "Excellent work. We couldn't have done it without you."
                </p>
                <p style={{ marginTop: "24px", fontSize: "12px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Cognitrex client · Repeat buyer · 5.0 rating
                </p>
              </div>
            </Reveal>
          </div>
        </section>

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
                    Two fully launched websites delivered on time against press-release-driven deadlines — including a same-day Coming Soon page shipped at no charge. Both projects were carried through a mid-build hosting migration and a full design overhaul without losing the client's trust or missing a single external deadline.
                  </p>
                  {/* Outcome pills */}
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

        {/* Next project nav */}
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
        }
      `}</style>
    </>
  );
}
