<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`insights.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
    import NavSlim from '../../components/NavSlim.svelte';
    import {services} from '../../components/services.js';	    
    import Hero from '../../components/Hero.svelte';
    import About from '../../components/About.svelte'
    import Footer from '../../components/Footer.svelte'
	export let posts;
</script>
<svelte:head>
	<title>Insights | Reid Chiropractic</title>
</svelte:head>
<NavSlim />
<Hero url='img/int/_OSR6163.jpg' title="Dr. Reid's Insights"/>

	<div class="mx-24 my-16" >
		{#each posts as post}
		<a href='insights/{post.slug}'>
			<div class="w-full p-8 pt-32 text-white text-5xl bg-fixed bg-cover relative mb-4" style="background:url({post.img}); background-attachment:fixed !important;">
				<div class="bg-black w-full h-full absolute top-0 left-0 opacity-25"></div>
				<h1 class="relative z-100">				
				{post.title}
				</h1>
			</div>
		</a>
		{/each}
	</div>
	
<About />
<Footer />