import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#02285F",
        blue: "#0070E8",
        cyan: "#01A8D2",
        "dot-teal": "#02B8BC",
        teal: "#05D597",
        slate: "#2B4473",
        amber: "#F59E0B",
        offwhite: "#F4F7FA",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
