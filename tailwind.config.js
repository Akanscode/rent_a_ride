/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      mono: ["Space Mono", "monospace"],
    },
    extend: {
      colors: {
        grey: {
          0: "#FCFCFD",
          10: "#F9FAFB",
          20: "#F2F4F7",
          30: "#EAECF0",
          40: "#D0D5DD",
          50: "#98A2B3",
          60: "#667085",
          70: "#475467",
          80: "#344054",
          90: "#1D2939",
          100: "#101828",
        },

        "status-purple": {
          0: "#FAF5FF",
          10: "#F3E8FF",
          20: "#E9D5FF",
          30: "#D8B4FE",
          40: "#C084FC",
          50: "#A855F7",
          60: "#9333CA",
          70: "#7E22CE",
          80: "#6B21A8",
          90: "#581C87",
          100: "#3B0764",
        },
      },
    },
  },
  plugins: [],
};
