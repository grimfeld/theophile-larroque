/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Roboto Slab', serif],
        sans: ['Roboto', sans - serif],
      },
    },
  },
  plugins: [],
};
