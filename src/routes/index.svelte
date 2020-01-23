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
		<div class="w-full h-full flex items-center justify-center text-white flex-col relative" style="background:rgba(30,30,30,.10)">
			<h2 class="px-128 text-center font-medium leading-none" style="font-family: 'Gelasio', serif; font-size:90px;">Exceptional Chiropractic care,<br> designed for real life</h2>
			<a href="#" class="mt-12 bg-green-700 rounded-full px-8 py-4">Sign Up today</a>
			<h3 class="font-bold mt-6">Lorem ipsum dolor sit amet, consectetur</h3>
			<div class="mb-24 absolute bottom-0 font-bold flex flex-col items-center justify-center">
				Scroll Down
				<div class="mt-4 border-white w-8 h-8 border-l-4 border-b-4" style="transform:rotate(-45deg)"></div>
			</div> 
		</div>
	</section>
</div>

<Footer />