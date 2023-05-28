import type { NewsletterFormInput } from '@lib/constants';
import {
  getTotalNewsletterSubscribersCount,
  subscribeToNewsletter,
} from '@lib/db';
import type { APIRoute } from 'astro';

export const prerender = false;

export const get: APIRoute = async () => {
  const totalSubscribers = await getTotalNewsletterSubscribersCount();

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
};

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body = (await request.json()) as NewsletterFormInput;
    const { email, first_name = '', last_name = '', from_url = '' } = body;

    if (!email || email.trim().length === 0) {
      return new Response(
        JSON.stringify({
          message: 'Email is required',
          error: true,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    const { error, success } = await subscribeToNewsletter({
      email,
      first_name,
      last_name,
    });

    if (error) {
      return new Response(
        JSON.stringify({
          message: error.message,
          error: true,
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    // TODO: send a notification on discord

    return new Response(
      JSON.stringify({
        message: success.message,
        error: false,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

  return new Response(null, { status: 400 });
};
