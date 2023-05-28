import type { ViewInput } from '@lib/constants';
import { getViewsBySlugAndType } from '@lib/db';
import type { APIRoute } from 'astro';

export const prerender = false;

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const { slug, type } = (await request.json()) as ViewInput;

    if (!slug || !type) {
      return new Response(JSON.stringify({ totalViews: 0 }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const totalViews = await getViewsBySlugAndType(request, { slug, type });

    const response = {
      totalViews,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(null, { status: 400 });
};
