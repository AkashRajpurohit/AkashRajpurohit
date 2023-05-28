import type { NewsletterFormInput } from './constants';

export const db = {
  baseUrl: (import.meta.env.MONGO_API_BASE_URL || '') as string,
  apiKey: (import.meta.env.MONGO_API_KEY || '') as string,
  database: 'blog-db',
  dataSource: 'Cluster0',
  collections: {
    newsletter: 'newsletterSubscribers',
    likes: 'likes',
    views: 'views',
  },
};

export const getAllNewsletterSubscribers = async () => {
  if (!db.baseUrl || !db.apiKey) {
    throw new Error('Missing required environment variables');
  }

  const data = JSON.stringify({
    database: db.database,
    dataSource: db.dataSource,
    collection: db.collections.newsletter,
    pipeline: [
      {
        $count: 'totalSubscribers',
      },
    ],
  });

  const response = await fetch(`${db.baseUrl}/action/aggregate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': db.apiKey,
    },
    body: data,
  });

  const responseBody = (await response.json()) as {
    documents: { totalSubscribers: number }[];
  };

  return responseBody?.documents[0]?.totalSubscribers;
};

export const subscribeToNewsletter = async ({
  email,
  first_name = '',
  last_name = '',
}: Omit<NewsletterFormInput, 'from_url'>) => {
  if (!db.baseUrl || !db.apiKey) {
    throw new Error('Missing required environment variables');
  }

  const data = JSON.stringify({
    database: db.database,
    dataSource: db.dataSource,
    collection: db.collections.newsletter,
    filter: { email },
    update: {
      $set: {
        email,
        first_name,
        last_name,
      },
    },
    upsert: true,
  });

  const response = await fetch(`${db.baseUrl}/action/updateOne`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': db.apiKey,
    },
    body: data,
  });

  if (!response.ok) {
    return {
      error: {
        message: 'Something went wrong, please try again.',
      },
    };
  }

  const responseBody = (await response.json()) as {
    matchedCount: number;
    modifiedCount: number;
    upsertedId?: string;
  };

  const success = {
    message: 'You are subscribed 🎉',
    newSubscriber: false,
  };

  if (responseBody?.modifiedCount === 0) {
    // The document was not present and was upserted (newly added) by mongodb
    success.newSubscriber = true;
  }

  return {
    success,
  };
};
