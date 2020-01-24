<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`services/${params.slug}.json`);
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
<Hero url='img/int/_OSR6192.jpg' title=" "/>
<div class="bg-gray-100 relative my-16" style="height:90vh">
    <div style="background:url('{post.pic}'); background-size:cover; background-position:center;" class="bg-red-300 absolute right-0 top h-full w-1/2 bg-center bg-cover bg-white" >
    
    </div>

    <div class="absolute bg-white shadow-xl top left p-24 m-16 w-1/2 rounded floater" data-var="100">
        <h1 class="text-5xl font-bold text-gray-900" style="font-size:3.8vw;">{post.head}</h1>
        {@html post.html}
        <a href="#" class="bg-main rounded shadow px-8 py-4 text-gray-100 my-8">Call Now</a>
    </div>
</div>
<About />
<Footer />
