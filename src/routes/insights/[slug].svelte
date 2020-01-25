<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`insights/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
	import NavSlim from '../../components/NavSlim.svelte';
    import {services} from '../../components/services.js';	    
	import Hero from '../../components/Hero.svelte';
	import About from '../../components/About.svelte'
    import Footer from '../../components/Footer.svelte'
</script>

<style>
	h2{
		font-size:24px;
	}
	p{
		margin-bottom:12px;
	}
</style>
<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<NavSlim />
<div class="bg-green-700 w-full flex items-end justify-center">
	<container style="width:1100px; margin-top:200px; margin-bottom:30px;">
			<h1 class=" text-white text-6xl font-bold relative z-10 mb-8 text-right" >{post.title}</h1>
	</container>
</div>
<div class='content px-20 py-10 flex items-center justify-center bg-gray-100'>
	<container style="width:1100px;">
		{@html post.html}
		<a class="pt-8" href="/insights" style="margin-top:30px">
			<div class="mt-8 text-xl">
				Back to Insights
			</div>
		</a>
	</container>
</div>
<!-- 
<About /> -->
<Footer />
