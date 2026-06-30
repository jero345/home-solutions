/** @type {import('tailwindcss').Config} */
// ──────────────────────────────────────────────────────────────────────────
//  TOKENS DE MARCA VENTUS — única fuente de verdad. No inventar paleta.
//  olive     #5e6a4a  Bienestar, armonía          → fondos / marca
//  terracota #985f32  Calidez y energía           → CTAs / realces
//  cocoa     #3c2a1e  Tradición, sofisticación    → texto / footer
//  cream     #ffffff  Pureza, tecnología silenciosa → superficies
//  sand      #e8e8e8  Neutro de apoyo
// ──────────────────────────────────────────────────────────────────────────
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: "#5e6a4a",
          600: "#525d40",
          700: "#454e36",
        },
        terracota: {
          DEFAULT: "#985f32",
          600: "#85522b",
          700: "#6f4423",
        },
        cocoa: {
          DEFAULT: "#3c2a1e",
          800: "#2e2017",
        },
        cream: "#ffffff",
        sand: "#e8e8e8",
      },
      fontFamily: {
        // Display/encabezados: Didot → Cormorant Garamond
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        // Cuerpo/UI: Quicksand
        body: ['"Quicksand"', "ui-sans-serif", "system-ui", "sans-serif"],
        // Decorativa: Autography → Sacramento (uso mínimo)
        script: ['"Sacramento"', "cursive"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(60, 42, 30, 0.18)",
        lift: "0 24px 64px -22px rgba(60, 42, 30, 0.30)",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        content: "1200px",
      },
      letterSpacing: {
        wider2: "0.22em",
      },
    },
  },
  plugins: [],
};
