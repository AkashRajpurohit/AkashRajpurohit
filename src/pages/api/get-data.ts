// Example API endpoint for testing cloudflare SSR
// TODO: remove this later

export const prerender = false;

export async function get() {
  const response = {
    data: new Date().toDateString(),
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
