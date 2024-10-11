import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        headerBackground: "var(--header-background)",
        easyAlertColor: "var(--easy-alert-color)",
        darkerGray: "var(--darker-gray)",
        darkGray: "var(--dark-gray)",
        lightBlack: "var(--light-black)",
        lightGray: "var(--light-gray)",
        veryLightGray: "var(--very-light-gray)",
        inputBorder: "var(--input-border)"
      },
      fontSize: {
        title: [
          "3rem",
          { fontWeight: 700, lineHeight: "3.6rem", letterSpacing: "-0.04rem" },
        ],
        caption: [
          "1rem",
          { fontWeight: 500, lineHeight: "1.1875rem", letterSpacing: "0.8rem" },
        ],
        sectionParagraph: [
          "1.125rem",
          { fontWeight: 400, lineHeight: "1.75rem " },
        ]
      },
      fontFamily: {
        helveticaNeue: [
          "var(--font-helvetica-neue)",
          "helvetica",
          "sans-serif",
        ],
        helveticaNeueMedium: [
          "var(--font-helvetica-neue-medium)",
          "helvetica",
          "sans-serif",
        ],
      },
      width: {
        width530: "44.25rem",
        width647: "40.44rem",
        width501: "31.31rem",
      },
      maxWidth: {
        fullWith: "2000px",
        width530: "44.25rem",
        width647: "40.44rem",
        width501: "31.31rem",
      },
      height:{
        height500: "31.25rem"
      },
      lineHeight: {
        line76: "4.75rem",
      },
      boxShadow: {
        shadowCard: "0 30px 92px rgba(1, 1, 1, 0.11)",
        shadowCardLessSpread: "10px 10px 20px rgba(1, 1, 1, 0.11)",
      },
      spacing: {
        right476: "29.80rem",
        right548: "548px",
      },
      backgroundImage: {
        'phoneWithQrCode': "url('/phoneQrCode.svg')",
        'operationMap': "url('/operationMap.svg')",
      },
      backgroundColor:{
        easyAlertColor: "var(--easy-alert-color)",
      }
    },
  },
  plugins: [],
};
export default config;
