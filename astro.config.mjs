import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],
  output: 'static',
  site: process.env.SITE_URL || 'https://huaxiayimin.us',
  base: process.env.BASE_PATH || '/'
});
