<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`insights.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
    import Nav from '../../components/Nav.svelte';
    import {services} from '../../components/services.js';	    
    import Hero from '../../components/Hero.svelte';
    import About from '../../components/About.svelte'
    import Footer from '../../components/Footer.svelte'
    export let posts;
</script>
<svelte:head>
	<title>Insights | Reid Chiropractic</title>
</svelte:head>
<Nav />
<Hero url='img/int/_OSR6163.jpg' title="Dr. Reid's Insights"/>


<ul class="px-20 py-10">
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='insights/{post.slug}'>{post.title}</a></li>
	{/each}
</ul>
<About />
<Footer />