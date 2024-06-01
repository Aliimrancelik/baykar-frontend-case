import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
          roboto: ["Roboto"],
          'display': ["Roboto"]
      },
    },
    colors: {
      'baykar-bg': '#FFFBEB',
      'baykar-brown': '#78350F',
      'baykar-yellow': '#FBBF24',
      'baykar-yellow-triangle': '#FEF3C7',
      'baykar-dark': '#0F172A',
      'baykar-gray': '#E2E8F0',
      'white': '#FFFFFF',
      'gray': '#475569',
      'yellow': '#FDE68A',
      'map-bg': 'rgba(120, 53, 15, 1)',
      'map-box-bg': 'rgba(226, 232, 240, 1)',
      'footer-bg': 'rgba(15, 23, 42, 1)',
      'transparent': 'transparent',
      'white-shadow': '#FFFFFF40',
      'dark-shadow': '#00000012',
      'min-shadow': 'rgba(0, 0, 0, 0.1)',
      'map-text': 'rgba(255, 251, 235, 1)',
    },
  },
  plugins: [],
};
export default config;