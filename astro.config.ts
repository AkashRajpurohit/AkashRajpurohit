import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://akashrajpurohit.com',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            class: 'autolink-header sr-only',
            ariaHidden: true,
            tabIndex: -1,
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: ' ↗️' },
        },
      ],
    ],
  },
  compressHTML: true,
  trailingSlash: 'always',
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'hybrid',
  experimental: {
    hybridOutput: true,
  },
  adapter: cloudflare(),
});
