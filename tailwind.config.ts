import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Syne", "sans-serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Brand colors from logo
        blue: {
          DEFAULT: "#2A6DB5",
          dark:    "#1B4F8A",
          light:   "#4DADD8",
          pale:    "#E8F2FC",
          ice:     "#F0F7FF",
        },
        cyan:   "#4DADD8",
        green:  "#5BAD3E",
        "green-logo": "#A8C93A",
        purple: "#8B3A8F",
        yellow: "#E8D84A",

        // Surface scales
        surface: {
          DEFAULT: "#FFFFFF",
          1:       "#F8FAFF",
          2:       "#F0F7FF",
          3:       "#E4EFFA",
          deep:    "#D0E4F5",
        },

        // Text
        ink: {
          DEFAULT: "#1A2B4A",
          body:    "#3D5278",
          muted:   "#6B84A3",
          dim:     "#9EB3CB",
        },

        // Legacy compat
        primary: "#2A6DB5",
        "primary-light": "#4DADD8",
        "primary-dark": "#1B4F8A",
        "accent-teal": "#4DADD8",
        "accent-slate": "#6B84A3",
        "glass-green": "#5BAD3E",
        "glass-magenta": "#8B3A8F",
        "glass-yellow": "#E8D84A",
        "neutral-bg": "#F0F7FF",
      },
      boxShadow: {
        card: "0 4px 24px rgba(42,109,181,0.08), 0 1px 4px rgba(42,109,181,0.06)",
        "card-hover": "0 16px 48px rgba(42,109,181,0.16), 0 4px 12px rgba(42,109,181,0.1)",
        "glow-blue": "0 8px 32px rgba(42,109,181,0.25), 0 2px 8px rgba(42,109,181,0.15)",
        "glow-blue-sm": "0 4px 16px rgba(42,109,181,0.2)",
        soft: "0 32px 80px rgba(42,109,181,0.08)",
      },
      animation: {
        marquee: "marquee-left 28s linear infinite",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(2deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
