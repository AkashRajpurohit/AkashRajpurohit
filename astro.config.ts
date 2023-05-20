import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import rome from 'astro-rome';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), rome()],
  output: 'hybrid',
  experimental: {
    hybridOutput: true,
  },
  adapter: cloudflare(),
});
