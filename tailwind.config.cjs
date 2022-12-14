/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#111827',
        light: '#ffead2',
        accent: '#c29767',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
