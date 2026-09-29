"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import PreloaderReady from "@/components/ui/PreloaderReady";

const meta = [
  { label: "Client", value: "Natasha Carroll · FashionablyFab" },
  { label: "Type", value: "WordPress · Elementor · Custom CSS/JS" },
  { label: "Scope", value: "5-page editorial lifestyle brand site" },
  { label: "Budget", value: "$1,500 fixed · Phase 2 booked" },
];

const stats = [
  { value: "5", label: "Pages built" },
  { value: "Custom", label: "Cursor & scroll FX" },
  { value: "0", label: "Figma mobile refs" },
  { value: "5.0", label: "Client rating" },
];

const approach = [
  {
    n: "01",
    title: "Translated animation concepts into reality",
    body: "The Figma file contained no animation specs — the scroll effects, custom cursor, and editorial transitions existed only in the designer's walkthrough video. I reviewed the video in detail and built all of it from scratch on WordPress and Elementor, turning a static design file into a fully motion-driven experience.",
  },
  {
    n: "02",
    title: "Designed mobile from scratch",
    body: "The Figma 'mobile' frame was built at tablet width — it wasn't a real mobile layout at all. I designed the entire true mobile experience myself, matching the intent and feel of the desktop editorial design rather than following an inaccurate reference frame.",
  },
  {
    n: "03",
    title: "Scope managed within a fixed $1,500 budget",
    body: "Kept the build within budget by scoping clearly around 5 core pages, treating the shop as Phase 2, and pricing the looping video feature as a separate future update rather than absorbing it into the fixed fee.",
  },
  {
    n: "04",
    title: "Supporting integrations built and wired",
    body: "Integrated a live Instagram feed, MailPoet email signup, and a contact form — all tested across desktop, tablet, and mobile as part of the main delivery.",
  },
  {
    n: "05",
    title: "Post-migration stabilization",
    body: "When migrating from staging to the live domain caused the Instagram feed to disconnect, the scrolling footer to disappear, and blog formatting to break, I worked through each issue methodically, explained the underlying cause rather than being defensive, and resolved each one as it surfaced.",
  },
  {
    n: "06",
    title: "Many rounds of QA across all devices",
    body: "Ran extensive QA directly with the client across desktop, tablet, and mobile — fixing mobile image scaling, category-page display issues, and UI inconsistencies through many iterative rounds, keeping the premium editorial feel consistent everywhere.",
  },
];

const outcomes = [
  "Custom scroll animations",
  "Custom cursor built",
  "Mobile designed from scratch",
  "Live Instagram feed",
  "MailPoet email signup",
  "Phase 2 work booked",
];

const skills = {
  stack: [
    "WordPress",
    "Elementor",
    "Custom CSS & JavaScript",
    "Scroll Trigger Animations",
    "Custom Cursor",
    "MailPoet",
    "Instagram Feed Integration",
    "Contact Form",
  ],
  disciplines: [
    "Editorial Design Translation",
    "Mobile-First Design (no reference)",
    "Animation Implementation",
    "Budget & Scope Management",
    "Figma-to-WordPress Build",
    "Post-Launch Migration Support",
    "Iterative QA (all devices)",
    "Client Communication",
  ],
};

export default function FashionablyFabCaseStudy() {
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
              FashionablyFab
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p style={{ fontSize: "clamp(15px,1.3vw,18px)", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: "620px", marginBottom: "clamp(32px,4vw,56px)" }}>
              A premium editorial lifestyle brand site built from a Figma file that contained no animation specs, no real mobile layout, and no motion design — with everything the client actually expected built from scratch beyond what the file specified.
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
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
            <div style={{ position: "absolute", top: "15%", left: "-5%", width: "45%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle, rgba(160,100,220,0.10) 0%, transparent 70%)", filter: "blur(40px)" }} />
            <div style={{ position: "absolute", top: "10%", right: "-5%", width: "40%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle, rgba(230,120,180,0.09) 0%, transparent 70%)", filter: "blur(40px)" }} />
          </div>
          <Reveal delay={0.05}>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", position: "relative", zIndex: 1 }}>
              <Image
                src="/images/projects/fashionablyfab/hero.png"
                alt="FashionablyFab — editorial lifestyle brand site, About page"
                width={1280}
                height={960}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
          </Reveal>
        </div>

        {/* Live link */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingTop: "20px", paddingBottom: "clamp(32px,4vw,48px)" }}>
          <Reveal>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://www.fashionablyfab.com" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "999px", padding: "7px 16px", textDecoration: "none", transition: "color 0.2s, border-color 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <ExternalLink size={11} strokeWidth={1.5} />
                fashionablyfab.com
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
                  <p>The client wanted a premium, editorial lifestyle brand website built from Figma files created by her own designer, along with a walkthrough video explaining the concept. The problem was that the Figma file didn't contain the animations the client was expecting. The scroll effects, custom cursor, and editorial transitions existed only in the video description — not in the design file itself — so there was no visual spec to build from for any of the motion work.</p>
                  <p>The Figma file's "mobile" version compounded this: it wasn't actually a mobile layout. It had been built at tablet width, meaning the entire true mobile experience had to be designed from scratch without any reference from the file.</p>
                  <p>On top of the technical gaps in the brief, the client had a fixed $1,500 budget for a highly custom, animation-heavy editorial site — meaning scope had to be managed carefully from the start. And once the site was delivered and migrated from staging to the live domain, a wave of integration issues surfaced: the Instagram feed disconnected, the scrolling footer disappeared, blog formatting broke — all requiring systematic post-launch stabilization without losing the client's confidence.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Blog page image — use case */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(60px,7vw,100px)" }}>
          <Reveal>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
              <Image
                src="/images/projects/fashionablyfab/blog.png"
                alt="FashionablyFab — Featured Blogs editorial grid"
                width={1280}
                height={960}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p style={{ marginTop: "12px", fontSize: "12px", color: "rgba(255,255,255,0.2)", textAlign: "center", letterSpacing: "0.04em" }}>
              Featured Blogs — editorial content grid
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

        {/* Video demo */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(60px,7vw,100px)" }}>
          <Reveal>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "#0a0a0a" }}>
              <video autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block" }}>
                <source src="/images/projects/fashionablyfab/demo.mp4" type="video/mp4" />
              </video>
            </div>
            <p style={{ marginTop: "12px", fontSize: "12px", color: "rgba(255,255,255,0.2)", textAlign: "center", letterSpacing: "0.04em" }}>
              Live site walkthrough — fashionablyfab.com
            </p>
          </Reveal>
        </div>

        {/* Pull quote */}
        <section style={{ paddingTop: "clamp(20px,3vw,40px)", paddingBottom: "clamp(60px,7vw,80px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <Reveal>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "clamp(48px,6vw,80px) 0", textAlign: "center" }}>
                <p style={{ fontSize: "clamp(22px,3vw,40px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.3, fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.85)", maxWidth: "800px", margin: "0 auto", fontStyle: "italic" }}>
                  "I really love my site. You were able to execute my vision."
                </p>
                <p style={{ marginTop: "24px", fontSize: "12px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Natasha Carroll · FashionablyFab · Phase 2 booked
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
                    A fully custom, premium editorial lifestyle website live at fashionablyfab.com — with working scroll animations, a custom cursor, an editorial layout, a live Instagram feed, and email signup functionality, plus a properly built mobile experience that never actually existed in the original Figma file. The client was fully satisfied, said directly "I really love my site. You were able to execute my vision," and lined up Phase 2 work immediately.
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
