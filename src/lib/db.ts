import type { NewsletterFormInput, ViewInput } from './constants';
import { getRuntime } from '@astrojs/cloudflare/runtime';

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

const getBaseUrlAndAPIKey = (request: Request) => {
  const runtimeEnv = getRuntime<{
    MONGO_API_BASE_URL: string;
    MONGO_API_KEY: string;
  }>(request);
  let baseUrl;
  let apiKey;

  if (db.baseUrl) {
    baseUrl = db.baseUrl;
  } else {
    baseUrl = runtimeEnv.env.MONGO_API_BASE_URL;
  }

  if (db.apiKey) {
    apiKey = db.apiKey;
  } else {
    apiKey = runtimeEnv.env.MONGO_API_KEY;
  }

  if (!baseUrl || !apiKey) {
    throw new Error('Missing required environment variables');
  }

  return {
    baseUrl,
    apiKey,
  };
};

export const getTotalNewsletterSubscribersCount = async (request: Request) => {
  const { baseUrl, apiKey } = getBaseUrlAndAPIKey(request);

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

  const response = await fetch(`${baseUrl}/action/aggregate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': apiKey,
    },
    body: data,
  });

  const responseBody = (await response.json()) as {
    documents: { totalSubscribers: number }[];
  };

  return responseBody?.documents[0]?.totalSubscribers;
};

export const subscribeToNewsletter = async (
  request: Request,
  {
    email,
    first_name = '',
    last_name = '',
  }: Omit<NewsletterFormInput, 'from_url'>,
) => {
  const { baseUrl, apiKey } = getBaseUrlAndAPIKey(request);

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

  const response = await fetch(`${baseUrl}/action/updateOne`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': apiKey,
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

export const getViewsBySlugAndType = async (
  request: Request,
  { slug, type }: ViewInput,
) => {
  const { baseUrl, apiKey } = getBaseUrlAndAPIKey(request);

  const getData = JSON.stringify({
    database: db.database,
    dataSource: db.dataSource,
    collection: db.collections.views,
    filter: { slug, type },
    projection: {
      count: 1,
    },
  });

  const getResponse = await fetch(`${baseUrl}/action/findOne`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': apiKey,
    },
    body: getData,
  });

  const getResponseBody = (await getResponse.json()) as {
    document: { count: number };
  };

  const updatedCount = getResponseBody?.document?.count + 1;

  const updateData = JSON.stringify({
    database: db.database,
    dataSource: db.dataSource,
    collection: db.collections.views,
    filter: { slug, type },
    update: {
      $set: {
        count: updatedCount,
      },
    },
    upsert: true,
  });

  await fetch(`${baseUrl}/action/updateOne`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': apiKey,
    },
    body: updateData,
  });

  return updatedCount;
};
