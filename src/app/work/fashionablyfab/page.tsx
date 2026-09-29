"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";

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
  { n: "01", title: "Translated animation concepts into reality", body: "The Figma file contained no animation specs — scroll effects, a custom cursor, and editorial transitions existed only in the designer's walkthrough video. I reviewed the video in detail and built all motion work from scratch on WordPress and Elementor." },
  { n: "02", title: "Designed mobile from scratch", body: "The Figma 'mobile' frame was built at tablet width — it wasn't a real mobile layout. I designed the entire true mobile experience myself, matching the intent and feel of the desktop editorial design without any reference." },
  { n: "03", title: "Scope managed within a fixed $1,500 budget", body: "Kept the build within budget by scoping clearly around 5 core pages, treating the shop as Phase 2, and pricing the looping video feature as a separate future update rather than absorbing it into the fixed fee." },
  { n: "04", title: "Supporting integrations built and wired", body: "Integrated a live Instagram feed, MailPoet email signup, and a contact form — all tested across desktop, tablet, and mobile as part of the main delivery." },
  { n: "05", title: "Post-migration stabilization", body: "When migrating from staging to the live domain caused the Instagram feed to disconnect, the scrolling footer to disappear, and blog formatting to break, I worked through each issue methodically without losing the client's confidence." },
  { n: "06", title: "Many rounds of QA across all devices", body: "Ran extensive QA directly with the client across desktop, tablet, and mobile — fixing mobile image scaling, category-page display issues, and UI inconsistencies through many iterative rounds." },
];

const outcomes = ["Custom scroll animations", "Custom cursor built", "Mobile designed from scratch", "Live Instagram feed", "MailPoet email signup", "Phase 2 work booked"];

const skills = {
  stack: ["WordPress", "Elementor", "Custom CSS & JavaScript", "Scroll Trigger Animations", "Custom Cursor", "MailPoet", "Instagram Feed Integration", "Contact Form"],
  disciplines: ["Editorial Design Translation", "Mobile-First Design (no reference)", "Animation Implementation", "Budget & Scope Management", "Figma-to-WordPress Build", "Post-Launch Migration Support", "Iterative QA (all devices)", "Client Communication"],
};

function Tag({ label }: { label: string }) {
  return (
    <div style={{ position: "absolute", top: "16px", left: "16px", zIndex: 2, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "999px", padding: "5px 13px", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", pointerEvents: "none" }}>
      {label}
    </div>
  );
}

function Divider({ num, label }: { num: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.18)", flexShrink: 0 }}>{num}</span>
      <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
      <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.18)", flexShrink: 0 }}>{label}</span>
    </div>
  );
}

