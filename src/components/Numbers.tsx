import Reveal from "./ui/Reveal";

const stats = [
  { value: "3,300+", label: "Projects delivered" },
  { value: "5.0", label: "Rating · 2,277 reviews" },
  { value: "6+ years", label: "Top Rated on Fiverr" },
  { value: "~1 hr", label: "Average reply time" },
];

export default function Numbers() {
  return (
    <section
      style={{ width: "100%", paddingTop: "clamp(32px,4vw,56px)", paddingBottom: "clamp(32px,4vw,56px)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
          className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4"
        >
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div
                style={{
                  padding: "clamp(20px, 3vw, 36px) clamp(16px, 2vw, 32px)",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 44px)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    fontWeight: 500,
                    color: "var(--color-text-heading)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
