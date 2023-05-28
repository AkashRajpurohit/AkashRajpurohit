import { db } from './config';

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
