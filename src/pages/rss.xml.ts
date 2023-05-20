import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function get(context: APIContext) {
	const posts = await getCollection('blog');

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site?.toString() as string,
		items: posts.map((post) => ({
			...post.data,
			pubDate: post.data.lastmod || post.data.date,
			link: `/blog/${post.slug}/`,
		})),
	});
}
