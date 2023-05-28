import { getAllNewsletterSubscribers } from '@lib/db';

export const prerender = false;

// Get all newsletter subscribers
export async function get() {
  const totalSubscribers = await getAllNewsletterSubscribers();

  const response = {
    totalSubscribers,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=7200, s-maxage=3600',
    },
  });
}
