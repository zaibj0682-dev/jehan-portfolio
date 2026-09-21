"use client";
import { useState } from "react";
import { useSound } from "@/context/SoundContext";
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
    a: "Yes. The vast majority of our deployments have been engineered for brands spanning the US, UK, Canada, Australia, and Europe. Our entire operational workflow is optimized for seamless global collaboration.",
  },
];

function FAQItem({ item, open, onToggle }: {
  item: typeof faqs[0];
  open: boolean;
  onToggle: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: open ? "rgba(255,255,255,0.04)" : isHovered ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)",
        borderColor: open ? "rgba(255,255,255,0.12)" : isHovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        borderRadius: "20px",
        border: "1px solid",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          padding: "24px 28px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <motion.span
          animate={{
            color: open ? "rgba(255,255,255,1)" : isHovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
            x: isHovered && !open ? 4 : 0,
          }}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: "clamp(16px, 1.4vw, 19px)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            fontFamily: "var(--font-display)",
            lineHeight: 1.3,
          }}
        >
          {item.q}
        </motion.span>
        
        <motion.div
          animate={{
            backgroundColor: open ? "rgba(255,255,255,0.1)" : isHovered ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
            borderColor: open ? "rgba(255,255,255,0.2)" : isHovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1px solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Plus
            size={16}
            strokeWidth={1.5}
            style={{
              color: open ? "#fff" : "rgba(255,255,255,0.5)",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), color 0.2s",
            }}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 28px 28px 28px" }}>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.55)",
                  maxWidth: "600px",
                }}
              >
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { playClick } = useSound();

  return (
    <section
      id="faq"
      style={{ width: "100%", paddingTop: "clamp(100px,10vw,140px)", paddingBottom: "clamp(100px,10vw,140px)", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}
    >
      {/* Background ambient glow */}
      <div style={{
        position: "absolute",
        top: "-200px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "800px",
        height: "400px",
        background: "radial-gradient(ellipse at top, rgba(255,255,255,0.03) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", marginBottom: "64px" }}>
          <p
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.03)",
              fontSize: "12px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.15,
              color: "rgba(255,255,255,0.9)",
              fontFamily: "var(--font-display)",
            }}
          >
            Questions you <span style={{ color: "rgba(255,255,255,0.4)" }}>might have.</span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.4)",
              maxWidth: "400px",
              marginTop: "8px"
            }}
          >
            Everything you need to know about how we work. Still have a question?{" "}
            <a href="https://www.fiverr.com/jehanzaib_007" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "rgba(255,255,255,0.3)" }}>Ask on Fiverr</a>
          </p>
        </div>

        {/* Accordion Container */}
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}>
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              open={open === i}
              onToggle={() => {
                playClick();
                setOpen(open === i ? null : i);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
