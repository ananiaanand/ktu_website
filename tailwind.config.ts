import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "on-tertiary-fixed": "#001f26",
        "tertiary-container": "#004451",
        "on-tertiary-fixed-variant": "#114d5b",
        "on-tertiary": "#ffffff",
        "error": "#ba1a1a",
        "inverse-surface": "#3b2d2d",
        "success-green": "#2F855A",
        "outline-variant": "#e0bfbf",
        "inverse-primary": "#ffb3b5",
        "on-primary-fixed": "#40000b",
        "outline": "#8c7071",
        "surface-bright": "#fff8f7",
        "secondary-container": "#b6d0ff",
        "primary-fixed-dim": "#ffb3b5",
        "surface-variant": "#f5dddd",
        "surface-dim": "#edd4d4",
        "on-primary": "#ffffff",
        "primary-container": "#800020",
        "on-secondary-container": "#3f5881",
        "secondary-fixed": "#d6e3ff",
        "surface-tint": "#af2b3e",
        "surface-container-high": "#fbe2e2",
        "institutional-navy": "#1B365D",
        "on-tertiary-container": "#7cb0c0",
        "primary-fixed": "#ffdada",
        "primary": "#570013",
        "on-error-container": "#93000a",
        "secondary": "#465f88",
        "background": "#fff8f7",
        "warning-amber": "#D69E2E",
        "on-primary-container": "#ff828a",
        "on-primary-fixed-variant": "#8e0f28",
        "tertiary": "#002c36",
        "heritage-maroon": "#800020",
        "on-secondary-fixed": "#001b3d",
        "surface-container-highest": "#f5dddd",
        "on-error": "#ffffff",
        "on-surface": "#251819",
        "inverse-on-surface": "#ffedec",
        "surface-container-low": "#fff0f0",
        "on-secondary": "#ffffff",
        "on-background": "#251819",
        "tertiary-fixed-dim": "#9acfde",
        "on-secondary-fixed-variant": "#2e476f",
        "error-container": "#ffdad6",
        "surface-container": "#ffe9e8",
        "tertiary-fixed": "#b6ebfb",
        "secondary-fixed-dim": "#aec7f7",
        "surface-container-lowest": "#ffffff",
        "surface": "#fff8f7",
        "kerala-gold": "#C5A059",
        "slate-gray": "#4A5568",
        "on-surface-variant": "#584141",
        // Shadcn defaults mapped to our variables
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "margin-mobile": "16px",
        "gutter": "24px",
        "margin-desktop": "48px",
        "component-gap": "16px",
        "container-max": "1280px",
        "section-gap": "80px"
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        "headline-xl-mobile": ["Inter", ...defaultTheme.fontFamily.sans],
        "body-lg": ["\"Source Serif 4\"", ...defaultTheme.fontFamily.serif],
        "body-md": ["\"Source Serif 4\"", ...defaultTheme.fontFamily.serif],
        "headline-md": ["Inter", ...defaultTheme.fontFamily.sans],
        "headline-xl": ["Inter", ...defaultTheme.fontFamily.sans],
        "headline-sm": ["Inter", ...defaultTheme.fontFamily.sans],
        "headline-lg": ["Inter", ...defaultTheme.fontFamily.sans],
        "label-lg": ["Inter", ...defaultTheme.fontFamily.sans],
        "label-md": ["Inter", ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        "headline-xl-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "headline-xl": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-sm": ["20px", { lineHeight: "1.4", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "700" }],
        "label-lg": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "1.2", fontWeight: "500" }]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ],
} satisfies Config

export default config
