<script>	
	import NavSlim from '../components/NavSlim.svelte';
	import About from '../components/About.svelte'
	import {services} from '../components/services.js';	
	import Footer from '../components/Footer.svelte'
</script>
<style>

</style>
<svelte:head>
	<title>Reid Chiropractic</title>
</svelte:head>
<NavSlim />
<div class="flex items-center bg-gray-100 h-screen">
	<section style="background-image:url(img/smile.jpg)" class="w-full h-full bg-center bg-cover">
		<div class="w-full h-full flex items-center justify-center text-white" style="background:rgba(30,30,30,.10)">
			<h2 class="text-6xl px-128 text-center" style="font-family: 'Gelasio', serif;">Exceptional primary care,<br> designed for real life</h2>
		</div>
	</section>
</div>
<Footer />