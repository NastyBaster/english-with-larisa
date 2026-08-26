import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://NastyBaster.github.io',
  base: '/english-with-larisa',
  build: { assets: 'assets' },
  integrations: [sitemap()],
});