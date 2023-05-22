export const prerender = false;

// Get all newsletter subscribers
export async function get() {
  const response = {
    totalSubscribers: Math.floor(Math.random() * 1000), // TODO: dummy data for now
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
