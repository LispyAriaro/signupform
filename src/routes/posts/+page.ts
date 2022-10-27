import type { PageLoad } from './$types';
import axios from 'axios'

export const load: PageLoad = async ({ fetch }) => {
  console.log('Inside load ...')

  const headers = {
    'content-type': 'application/json'
  }

  const postPayload: any = {
    username: 'Ken' + Math.random(),
    password: 'GrandMaster',
  }
  const apiUrl = 'https://crunchypawn-dev.fly.dev/api/signup/signup'

  const response = await axios.post(apiUrl, postPayload, {
    headers
  })

  console.log(response.data)

	const fetchPosts = async () => {
		const res = await fetch('/posts');
		const data = await res.json();
		return data.posts;
	};

	return {
		posts: fetchPosts()
	};
};
