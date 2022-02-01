module.exports = {
  content: ["./src/**/*.{html,js, ts ,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"],
      },
      maxWidth: {
        xxl: "88rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
