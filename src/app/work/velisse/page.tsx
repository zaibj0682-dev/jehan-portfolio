"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";

const meta = [
  { label: "Client", value: "Velisse Labs" },
  { label: "Type", value: "WordPress · WooCommerce · Custom PHP" },
  { label: "Scope", value: "Custom-gated research peptide store" },
  { label: "Status", value: "Live · Repeat long-term buyer" },
];

const stats = [
  { value: "6+", label: "Product SKUs" },
  { value: "Custom", label: "Account gate" },
  { value: "Tiered", label: "Bundle pricing" },
  { value: "5.0 ★", label: "Rating + tip" },
];

const approach = [
  {
    n: "01",
    title: "Premium design system throughout",
    body: "Built the full store with a polished, professional aesthetic — clean product pages, consistent spacing and borders, refined typography — matching the elevated feel required for a premium research-products brand.",
  },
  {
    n: "02",
    title: "Custom account-gate plugin",
    body: "Standard WooCommerce can't force account creation before a visitor can even browse — only before checkout. I built a custom plugin that gates the entire website behind a login/registration screen, so no page is accessible without signing up first.",
  },
  {
    n: "03",
    title: "Custom tiered bundle pricing",
    body: "Tiered bundle pricing isn't native to WooCommerce. I built a custom solution that automatically applies discounts based on quantity purchased — more bottles equals bigger savings — without any plugins that couldn't meet the exact requirement.",
  },
  {
    n: "04",
    title: "Buy in Bundle flow",
    body: "Built a dedicated 'Buy in Bundle' feature so customers could select multi-packs directly, with the tiered pricing applied automatically at point of selection — no extra steps, no confusion at checkout.",
  },
  {
    n: "05",
    title: "Per-SKU COA verification",
    body: "Implemented per-product Certificate of Analysis tabs linking each SKU to its correct verification document, plus a dedicated COA page with verification badges — all styled consistently with the premium brand look.",
  },
  {
    n: "06",
    title: "Iterative QA via Google Docs",
    body: "Worked through many rounds of client feedback delivered via Google Docs with a green/red highlight system for completed vs. unclear requests. Fixed mobile responsiveness, UI consistency across borders and dropdowns, and product image scaling across many revision cycles.",
  },
];

const outcomes = [
  "Custom account-gate plugin",
  "Tiered bundle pricing",
  "Per-SKU COA verification",
  "Age-gate (21+)",
  "Buy in Bundle flow",
  "Repeat long-term buyer",
];

const skills = {
  stack: [
    "WordPress",
    "WooCommerce",
    "Elementor",
    "Custom PHP Plugin",
    "Custom CSS",
    "Age-Gate Implementation",
    "COA Documentation System",
    "Google Docs QA Workflow",
  ],
  disciplines: [
    "E-commerce UX Design",
    "Custom Plugin Development",
    "Tiered Pricing Architecture",
    "Account-Gated Access",
    "Mobile Responsiveness",
    "Iterative Client QA",
    "Scope & Budget Management",
    "Post-Launch Support",
  ],
};

