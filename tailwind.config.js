/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    boxShadow: {
      "drop-shadow-2": "0px 2px 2px rgba(0, 0, 0, 0.25)",
      "drop-shadow-4": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      "drop-shadow-6": "0px 6px 6px rgba(0, 0, 0, 0.25)",
      "drop-shadow-8": "0px 8px 8px rgba(0, 0, 0, 0.25)",
      "drop-shadow-12": "0px 12px 12px rgba(0, 0, 0, 0.25)",
      "drop-shadow-16": "0px 16px 16px rgba(0, 0, 0, 0.25)",
      "cards-shadow":
        "0px 16px 6px rgba(0, 0, 0, 0.01), 0px 9px 5px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.09), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
      "contactCards-shadow":
        "0px 42px 17px rgba(0, 0, 0, 0.01), 0px 24px 14px rgba(0, 0, 0, 0.05), 0px 11px 11px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
    },
    borderRadius: {
      "4": "4px",
      "8": "8px",
      "16": "16px",
      "24": "24px",
      "32": "32px",
      "64": "64px",
    },
    colors: {
      warning: "#A9791C",
      primary: "#417F56",
      white: "#FFFFFF",
      black: "#0C0C0C",
      error: "#C30000",
      success: "#00966D",
      neutral: "#353535",
      "Shade-7": "#08100B",
      "Shade-6": "#102016",
      "Shade-5": "#183020",
      "Shade-4": "#21402B",
      "Shade-3": "#294F36",
      "Shade-2": "#315F41",
      "Shade-1": "#396F4B",
      "Tint-7": "#4E9968",
      "Tint-6": "#61AE7B",
      "Tint-5": "#7CBC91",
      "Tint-4": "#96C9A7",
      "Tint-3": "#B0D7BD",
      "Tint-2": "#CAE4D3",
      "Tint-1": "#E5F2E9",
      "Gray-1": "#F9F9F9",
      "Gray-2": "#E1E1E1",
      "Gray-3": "#EDEDED",
      "Gray-4": "#CBCBCB",
      "Gray-5": "#ADADAD",
      "Gray-6": "#757575",
      "Gray-7": "#717171",
      "Gray-8": "#353535",
      "Error-light": "#ED2E2E",
      "Error-extralight": "#FFF2F2",
      "success-light": "#00BA88",
      "Success-extralight": "#F3FDFA",
      "warning-extralight": "#F4B740",
      "warning-extralight": "#FFF8E1",
    },
  },
  plugins: [],
};
