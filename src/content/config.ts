import { allowedBlogTags } from '@lib/constants';
import { difference } from '@lib/utils';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		// Transform string to Date object
		date: z
			.union([
				z.string(),
				z.date().refine((date) => !isNaN(date.getTime()), {
					message: 'Invalid date',
				}),
			])
			.transform((value) => {
				if (typeof value === 'string') {
					const parsedDate = new Date(value);
					return parsedDate;
				} else {
					return value;
				}
			}),
		lastmod: z
			.union([
				z.string(),
				z.date().refine((date) => !isNaN(date.getTime()), {
					message: 'Invalid lastmod date',
				}),
			])
			.optional()
			.transform((value) => {
				if (typeof value === 'string') {
					const parsedDate = new Date(value);
					return parsedDate;
				} else {
					return value;
				}
			}),
		tags: z
			.string()
			.array()
			.refine((values) => difference(values, allowedBlogTags).length === 0, {
				message: 'Invalid tag value',
			}),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
