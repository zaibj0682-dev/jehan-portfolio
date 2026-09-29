import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#060606",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "700px",
            height: "630px",
            background:
              "linear-gradient(135deg, rgba(110,195,244,0.35) 0%, rgba(58,58,255,0.3) 40%, rgba(255,97,171,0.25) 70%, transparent 100%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: 22,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "999px",
            padding: "10px 24px",
            marginBottom: "36px",
          }}
        >
          Top Rated Seller · Fiverr
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            color: "rgba(255,255,255,0.95)",
            lineHeight: 1.05,
            maxWidth: "900px",
          }}
        >
          Jehan Zaib
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 38,
            fontWeight: 400,
            color: "rgba(255,255,255,0.55)",
            marginTop: "16px",
            maxWidth: "820px",
          }}
        >
          High-converting web experiences engineered for industry leaders.
        </div>
        <div
          style={{
            display: "flex",
            gap: "36px",
            marginTop: "48px",
            fontSize: 24,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <div style={{ display: "flex" }}>5.0 · 2,277 reviews</div>
          <div style={{ display: "flex" }}>3,300+ projects delivered</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
