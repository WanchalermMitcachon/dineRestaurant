/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        leagueSpartan: ["League Spartan"],
      },
      colors: {
        beaver: "#9e7f66",
        coldGray: "#111111",
        mirage: "#17192b",
        ebonyClay: "#242b37",
        shittleGray: "5c6779",
      },
      fontSize: {
        xl: "80px",
        l: "48px",
        m: "20px",
        s: "17px",
        "body-1": "20px",
        "body-2": "16px",
      },
      lineHeight: {
        xl: "80px",
        l: "48px",
        m: "24px",
        s: "28px",
        "body-1": "30px",
        "body-2": "26px",
      },
      letterSpacing: {
        xl: "-1px",
        l: "-0.5px",
        m: "-0.25px",
        s: "2.5px",
      },
      boxShadow: {
        default: "0 75px 100px -50px rgb(56 66 85 / 50%)",
        dropdown: "0 15px 25px 0 rgb(56 66 85 / 25%)",
      },
      backgroundImage: {
        "hero-mobile": 'url("/homepage/hero-bg-mobile.jpg")',
        "hero-tablet": 'url("/homepage/hero-bg-tablet.jpg")',
        "hero-desktop": 'url("/homepage/hero-bg-desktop.jpg")',
        "hero-booking-mobile": 'url("/booking/hero-bg-mobile.jpg")',
        "hero-booking-tablet": 'url("/booking/hero-bg-tablet.jpg")',
        "hero-booking-desktop": 'url("/booking/hero-bg-desktop.jpg")',
        "footer-tablet": 'url("/homepage/ready-bg-tablet.jpg")',
      },
      screens: {
        sm: "380px",
        md: "768px",
        lg: "1280px",
      },
    },
  },
  plugins: [],
};
