import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lara.pp.ua',
  base: '/',
  build: { assets: 'assets' },
  integrations: [sitemap()],
});