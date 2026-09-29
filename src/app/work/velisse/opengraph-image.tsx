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
              "linear-gradient(135deg, rgba(90,150,90,0.3) 0%, rgba(58,58,255,0.2) 45%, transparent 100%)",
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
          Case Study · WooCommerce
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            color: "rgba(255,255,255,0.95)",
            lineHeight: 1.05,
            maxWidth: "950px",
          }}
        >
          Velisse Labs
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 400,
            color: "rgba(255,255,255,0.55)",
            marginTop: "20px",
            maxWidth: "820px",
            lineHeight: 1.4,
          }}
        >
          A premium WooCommerce store built beyond the platform's limits.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "rgba(255,255,255,0.35)",
            marginTop: "48px",
          }}
        >
          By Jehan Zaib · Top Rated Fiverr Seller
        </div>
      </div>
    ),
    { ...size }
  );
}
