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
	import NavSlim from '../../components/NavSlim.svelte';
    import {services} from '../../components/services.js';	    
	import Hero from '../../components/Hero.svelte';
	import About from '../../components/About.svelte'
    import Footer from '../../components/Footer.svelte'
</script>


<style>
	.lightgreen{
		background:rgb(170, 218, 93);
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>
<NavSlim />
	<section class="w-full h-screen bg-green-500 flex items-center">
		<div style="background-image:url({post.pic})" class="w-full h-full bg-center bg-cover">
			<div class="w-full h-full flex items-center justify-center text-white flex-col relative" style="background:rgba(30,30,30,.30)">
				<h3 class="font-bold mt-6 mb-12">{post.title}</h3>
				<h2 class="px-128 text-center font-bold leading-none" style="font-family: 'Playfair Display', serif; font-size:90px;">{post.head}</h2>
				<a href="#" class="mt-12 bg-green-700 gold rounded-full px-8 py-4">Sign Up today</a>
				<h3 class="font-bold mt-6">Lorem ipsum dolor sit amet, consectetur</h3>
				<div class="mb-24 absolute bottom-0 font-bold flex flex-col items-center justify-center">
					Scroll Down
					<div class="mt-4 border-white w-8 h-8 border-l-4 border-b-4" style="transform:rotate(-45deg)"></div>
				</div> 
			</div>
		</div>
	</section>
	<section  class="flex justify-center items-center flex-col py-48">
		<container class="flex justify-center items-center flex-col text-center" style="width:1100px;">
			<h2 class="text-green-800 font-semibold leading-none mb-12" style="font-family: 'Playfair Display', serif; font-size:75px;">We’re changing the way you go to the chiropractor</h2>
			<p class="text-lg text-green-900">
				{@html post.html}
			</p>
			<p class="text-lg text-green-900 pt-4">				
				We work with your insurance just like a regular doctor's office would, but we offer so much more. A Reid Chiropractic membership makes it faster, easier, and more enjoyable to look after your health. All for just $199 a year.
			</p>
			
		</container>
	</section>
	<section class="bg-gray-200 flex justify-center items-center flex-col w-full py-48">
		<container class="flex justify-center items-center flex-col text-center" style="width:1100px;">
			<h2 class="text-green-800 font-semibold leading-none mb-12" style="font-family: 'Playfair Display', serif; font-size:55px;">“Dr. Reid remembers what many other healthcare companies don’t - that patients are people.”</h2>
			<p class="text-lg text-green-900">
				— The Consumerization Of Healthcare, Jan 31, 2019
			</p>
		</container>
	</section>
	<section class="flex justify-center items-center flex-col w-full py-48">
		<container class="flex justify-center items-center flex-col text-center mx-32" >
			<h2 class="text-green-800 font-semibold leading-none mb-24" style="font-family: 'Playfair Display', serif; font-size:65px;">What you get with membership</h2>
			<div class="flex">
				<div class="div mx-12">
					<div style="background-image:url('img/exam.jpg')" class="w-full h-64 bg-center bg-cover"></div>
					<h3 class="text-green-800 font-semibold leading-none text-xl mb-4 mt-8">Connect to care 24/7</h3>
					<p>Connect to on-demand care over video. Message our care team. Renew prescriptions and book appointments with just a few taps.</p>
				</div>
				<div class="div mx-12">
					<div style="background-image:url('img/reid1.jpg')" class="w-full h-64 bg-center bg-cover"></div>
					<h3 class="text-green-800 font-semibold leading-none text-xl mb-4 mt-8">Easily book appointments at any of our 70+ offices</h3>
					<p>All of our providers have access to your complete One Medical health history — so you can get truly personalized care wherever you work, live, and travel.</p>
				</div>
				<div class="div mx-12">
					<div style="background-image:url('img/reid2.jpg')" class="w-full h-64 bg-center bg-cover"> </div>
					<h3 class="text-green-800 font-semibold leading-none text-xl mb-4 mt-8">Get help navigating the system</h3>
					<p>From billing questions to insurance issues to specialist referrals, our care team is here to help guide you through the healthcare maze.</p>
				</div>
				
			</div>
		</container>
	</section>
	<section class="bg-green-700 py-64 flex justify-center items-center flex-col">
		<container class="flex justify-center items-center flex-col text-center" style="width:1100px;">
			<h2 class="text-white font-semibold leading-none mb-12 text-center" style="font-family: 'Playfair Display', serif; font-size:85px;">Get started with Reid Chiropractic today</h2>
			<div class="flex">
				<a href="#" class="mt-12 gold rounded-full px-12 py-4 font-semibold mx-4 text-green-800 lightgreen" >Sign Up today</a>
				<a href="#" class="mt-12 bg-white gold rounded-full px-12 py-4 font-semibold mx-4 text-green-800">For employers</a>
			</div>
		</container>
	</section>
<Footer />
