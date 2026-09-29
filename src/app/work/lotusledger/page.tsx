"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import PreloaderReady from "@/components/ui/PreloaderReady";

const meta = [
  { label: "Client", value: "Lotus Ledger" },
  { label: "Type", value: "Custom Code · Next.js · GitHub · Vercel" },
  { label: "Scope", value: "SaaS marketing site — full rebuild mid-project" },
  { label: "Status", value: "Live on client's own Vercel + domain" },
];

const stats = [
  { value: "2×", label: "Full rebuilds" },
  { value: "Custom", label: "Scroll animations" },
  { value: "0", label: "Client assets supplied" },
  { value: "5.0", label: "Client rating" },
];

const approach = [
  {
    n: "01",
    title: "First version on WordPress and Elementor",
    body: "Built the initial site on WordPress and Elementor to match the client's early design direction — a premium SaaS-style informational page comparable to helcim.com in quality and feel.",
  },
  {
    n: "02",
    title: "Full rebuild in custom code when WordPress couldn't deliver",
    body: "When the client requested premium scroll-trigger animations throughout the site, WordPress and Elementor couldn't support the level of motion design required. Rather than compromise, I rebuilt the entire site as a fully custom-coded Next.js application from scratch.",
  },
  {
    n: "03",
    title: "Deployed inside the client's own infrastructure",
    body: "The client wanted the site version-controlled through their own GitHub and deployed on their existing Vercel account and domain — not standard hosting. I worked entirely within their pipeline, including troubleshooting GitHub-to-Vercel sync and auto-deploy disconnects when they surfaced.",
  },
  {
    n: "04",
    title: "All copy and graphics created from scratch",
    body: "The client had no content or visuals prepared. I wrote all site copy and created premium, software-specific graphics myself — including device-framed POS app mockup screenshots to visually showcase the product — since nothing was supplied.",
  },
  {
    n: "05",
    title: "Multiple rounds of design refinement",
    body: "Iterated through several feedback rounds: updating the hero gradient and imagery, replacing emoji icons with a professional icon set, removing a custom cursor that hurt scroll performance, and rebuilding a card-stacking section to match the client's updated direction.",
  },
];

const outcomes = [
  "WordPress → custom code pivot",
  "Scroll-trigger animations",
  "All copy written from scratch",
  "All graphics created from scratch",
  "Deployed on client's Vercel",
  "GitHub CI/CD pipeline",
];

const skills = {
  stack: [
    "Next.js",
    "React",
    "Custom CSS / Tailwind",
    "Scroll Trigger Animations",
    "GitHub",
    "Vercel",
    "WordPress (v1)",
    "Elementor (v1)",
  ],
  disciplines: [
    "SaaS Marketing Design",
    "Mid-Project Tech Pivot",
    "Copywriting from Brief",
    "Product Graphics & Mockups",
    "CI/CD Pipeline Management",
    "Animation & Motion Design",
    "Iterative Design Refinement",
    "Client Infrastructure Integration",
  ],
};

export default function LotusLedgerCaseStudy() {
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
              Case Study · Custom Code
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 style={{ fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 1.05, fontFamily: "var(--font-display)", color: "var(--color-text-heading)", maxWidth: "780px", marginBottom: "12px" }}>
              Lotus Ledger
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p style={{ fontSize: "clamp(15px,1.3vw,18px)", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: "620px", marginBottom: "clamp(32px,4vw,56px)" }}>
              A premium SaaS marketing site that started on WordPress and Elementor, hit a wall when the client demanded scroll-trigger animations, and was rebuilt from the ground up as a fully custom-coded Next.js site — deployed on the client's own Vercel infrastructure, with all copy and graphics created from scratch.
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
            <div style={{ position: "absolute", top: "15%", left: "-5%", width: "45%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle, rgba(180,120,200,0.10) 0%, transparent 70%)", filter: "blur(40px)" }} />
            <div style={{ position: "absolute", top: "10%", right: "-5%", width: "40%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle, rgba(220,100,120,0.09) 0%, transparent 70%)", filter: "blur(40px)" }} />
          </div>
          <Reveal delay={0.05}>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "#0a0a0a", position: "relative", zIndex: 1 }}>
              <video autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block" }}>
                <source src="/images/projects/lotusledger/demo.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>

        {/* Live link */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingTop: "20px", paddingBottom: "clamp(32px,4vw,48px)" }}>
          <Reveal>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://www.lotusledger.io" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "999px", padding: "7px 16px", textDecoration: "none", transition: "color 0.2s, border-color 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <ExternalLink size={11} strokeWidth={1.5} />
                lotusledger.io
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
                  <p>The client needed a premium, single-page SaaS-style marketing site for their POS software business — comparable in quality to helcim.com — but after the first version was built on WordPress and Elementor, they came back requesting premium scroll-trigger animations throughout the site. That level of motion design simply wasn't achievable with the tools already in use.</p>
                  <p>On top of that, the client wasn't willing to move to standard WordPress hosting. They wanted the site version-controlled through their own existing GitHub account and deployed on their own Vercel setup and domain — meaning the entire build had to fit inside infrastructure I didn't own or control, with no fallback to standard hosting if things broke.</p>
                  <p>Adding to the complexity: the client had no content or graphics prepared at all. Every line of copy, every visual, every device mockup had to be created from scratch — there was nothing to implement from, only a brief to interpret and build from the ground up.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Features image */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(60px,7vw,100px)" }}>
          <Reveal>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
              <Image
                src="/images/projects/lotusledger/features.png"
                alt="Lotus Ledger — AI Receptionist and Technician dashboard features"
                width={1280}
                height={960}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p style={{ marginTop: "12px", fontSize: "12px", color: "rgba(255,255,255,0.2)", textAlign: "center", letterSpacing: "0.04em" }}>
              AI Receptionist + per-technician dashboard — features page
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
                    A fully custom-coded, premium SaaS marketing site delivered and deployed entirely within the client's own GitHub and Vercel setup — with scroll-trigger animations, original copy, and device-framed product graphics all created from scratch. The project involved a successful mid-project pivot from WordPress to fully custom code without losing the client, and multiple rounds of refinement completed smoothly to the client's satisfaction.
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
        }
      `}</style>
    </>
  );
}
