"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Is domain and hosting infrastructure included?",
    a: "We recommend you retain ownership of your core assets. A domain costs ~$10/year and robust hosting is ~$10/month. We will handle the entire technical configuration and DNS routing for you at no additional charge.",
  },
  {
    q: "Do you provide copywriting and content?",
    a: "We architect the platform around your brand's voice. You provide the core copy, and we strategically integrate it for maximum conversion. If content isn't finalized, we deploy premium structural placeholders.",
  },
  {
    q: "How are premium plugin licenses handled?",
    a: "Transparency is paramount. Any required enterprise plugins are licensed directly to your business to ensure you retain full legal ownership and control. A full technical cost breakdown is provided during discovery.",
  },
  {
    q: "What happens post-launch?",
    a: "Every deployment includes a 14-day intensive monitoring period to guarantee flawless performance. For long-term peace of mind, we offer dedicated monthly retainer plans for ongoing scaling and maintenance.",
  },
  {
    q: "What are the recurring operational costs?",
    a: "Beyond your standard hosting and domain renewals, specific premium tools (like Elementor Pro) may have annual renewals. We engineer lean systems to keep your ongoing overhead as low as possible.",
  },
  {
    q: "Do you train my internal team?",
    a: "Absolutely. A comprehensive handoff and training session is included with our premium and enterprise packages, ensuring your team is fully empowered to operate the platform from day one.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Over 95% of our 3,300+ deployments have been engineered for brands spanning the US, UK, Canada, Australia, and Europe. Our entire operational workflow is optimized for seamless global collaboration.",
  },
];

function FAQItem({ item, open, onToggle }: {
  item: typeof faqs[0];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          padding: "22px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: "clamp(14px, 1.2vw, 16px)",
            fontWeight: 400,
            letterSpacing: "-0.015em",
            color: open ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.72)",
            lineHeight: 1.4,
            transition: "color 0.2s",
          }}
        >
          {item.q}
        </span>
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.14)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "border-color 0.2s, background 0.2s",
            background: open ? "rgba(255,255,255,0.08)" : "transparent",
          }}
        >
          <Plus
            size={13}
            strokeWidth={1.5}
            style={{
              color: "rgba(255,255,255,0.5)",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.45)",
                paddingBottom: "22px",
                maxWidth: "560px",
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ width: "100%", paddingTop: "clamp(80px,8vw,120px)", paddingBottom: "clamp(80px,8vw,120px)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(40px, 6vw, 80px)",
          }}
          className="desktop:grid-cols-[380px_1fr]"
        >
          {/* Left: heading block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 1.15,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Questions<br />
              <span style={{ color: "rgba(255,255,255,0.28)" }}>you might have.</span>
            </h2>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.38)",
                maxWidth: "300px",
              }}
            >
              Still have a question? Message me on Fiverr — I reply within about an hour.
            </p>
            <a
              href="https://www.fiverr.com/jehanzaib_007"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                marginTop: "4px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              Ask on Fiverr →
            </a>
          </div>

          {/* Right: accordion */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