export default function VelisseCaseStudy() {
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
              Case Study · WooCommerce
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 style={{ fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 1.05, fontFamily: "var(--font-display)", color: "var(--color-text-heading)", maxWidth: "780px", marginBottom: "12px" }}>
              Velisse Labs
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p style={{ fontSize: "clamp(15px,1.3vw,18px)", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: "600px", marginBottom: "clamp(32px,4vw,56px)" }}>
              A premium WooCommerce research peptide store built beyond what the platform supports out of the box — custom account-gating, tiered bundle pricing, and per-SKU COA verification, all wrapped in a polished high-end design.
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
            <div style={{ position: "absolute", top: "15%", left: "-5%", width: "45%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle, rgba(230,100,180,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
            <div style={{ position: "absolute", top: "10%", right: "-5%", width: "40%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle, rgba(230,120,80,0.09) 0%, transparent 70%)", filter: "blur(40px)" }} />
          </div>
          <Reveal delay={0.05}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <ParallaxImage src="/images/projects/velisse/hero-new.webp" alt="Velisse Labs — homepage hero, Research Quality. Elevated." width={1280} height={854} priority />
            </div>
          </Reveal>
        </div>

        {/* Live link */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingTop: "20px", paddingBottom: "clamp(32px,4vw,48px)" }}>
          <Reveal>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://velisselabs.com" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "999px", padding: "7px 16px", textDecoration: "none", transition: "color 0.2s, border-color 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <ExternalLink size={11} strokeWidth={1.5} />
                velisselabs.com
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
                  <p>The client wanted a premium, polished WooCommerce store for a research-products brand — but with requirements that standard WooCommerce simply can't handle. The biggest was a popup gate requiring every visitor to create an account before they could even browse the site at all, not just before checkout, which has no native solution in WooCommerce.</p>
                  <p>On top of that, the client wanted tiered bundle pricing — "Buy 3, Save 10%" — another feature that doesn't exist in default WooCommerce. The site also needed strict age-gating (21+), verified Certificate of Analysis documentation for every individual SKU, and a clean singles-vs-bundles shopping structure, all wrapped in a premium, elevated look and feel.</p>
                  <p>Layered on top of the technical requirements was an extended revision process delivered via Google Docs with a green/red highlight system — many rounds of detailed feedback covering mobile responsiveness, UI consistency, product image scaling, and dropdown behavior — all while keeping the build within the client's budget and maintaining the premium aesthetic throughout every iteration.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Account-gated shop — full width after Challenge */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(20px,2vw,28px)" }}>
          <Reveal>
            <ParallaxImage src="/images/projects/velisse/shop-listing.webp" alt="Velisse Labs — account-gated product shop listing" width={1280} height={854} />
            <p style={{ marginTop: "12px", fontSize: "12px", color: "rgba(255,255,255,0.2)", textAlign: "center", letterSpacing: "0.04em" }}>
              Account-gated store — no browsing without signing up
            </p>
          </Reveal>
        </div>

        {/* Side-by-side: Shop grid + COA */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(60px,7vw,100px)" }}>
          <Reveal>
            <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: "20px" }}>Store design · COA verification system</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="compare-grid">
              {[
                { src: "/images/projects/velisse/shop-new.webp", label: "Product Catalogue", sub: "Tiered bundles + custom pricing", w: 1920, h: 1440 },
                { src: "/images/projects/velisse/coa.webp", label: "COA Verification System", sub: "Per-SKU certificate documentation", w: 1920, h: 1440 },
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

        {/* COA / About page — full width after Approach */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", paddingBottom: "clamp(60px,7vw,100px)" }}>
          <Reveal>
            <ParallaxImage src="/images/projects/velisse/about-coa.webp" alt="Velisse Labs — Verified. Documented. Transparent. COA and About page" width={1280} height={854} />
            <p style={{ marginTop: "12px", fontSize: "12px", color: "rgba(255,255,255,0.2)", textAlign: "center", letterSpacing: "0.04em" }}>
              "Verified. Documented. Transparent." — COA verification built into the brand
            </p>
          </Reveal>
        </div>

        {/* Pull quote */}
        <section style={{ paddingTop: "clamp(20px,3vw,40px)", paddingBottom: "clamp(60px,7vw,80px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
            <Reveal>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "clamp(48px,6vw,80px) 0", textAlign: "center" }}>
                <p style={{ fontSize: "clamp(22px,3vw,40px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.3, fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.85)", maxWidth: "800px", margin: "0 auto", fontStyle: "italic" }}>
                  "A true 5-star experience."
                </p>
                <p style={{ marginTop: "24px", fontSize: "12px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Velisse Labs client · Repeat buyer · 5.0 rating + tip
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
                    A fully functional, premium-designed WooCommerce store live at velisselabs.com — featuring a custom account-gated entry system, custom tiered bundle pricing, an automatic Buy in Bundle flow, per-product COA verification, and age-gating, all built beyond what standard WooCommerce offers out of the box. The client became a repeat, long-term buyer, returning multiple times over several months for new products and features, and left a 5-star review with a tip.
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
          .skills-grid { grid-template-columns: 1fr !important; }
          .skills-grid > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07); }
          .compare-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
