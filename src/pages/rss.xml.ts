import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { isDateAfter } from '@lib/utils';

export async function get(context: APIContext) {
  const allPosts = await getCollection('blog');
  const postItems = allPosts.map((post) => ({
    title: post.data.title,
    description: post.data.summary,
    pubDate: post.data.lastmod || post.data.date,
    link: `/blog/${post.slug}/`,
    categories: post.data.tags,
    author: 'me@akashrajpurohit.com (Akash Rajpurohit)',
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
		<managingEditor>me@akashrajpurohit.com (Akash Rajpurohit)</managingEditor>
		<webMaster>me@akashrajpurohit.com (Akash Rajpurohit)</webMaster>
		<lastBuildDate>${lastBuildDate.toUTCString()}</lastBuildDate>
	`;

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    drafts: false,
    trailingSlash: true,
    site: context.site?.toString() as string,
    customData,
    items,
  });
}
