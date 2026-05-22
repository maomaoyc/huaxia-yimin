import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#07111f',
          900: '#0b1728',
          850: '#102035',
          800: '#142842'
        },
        ivory: '#f5efe0',
        parchment: '#ebe1cb',
        gold: {
          muted: '#b99b5f',
          deep: '#8a6b35',
          pale: '#d8c38c'
        },
        ink: '#17202d'
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Source Han Serif SC"', '"Songti SC"', 'serif'],
        sans: ['"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0, 0, 0, 0.22)'
      }
    }
  },
  plugins: [typography]
};
