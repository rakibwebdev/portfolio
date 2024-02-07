import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#ff4522",
      },
      textColor: {
        // Define hover variant for primary-color
        "primary-color": "#ff4522",
      },
      fontFamily: {
        'title': ["Poppins", "sans-serif"],
        'body': ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
