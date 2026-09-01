import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#080B10",
          surface: "#0E131B",
          raised: "#141B26",
          border: "#212B38",
        },
        ink: {
          primary: "#E7ECF3",
          secondary: "#9AA7B8",
          muted: "#5E6B7C",
        },
        signal: {
          sky: "#4FB8FF",
          violet: "#9C8CFF",
          mint: "#37D6A6",
          amber: "#F4B860",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #080B10 85%), linear-gradient(90deg, rgba(79,184,255,0.06) 1px, transparent 1px), linear-gradient(0deg, rgba(79,184,255,0.06) 1px, transparent 1px)",
        "aurora":
          "radial-gradient(60% 50% at 20% 0%, rgba(79,184,255,0.16) 0%, rgba(79,184,255,0) 60%), radial-gradient(50% 40% at 85% 15%, rgba(156,140,255,0.14) 0%, rgba(156,140,255,0) 60%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(79,184,255,0.15), 0 0 24px rgba(79,184,255,0.15)",
        "glow-violet": "0 0 0 1px rgba(156,140,255,0.15), 0 0 24px rgba(156,140,255,0.15)",
      },
      keyframes: {
        pulseline: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        pulseline: "pulseline 2.4s linear infinite",
        blink: "blink 1s step-end infinite",
        floaty: "floaty 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
