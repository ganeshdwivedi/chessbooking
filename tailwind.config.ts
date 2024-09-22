import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'regular': "var(--font-regular)",
        'medium': "var(--font-medium)",
        'semibold': "var(--font-semibold)",
        'bold': "var(--font-bold)",
      }, 
      colors: {
        primary: "#C3BEF5",
        cancel: "#dddbf8",
        success:'#b8b4e7',
        sidebar:'#424B96',
        background:'#EEEFF5'
      },
    },
  },
  plugins: [nextui()]
};
export default config;
