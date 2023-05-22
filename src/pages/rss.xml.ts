import rss, { RSSFeedItem } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { siteMetadata } from '@lib/config';
import { isDateAfter } from '@lib/utils';

const author = `${siteMetadata.email} (${siteMetadata.author})`;

export async function get(context: APIContext) {
  const allPosts = await getCollection('blog');
  const postItems: RSSFeedItem[] = allPosts.map((post) => ({
    title: post.data.title,
    description: post.data.summary,
    pubDate: post.data.lastmod || post.data.date,
    link: `/blog/${post.slug}/`,
    categories: post.data.tags,
    author,
  }));

  const items = [...postItems];

  let lastBuildDate = items[0].pubDate;

  for (let i = 1; i < items.length; ++i) {
    const itemDate = items[i].pubDate;
    if (isDateAfter(itemDate, lastBuildDate)) {
      lastBuildDate = itemDate;
    }
  }

  const customData = `
		<language>en-us</language>
		<managingEditor>${author}</managingEditor>
		<webMaster>${author}</webMaster>
		<lastBuildDate>${lastBuildDate.toUTCString()}</lastBuildDate>
	`;

  return rss({
    title: siteMetadata.title,
    description: siteMetadata.description,
    drafts: false,
    trailingSlash: true,
    site: context.site?.toString() as string,
    customData,
    items,
  });
}
