// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          primary: "hsl(var(--surface-primary) / <alpha-value>)",
          secondary: "hsl(var(--surface-secondary) / <alpha-value>)",
          tertiary: "hsl(var(--surface-tertiary) / <alpha-value>)",
        },
        ui: {
          nav: {
            surface: "hsl(var(--ui-nav-surface) / <alpha-value>)",
            text: "hsl(var(--ui-nav-text) / <alpha-value>)",
            hover: "hsl(var(--ui-nav-hover) / <alpha-value>)",
          },
          button: {
            DEFAULT: "hsl(var(--ui-button) / <alpha-value>)",
            hover: "hsl(var(--ui-button-hover) / <alpha-value>)",
            active: "hsl(var(--ui-button-active) / <alpha-value>)",
            text: "hsl(var(--ui-button-text) / <alpha-value>)",
          },
          input: {
            surface: "hsl(var(--ui-input-surface) / <alpha-value>)",
            border: "hsl(var(--ui-input-border) / <alpha-value>)",
            focus: "hsl(var(--ui-input-focus) / <alpha-value>)",
          },
          card: {
            surface: "hsl(var(--ui-card-surface) / <alpha-value>)",
            border: "hsl(var(--ui-card-border) / <alpha-value>)",
          },
        },
        content: {
          primary: "hsl(var(--content-primary) / <alpha-value>)",
          secondary: "hsl(var(--content-secondary) / <alpha-value>)",
          tertiary: "hsl(var(--content-tertiary) / <alpha-value>)",
          accent: "hsl(var(--content-accent) / <alpha-value>)",
        },
        state: {
          success: {
            surface: "hsl(var(--state-success-surface) / <alpha-value>)",
            text: "hsl(var(--state-success-text) / <alpha-value>)",
          },
          error: {
            surface: "hsl(var(--state-error-surface) / <alpha-value>)",
            text: "hsl(var(--state-error-text) / <alpha-value>)",
          },
        },
      },
      ringColor: {
        DEFAULT: "hsl(var(--focus-ring))",
      },
      ringOffsetColor: {
        DEFAULT: "hsl(var(--focus-ring-offset))",
      },
      fontFamily: {
        display: ["Playfair Display Variable", "serif"],
        sans: ["Lato", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Display sizes
        "display-2xl": [
          "3.75rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-xl": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": [
          "2.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        "display-base": [
          "2rem",
          { lineHeight: "1.3", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "1.5rem",
          { lineHeight: "1.3", letterSpacing: "-0.02em" },
        ],
        "display-sm": ["1rem", { lineHeight: "1.3", letterSpacing: "-0.02em" }],
        // Body sizes
        "body-lg": ["1.25rem", { lineHeight: "1.5" }],
        "body-base": ["1rem", { lineHeight: "1.5" }],
        "body-sm": ["1rem", { lineHeight: ".75" }],
      },
    },
  },
} satisfies Config;
