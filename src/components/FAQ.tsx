"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Are hosting and domain included?",
    a: "No — a domain costs about $10/year and hosting $4–$10/month, both managed by you. I'll help set them up and point your domain to your server at no extra charge.",
  },
  {
    q: "Do you write the content?",
    a: "Content comes from you. If it's not ready when we start, I use professional placeholder text you can swap later — no delay to the build.",
  },
  {
    q: "Do you provide theme and plugin licences?",
    a: "I mostly build with free themes and custom Elementor layouts. Premium plugins go under your account so you own them outright. I'll tell you exactly what you need — and the cost — before we start.",
  },
  {
    q: "What if something breaks after delivery?",
    a: "Contact me within 14 days for free fixes inside the original scope. After that, optional monthly care plans keep everything maintained.",
  },
  {
    q: "What are the ongoing costs after launch?",
    a: "Domain (~$10/yr), hosting (~$4–$10/mo), and Elementor Pro renewal (~$30/yr after year one, except the Basic package). I'll walk you through exactly what applies to your setup.",
  },
  {
    q: "Can you migrate my blog or teach me to manage the site?",
    a: "Yes — both are add-ons. Blog migration is quoted by post count. A short training session is included with every multi-page project.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Absolutely — over 95% of my 3,300+ projects have been for clients in the US, UK, Canada, Australia, and Europe. All communication is in English via Fiverr.",
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
