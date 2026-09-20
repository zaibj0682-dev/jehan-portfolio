import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:         "var(--color-bg)",
        heading:    "var(--color-text-heading)",
        strong:     "var(--color-text-strong)",
        body:       "var(--color-text)",
        muted:      "var(--color-text-muted)",
        gray:       "var(--color-text-gray)",
        glass:      "var(--color-glass)",
        "glass-strong": "var(--color-glass-strong)",
        border:     "var(--color-border)",
        surface1:   "var(--color-surface-1)",
        surface2:   "var(--color-surface-2)",
        "surface-active": "var(--color-surface-active)",
        "btn-primary":       "var(--color-btn-primary)",
        "btn-primary-hover": "var(--color-btn-primary-hover)",
      },
      fontFamily: {
        sans:    ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      fontSize: {
        h1:      ["var(--text-h1)",      { lineHeight: "1.3",  letterSpacing: "-0.04em", fontWeight: "400" }],
        h2:      ["var(--text-h2)",      { lineHeight: "1.35", letterSpacing: "-0.04em", fontWeight: "500" }],
        h3:      ["var(--text-h3)",      { lineHeight: "1.35", letterSpacing: "-0.03em", fontWeight: "400" }],
        h4:      ["var(--text-h4)",      { lineHeight: "1.35", letterSpacing: "-0.03em", fontWeight: "400" }],
        h6:      ["var(--text-h6)",      { lineHeight: "1.5",  letterSpacing: "-0.02em", fontWeight: "400" }],
        body:    ["14px",                { lineHeight: "1.5",  letterSpacing: "-0.02em" }],
        "body-lg": ["16px",              { lineHeight: "1.5",  letterSpacing: "-0.01em" }],
        caption: ["12px",                { lineHeight: "normal" }],
      },
      borderRadius: {
        pill:   "768px",
        chip:   "393px",
        "card-sm": "16px",
        "card-md": "24px",
        "card-lg": "28px",
        panel:  "18px",
        image:  "10px",
        thumb:  "8px 8px 4px 4px",
      },
      spacing: {
        "1":  "4px",
        "2":  "6px",
        "3":  "8px",
        "4":  "10px",
        "5":  "12px",
        "6":  "16px",
        "7":  "20px",
        "8":  "24px",
        "9":  "28px",
        "10": "36px",
        "11": "48px",
        "12": "64px",
        "13": "80px",
        "14": "120px",
      },
      maxWidth: {
        section:  "1600px",
        wide:     "1280px",
        content:  "1200px",
        text:     "720px",
      },
      boxShadow: {
        float: "0 1px 32px rgba(0,0,0,0.35)",
        ring:  "inset 0 0 0 1px rgba(255,255,255,0.05)",
        soft:  "0 4px 10px rgba(0,0,0,0.05)",
      },
      transitionTimingFunction: {
        link:     "cubic-bezier(0.44,0,0.56,1)",
        standard: "cubic-bezier(0.2,0,0.2,1)",
        entrance: "cubic-bezier(0.2,0.1,0.2,1)",
      },
      transitionDuration: {
        entrance: "700ms",
        accordion: "425ms",
        hover:    "300ms",
        link:     "400ms",
      },
      screens: {
        tablet: "810px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
