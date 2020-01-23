<script>	
	import NavSlim from '../components/NavSlim.svelte';
	import About from '../components/About.svelte'
	import {services, homeBlurb} from '../components/services.js';	
	import Footer from '../components/Footer.svelte'
</script>
<style>
	.service-item{
		transition: color 700ms;
	}
	.service-item:hover{
		color:#eed879;
	}

	.gold:hover{
		background:#eed879;
		color:black;
	}
</style>
<svelte:head>
	<title>Reid Chiropractic</title>
</svelte:head>
<NavSlim />
<div class="flex items-center bg-gray-100 h-screen">
	<section style="background-image:url(img/reid2.jpg)" class="w-full h-full bg-center bg-cover">
		<div class="w-full h-full flex items-center justify-center text-white flex-col relative" style="background:rgba(30,30,30,.30)">
			<h2 class="px-128 text-center font-bold leading-none" style="font-family: 'Playfair Display', serif; font-size:90px;">Exceptional chiropractic care,<br> designed for real life</h2>
			<a href="#" class="mt-12 bg-green-700 gold rounded-full px-8 py-4">Sign Up today</a>
			<h3 class="font-bold mt-6">Lorem ipsum dolor sit amet, consectetur</h3>
			<div class="mb-24 absolute bottom-0 font-bold flex flex-col items-center justify-center">
				Scroll Down
				<div class="mt-4 border-white w-8 h-8 border-l-4 border-b-4" style="transform:rotate(-45deg)"></div>
			</div> 
		</div>
	</section>
</div>
<section  class="flex justify-center items-center flex-col py-48">
	<container class="flex justify-center items-center flex-col text-center" style="width:1100px;">
		<h2 class="text-green-800 font-semibold leading-none mb-12" style="font-family: 'Playfair Display', serif; font-size:75px;">We’re changing the way you go to the chiropractor</h2>
		<p class="text-lg text-green-900">
			This is no ordinary doctor’s office. Rather than do things the typical way, we’ve created a membership-based primary care practice truly designed around your needs. From same-day appointments that start on time to compassionate providers who listen to 24/7 video visits, we make it faster, easier, and more enjoyable to get care — whenever and wherever you need it.
		</p>
	</container>
</section>
{#each homeBlurb as blurb, i}
<section class="flex mx-32 mb-48" class:flex-row-reverse={i%2!=0}>
	<div style="background-image:url({blurb.img})" class="bg-center bg-cover w-1/2 "></div>
	<div class="w-1/2" class:pl-32={i%2==0} class:my-64={i%2!=0} class:my-32={i%2==0} class:pr-32={i%2!=0}>
		<h2 class="text-green-800 font-semibold leading-none mb-12" style="font-family: 'Playfair Display', serif; font-size:70px;">
			{blurb.title}
		</h2>
		<p class="text-lg text-green-900 mb-12">
			{blurb.p}
		</p>
		<a class="text-green-800" href="{blurb.link}">{blurb.linkT} ></a>
	</div>
</section>
{/each}
<!-- 
			<section class="flex mx-32 my-32">
				<div class="w-1/2 my-56 mr-32">
					<h2 class="text-green-800 font-semibold leading-none mb-12" style="font-family: 'Playfair Display', serif; font-size:75px;">
						Offices you’ll want to visit
					</h2>
					<p class="text-lg text-green-900 mb-12">
						We’ve positioned our beautiful offices near where you live, work, and travel. You can schedule same- or next-day appointments that start on time.
					</p>
					<a class="text-green-800" href="">View Address ></a>
				</div>
				<div style="background-image:url(img/reid2.jpg)" class="bg-center bg-cover w-1/2 "></div>
			</section> 
-->

<section style="font-family: 'Playfair Display', serif;" class="bg-green-700 p-32">
	<h3 class="text-white mb-12 text-xl">How we can help:</h3>
	{#each services as service, i}
		<h2 class="font-bold text-white leading-none mb-4 " style="font-family: 'Playfair Display', serif; font-size:110px;"><a class="service-item" href="">{service.name}</a></h2>
	{/each}
</section>
<Footer />