import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://akashrajpurohit.com',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  trailingSlash: 'always',
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'static',
  // experimental: {
  //   hybridOutput: true,
  // },
  // adapter: cloudflare(),
});
