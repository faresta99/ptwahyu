/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        satu: "#0A192F", //bg untuk gelap sekali
        dua: "#1C2A40", //background untuk agak terang
        tiga: "#F8F8F8", //text
        empat: "#00D4FF", // button dan hover
        lima: "#FCFCFC ",
      },
    },
  },
  plugins: [],
};

export default config;
