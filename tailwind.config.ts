import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./apps/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./layouts/**/*.{ts,tsx}", "./hooks/**/*.{ts,tsx}", "./services/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#18212f",
        paper: "#f7f5ef",
        moss: "#526652",
        coral: "#d46a52",
        gold: "#d9a441"
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans TC", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
