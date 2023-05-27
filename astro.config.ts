import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import solidJs from '@astrojs/solid-js';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// @ts-ignore
import { remarkReadingTime } from './src/lib/plugins/remark-reading-time';

// https://astro.build/config
export default defineConfig({
  site: 'https://akashrajpurohit.com',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
    remarkPlugins: [remarkReadingTime],
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
          rel: ['noopener nofollow noreferrer'],
          target: '_blank',
          content: {
            type: 'text',
            value: ' ↗️',
          },
        },
      ],
    ],
  },
  trailingSlash: 'always',
  integrations: [mdx(), sitemap(), tailwind(), solidJs()],
  output: 'hybrid',
  experimental: {
    hybridOutput: true,
  },
  adapter: cloudflare(),
});
