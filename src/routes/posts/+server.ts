import type { RequestHandler } from './$types';
export const GET: RequestHandler = async () => {
	const res = await fetch(`https://dummyjson.com/posts`);
	const data = await res.json();
	return new Response(JSON.stringify(data), { status: 200 });
};

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	console.log(body);
	return new Response(JSON.stringify({ message: 'Success' }), { status: 201 });
};
