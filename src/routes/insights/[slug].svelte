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
	import Nav from '../../components/Nav.svelte';
    import {services} from '../../components/services.js';	    
	import Hero from '../../components/Hero.svelte';
	import About from '../../components/About.svelte'
    import Footer from '../../components/Footer.svelte'
</script>


<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<Nav />
<Hero url='{post.img}' title=""/>
<h1 class=" ml-2 mt-6 text-main text-6xl  w-1/2 font-bold relative z-10 px-20 -mt-20" >{post.title}</h1>
<div class='content px-20 py-10'>
	{@html post.html}
	<a class="pt-8" href="/insights" style="margin-top:30px">
		<div class="mt-8 text-xl">
			Back to Insights
		</div>
	</a>
</div>

<About />
<Footer />
