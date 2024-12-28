/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        body: "#A89070",
        darkGray: "#333333",
        normalGray: "#555",
        white: "#fff",
        gray: "#ccc",
        primary: "#D57155",
        Beige: "#E9DEC8",
        danger: "#dc3545",
        badoBlue: "#3890D8",
        badoGreen: "#5D9A48",
      },
      animation: {
        click: "transition-all duration-200 ease-in-out active:scale-90",
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        mobile: "360px",
        // => @media (min-width: 360px) { ... }
        tablet: "768px",
        // => @media (min-width: 768px) { ... }
        desktop: "1200px",
        // => @media (min-width: 1200px) { ... }
        desktopFHD: "1920px",
        desktop2K: "2048px",
      },
      fontSize: {
        xs: ["12px"],
        sm: ["14px", "20px"],
        sm1: ["16px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
    },
  },
  plugins: [],
};
