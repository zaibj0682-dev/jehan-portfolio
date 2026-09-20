import { ExternalLink } from "lucide-react";
import Reveal from "./ui/Reveal";

const reviews = [
  {
    handle: "miafields",
    country: "UK",
    project: "4th project together",
    quote: "Communication perhaps the best I have experienced on Fiverr. Jehan understood what I needed, delivered ahead of schedule, and the result was exactly what I wanted.",
  },
  {
    handle: "explorecareers1",
    country: "Australia",
    project: "Ongoing client",
    quote: "This is the person you want to work with. Responsive, skilled, and genuinely invested in the outcome. I've recommended Jehan to multiple people.",
  },
  {
    handle: "jmassicotte",
    country: "US",
    project: "Website redesign",
    quote: "He researched my industry before sending the first draft. I've worked with a lot of freelancers — that level of preparation is rare.",
  },
  {
    handle: "mana400244",
    country: "US",
    project: "Repeat client",
    quote: "Hired him again after the first landing page. Same quality, same communication, no issues. Will be back for the next project.",
  },
  {
    handle: "barryb_ventura2",
    country: "Philippines",
    project: "Full site build",
    quote: "Patient through delays on our side and several rounds of revisions. Final result was better than what we originally described.",
  },
  {
    handle: "danielross_uk",
    country: "UK",
    project: "E-commerce store",
    quote: "Fast turnaround, clean design, zero hand-holding required. Exactly what a busy founder needs from a developer.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{ width: "100%", paddingTop: "clamp(60px,7vw,100px)", paddingBottom: "clamp(60px,7vw,100px)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>

        {/* Header row */}
        <div
          className="flex flex-col desktop:flex-row desktop:items-end desktop:justify-between gap-6"
          style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}
        >
          <Reveal>
            <h2
              className="text-strong text-balance"
              style={{ fontSize: "var(--text-h2)", lineHeight: 1.35, letterSpacing: "-0.04em", fontWeight: 500, maxWidth: "480px" }}
            >
              What clients say.{" "}
              <span className="text-muted">2,277 reviews.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <a
              href="https://www.fiverr.com/jehanzaib_007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-body hover:text-white transition-colors duration-300"
              style={{ fontSize: "14px" }}
            >
              <ExternalLink size={13} strokeWidth={1.5} />
              See all on Fiverr
            </a>
          </Reveal>
        </div>

        {/* Rating bar */}
        <Reveal>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(20px, 4vw, 48px)",
              padding: "28px 32px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              marginBottom: "clamp(24px, 3vw, 36px)",
              flexWrap: "wrap",
            }}
          >
            {/* Big score */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
              <span
                style={{
                  fontSize: "clamp(48px, 6vw, 72px)",
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  color: "var(--color-text-heading)",
                  lineHeight: 1,
                  fontFamily: "var(--font-display)",
                }}
              >
                5.0
              </span>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)" }}>/ 5.0</span>
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.1)", flexShrink: 0 }} className="hidden tablet:block" />

            {/* Stars row */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", gap: "4px" }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="rgba(211,151,148,1)">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>From 2,277 verified Fiverr reviews</p>
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.1)", flexShrink: 0 }} className="hidden tablet:block" />

            {/* Stats */}
            <div style={{ display: "flex", gap: "clamp(20px, 4vw, 48px)", flexWrap: "wrap" }}>
              {[
                { value: "3,300+", label: "Projects delivered" },
                { value: "6+ yrs", label: "Top Rated on Fiverr" },
                { value: "~1 hr", label: "Average reply time" },
              ].map((s) => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--color-text-heading)", lineHeight: 1 }}>
                    {s.value}
                  </span>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.03em" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Review cards */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div
                style={{
                  padding: "clamp(20px, 2.5vw, 28px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px",
                  background: "#0d0d0d",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  height: "100%",
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "3px" }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="rgba(211,151,148,0.9)">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.75)",
                    flex: 1,
                  }}
                >
                  &quot;{r.quote}&quot;
                </p>

                {/* Meta */}
                <div
                  style={{
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                  }}
                >
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-text-heading)", letterSpacing: "-0.01em" }}>
                    @{r.handle}
                  </p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
                    {r.country} · {r.project} · Verified Fiverr review
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
