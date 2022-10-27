import type { PageLoad } from './$types';

export const load: PageLoad = ({ fetch }) => {
	const fetchPosts = async () => {
		const res = await fetch('/posts');
		const data = await res.json();
		return data.posts;
	};

	return {
		posts: fetchPosts()
	};
};