export default function FashionablyFabCaseStudy() {
  return (
    <>
      <Nav />

      <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh", paddingTop: "80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>

          {/* Back */}
          <div style={{ paddingTop: "clamp(40px,5vw,64px)", paddingBottom: "clamp(32px,4vw,48px)" }}>
            <Reveal>
              <Link href="/#work" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                <ArrowLeft size={14} strokeWidth={1.5} /> All work
              </Link>
            </Reveal>
          </div>

          {/* Title block */}
          <Reveal>
            <p style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "18px" }}>Case Study · WordPress</p>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 style={{ fontSize: "clamp(44px,6.5vw,88px)", fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 1, fontFamily: "var(--font-display)", color: "var(--color-text-heading)", marginBottom: "20px" }}>FashionablyFab</h1>
          </Reveal>
          <Reveal delay={0.07}>
            <p style={{ fontSize: "clamp(15px,1.3vw,18px)", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, maxWidth: "580px", marginBottom: "clamp(32px,4vw,52px)" }}>
              A premium editorial lifestyle brand site built from a Figma file with no animation specs and no real mobile layout — everything the client expected had to be built from scratch beyond what the file contained.
            </p>
          </Reveal>

          {/* Meta row */}
          <Reveal delay={0.09}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", overflow: "hidden", marginBottom: "clamp(40px,5vw,64px)" }}>
              {meta.map(m => (
                <div key={m.label} style={{ background: "var(--color-bg)", padding: "18px 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>{m.label}</span>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>{m.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Video — full bleed within container */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", position: "relative" }}>
          <div aria-hidden style={{ position: "absolute", top: "10%", left: "5%", width: "40%", height: "70%", borderRadius: "50%", background: "radial-gradient(circle, rgba(155,80,220,0.10) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", zIndex: 0 }} />
          <div aria-hidden style={{ position: "absolute", top: "5%", right: "5%", width: "35%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle, rgba(220,80,160,0.09) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", zIndex: 0 }} />
          <Reveal delay={0.05}>
            <div style={{ position: "relative", zIndex: 1, borderRadius: "18px", overflow: "hidden" }}>
              <video autoPlay muted loop playsInline style={{ width: "100%", height: "auto", display: "block" }}>
                <source src="/images/projects/fashionablyfab/demo.mp4" type="video/mp4" />
              </video>
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

        {/* ── 01 Challenge ── */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingTop: "clamp(48px,5vw,72px)" }}>
          <Reveal>
            <div style={{ paddingBottom: "clamp(24px,3vw,40px)" }}>
              <Divider num="01" label="The Challenge" />
            </div>
          </Reveal>
          <Reveal delay={0.04}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,4vw,64px)", paddingBottom: "clamp(60px,7vw,100px)" }} className="case-two-col">
              <p style={{ fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.7, color: "rgba(255,255,255,0.55)" }}>
                The client wanted a premium editorial lifestyle brand website built from Figma files — along with a walkthrough video explaining the concept. The problem: the Figma file didn't contain the animations the client was expecting. Scroll effects, the custom cursor, and editorial transitions existed only in the video description. No visual spec existed for any of the motion work.
              </p>
              <p style={{ fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.7, color: "rgba(255,255,255,0.45)" }}>
                The Figma "mobile" frame was built at tablet width — not a real mobile layout. The entire true mobile experience had to be designed from scratch. On top of this, the client had a fixed $1,500 budget for a highly custom animation-heavy editorial site — and once delivered and migrated to the live domain, a wave of integration issues required systematic post-launch stabilization.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── HOMEPAGE — full bleed ── */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(14px,1.5vw,20px)" }}>
          <Reveal>
            <div style={{ position: "relative" }}>
              <Tag label="Homepage" />
              <ParallaxImage src="/images/projects/fashionablyfab/hero.webp" alt="FashionablyFab homepage — Lifestyle Curator. Living Boldly." width={1440} height={900} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: "14px", flexWrap: "wrap", gap: "8px" }}>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", fontStyle: "italic" }}>Lifestyle Curator. Living Boldly.</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.18)", letterSpacing: "0.06em" }}>fashionablyfab.com</p>
            </div>
          </Reveal>
        </div>

        {/* ── BLOG + PARTNERSHIPS — side-by-side columns, each self-contained ── */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(60px,7vw,100px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,4vw,56px)", alignItems: "start" }} className="case-two-col">
            <Reveal>
              <div>
                <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
                  <Tag label="Blog" />
                  <Image src="/images/projects/fashionablyfab/blog.webp" alt="FashionablyFab — Blog editorial page" width={1920} height={1536} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <p style={{ marginTop: "12px", fontSize: "13px", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>An editorial blog that reads like a magazine.</p>
              </div>
            </Reveal>
            <Reveal delay={0.02}>
              <div>
                <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
                  <Tag label="Partnerships" />
                  <Image src="/images/projects/fashionablyfab/work-with.webp" alt="FashionablyFab — Let's Work Together page" width={1920} height={1920} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <p style={{ marginTop: "12px", fontSize: "13px", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>Speaking, media & brand partnerships.</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── ABOUT + CONTACT — side-by-side columns, each self-contained ── */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(60px,7vw,100px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,4vw,56px)", alignItems: "start" }} className="case-two-col">
            <Reveal>
              <div>
                <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
                  <Tag label="About" />
                  <Image src="/images/projects/fashionablyfab/about.webp" alt="FashionablyFab — About page with FAB Collabs" width={1920} height={1440} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <p style={{ marginTop: "12px", fontSize: "13px", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>FAB Collabs — Nordstrom, HSN, and more.</p>
              </div>
            </Reveal>
            <Reveal delay={0.02}>
              <div>
                <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
                  <Tag label="Contact" />
                  <Image src="/images/projects/fashionablyfab/contact.webp" alt="FashionablyFab — Contact page" width={1920} height={1536} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <p style={{ marginTop: "12px", fontSize: "13px", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>A contact page that matches the brand — not an afterthought.</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── 02 Approach ── */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
          <Reveal>
            <div style={{ paddingBottom: "clamp(32px,4vw,52px)" }}>
              <Divider num="02" label="My Approach" />
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,4vw,56px)", paddingBottom: "clamp(60px,7vw,100px)" }} className="compare-grid">
            {approach.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.04}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "10px", letterSpacing: "0.14em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase" }}>{step.n}</span>
                  <p style={{ fontSize: "15px", fontWeight: 500, color: "rgba(255,255,255,0.82)", letterSpacing: "-0.01em", margin: 0 }}>{step.title}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ── FEATURED BLOGS — full bleed ── */}
          <Reveal>
            <div style={{ paddingBottom: "clamp(14px,1.5vw,20px)" }}>
              <div style={{ position: "relative" }}>
                <Tag label="Featured Blogs" />
                <ParallaxImage src="/images/projects/fashionablyfab/blogs-shots.webp" alt="FashionablyFab — Featured Blogs editorial grid" width={1280} height={960} />
              </div>
              <p style={{ marginTop: "12px", fontSize: "13px", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>Content that earns the scroll — built to publish without a developer.</p>
            </div>
          </Reveal>

          {/* ── THE FAB BOOK + INSTAGRAM — side-by-side columns, each self-contained ── */}
          <div style={{ paddingBottom: "clamp(60px,7vw,100px)", paddingTop: "12px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,4vw,56px)", alignItems: "start" }} className="case-two-col">
              <Reveal>
                <div>
                  <div style={{ position: "relative" }}>
                    <Tag label="Instagram" />
                    <ParallaxImage src="/images/projects/fashionablyfab/instagram.webp" alt="FashionablyFab — Live Instagram feed" width={1920} height={1920} />
                  </div>
                  <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <h3 style={{ fontSize: "clamp(18px,1.8vw,22px)", fontWeight: 500, letterSpacing: "-0.02em", color: "var(--color-text-heading)", fontFamily: "var(--font-display)", margin: 0 }}>Live Instagram Feed</h3>
                    <p style={{ fontSize: "14px", lineHeight: 1.65, color: "rgba(255,255,255,0.5)", margin: 0 }}>
                      A live-connected Instagram feed embedded directly into the homepage, pulling in her latest posts automatically so the site never looks stale — reconnected and stabilized after the live-domain migration broke it.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.02}>
                <div>
                  <div style={{ position: "relative" }}>
                    <Tag label="The Fab Book" />
                    <ParallaxImage src="/images/projects/fashionablyfab/book.webp" alt="FashionablyFab — The Fab Book page" width={1080} height={1350} />
                  </div>
                  <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <h3 style={{ fontSize: "clamp(18px,1.8vw,22px)", fontWeight: 500, letterSpacing: "-0.02em", color: "var(--color-text-heading)", fontFamily: "var(--font-display)", margin: 0 }}>The Fab Book</h3>
                    <p style={{ fontSize: "14px", lineHeight: 1.65, color: "rgba(255,255,255,0.5)", margin: 0 }}>
                      A dedicated landing page teasing Natasha&apos;s upcoming 2027 book — built to capture early interest and grow her mailing list months ahead of launch.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ── MOBILE — full width (after pair, creates rhythm break before pull quote) ── */}
          <div style={{ paddingBottom: "clamp(60px,7vw,100px)", paddingTop: "12px" }}>
            <Reveal>
              <div style={{ position: "relative" }}>
                <Tag label="Mobile Experience" />
                <ParallaxImage src="/images/projects/fashionablyfab/mobile.webp" alt="FashionablyFab — mobile experience" width={1400} height={900} />
              </div>
              <p style={{ marginTop: "12px", fontSize: "13px", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>Designed from scratch — no Figma mobile reference existed.</p>
            </Reveal>
          </div>

          {/* ── Pull quote ── */}
          <Reveal>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "clamp(48px,6vw,80px) 0", marginBottom: "clamp(60px,7vw,100px)" }}>
              <p style={{ fontSize: "clamp(24px,3.2vw,44px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.25, fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.82)", maxWidth: "860px", fontStyle: "italic" }}>
                "I really love my site. You were able to execute my vision."
              </p>
              <p style={{ marginTop: "24px", fontSize: "12px", color: "rgba(255,255,255,0.22)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Natasha Carroll · FashionablyFab · Phase 2 booked immediately
              </p>
            </div>
          </Reveal>

          {/* ── 03 Result ── */}
          <Reveal>
            <div style={{ paddingBottom: "clamp(24px,3vw,40px)" }}>
              <Divider num="03" label="The Result" />
            </div>
          </Reveal>
          <Reveal delay={0.04}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "clamp(32px,4vw,64px)", paddingBottom: "clamp(40px,5vw,64px)" }} className="case-two-col">
              <p style={{ fontSize: "clamp(15px,1.3vw,17px)", lineHeight: 1.75, color: "rgba(255,255,255,0.5)" }}>
                A fully custom, premium editorial lifestyle website live at fashionablyfab.com — with working scroll animations, a custom cursor, an editorial layout, a live Instagram feed, The Fab Book page, an email signup, and a properly built mobile experience that never actually existed in the original Figma file.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignContent: "flex-start" }}>
                {outcomes.map(o => (
                  <span key={o} style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "999px", padding: "6px 14px" }}>{o}</span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── 04 Skills ── */}
          <Reveal>
            <div style={{ paddingBottom: "clamp(24px,3vw,40px)" }}>
              <Divider num="04" label="Skills Applied" />
            </div>
          </Reveal>
          <Reveal delay={0.04}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden", marginBottom: "clamp(60px,7vw,100px)" }} className="compare-grid">
              <div style={{ padding: "28px 28px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                <p style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: "20px" }}>Stack & Tools</p>
                {skills.stack.map((s, i) => (
                  <div key={s} style={{ padding: "10px 0", borderBottom: i < skills.stack.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#6ec3f4", flexShrink: 0, opacity: 0.6 }} />
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "28px 28px" }}>
                <p style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: "20px" }}>Disciplines</p>
                {skills.disciplines.map((s, i) => (
                  <div key={s} style={{ padding: "10px 0", borderBottom: i < skills.disciplines.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#ff61ab", flexShrink: 0, opacity: 0.6 }} />
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Nav footer */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "clamp(36px,4vw,56px)", paddingBottom: "clamp(36px,4vw,56px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <Link href="/#work" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            >
              <ArrowLeft size={14} strokeWidth={1.5} /> All work
            </Link>
            <Link href="https://www.fiverr.com/jehanzaib_007" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 500, padding: "10px 22px", borderRadius: "999px", background: "rgba(255,255,255,0.9)", color: "#000", textDecoration: "none" }}
            >
              Start a project <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>

        <Footer />
      </main>

      <style>{`
        @media (max-width: 810px) {
          .case-two-col { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .compare-grid { grid-template-columns: 1fr !important; }
          .compare-grid > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07) !important; }
        }
      `}</style>
    </>
  );
}
