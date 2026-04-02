import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        navy: {
          DEFAULT: "#1A2332",
          light: "#2A3442",
          dark: "#0F1419",
        },
        terracotta: {
          DEFAULT: "#D4695B",
          light: "#E38A7E",
          dark: "#B34E42",
        },
        beige: {
          DEFAULT: "#E8DCC4",
          light: "#F5EFE0",
          dark: "#D4C8A8",
        },
        forest: {
          DEFAULT: "#2D5F4C",
          light: "#3D7F6C",
          dark: "#1D3F2C",
        },
        // Accent Colors
        teal: {
          DEFAULT: "#00B4AB",
          light: "#33C5BE",
          dark: "#008A83",
        },
        burnt: {
          DEFAULT: "#E07A3E",
          light: "#E99561",
          dark: "#C5631F",
        },
        // Neutral Base
        offwhite: "#FAF9F6",
        charcoal: "#333333",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "monospace"],
      },
      fontSize: {
        "display-xl": ["96px", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-lg": ["80px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["64px", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["48px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
        "gradient": "gradient 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "neu-sm": "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.5)",
        "neu-md": "8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.5)",
        "neu-lg": "12px 12px 24px rgba(0, 0, 0, 0.15), -12px -12px 24px rgba(255, 255, 255, 0.5)",
        "elevation-1": "0 2px 4px rgba(0, 0, 0, 0.05)",
        "elevation-2": "0 4px 8px rgba(0, 0, 0, 0.08)",
        "elevation-3": "0 8px 16px rgba(0, 0, 0, 0.1)",
        "elevation-4": "0 16px 32px rgba(0, 0, 0, 0.12)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pattern-dots": "radial-gradient(circle, #333 1px, transparent 1px)",
        "pattern-grid": "linear-gradient(#33333310 1px, transparent 1px), linear-gradient(90deg, #33333310 1px, transparent 1px)",
      },
      backgroundSize: {
        "pattern-dots": "20px 20px",
        "pattern-grid": "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
