<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div>
	{#each data.posts as post}
		<h1 class="bg-blue-500 text-white p-2">{post.title}</h1>
		<p>{post.body}</p>
	{/each}
</div>
