/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "light-gradient":
          "radial-gradient(circle, rgba(238,246,255,1) 7%, rgba(50,151,204,0.6195728291316527) 100%)",
      },
      colors: {
        lightBlue: "#EEF6FF",
        darkBlue: "#3297CC",
        darkerBlue: "#196e9a",
        black: "#0C0908",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
