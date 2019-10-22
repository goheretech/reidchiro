<script>	
	import NavSmall from '../components/NavSmall.svelte';
	import About from '../components/About.svelte'
	import {services} from '../components/services.js';	
	import Footer from '../components/Footer.svelte'
</script>
<svelte:head>
	<title>Reid Chiropractic</title>
</svelte:head>
<div class="flex items-center bg-gray-100">
	<div class="w-1/2 px-20 -mt-20">
		<NavSmall />
		<h1 class="mt-24 text-6xl capitalize text-gray-800" style="font-size:3vw">Your health is in <span class="text-main font-bold">good hands</span>. <br><span class="text-main font-bold"></span></h1>
		<p class="my-5 leading-relaxed mb-20 text-gray-800 text-2xl">Passionate about <span class="text-main font-bold"> health and wellness</span>, Dr. Charles Reid applies his over <span class="text-main font-bold">30 years of experience</span> to help patients achieve optimum health. <br> <span class="pt-4"> Schedule your appointment today!</span></p>
		<a class="bg-main px-8 py-4 rounded-lg text-white shadow-md hover:border-main hover:bg-white hover:text-main" href="contact">Schedule Today</a>
	</div>
	<div class="w-1/2 relative">
		<div class=" bg-bottom bg-cover" style="background-image:url('img/og.jpg'); height:800px; background-position-x: 35%; background-position-y:10%"></div>
		<svg class="absolute inset-y-0 h-full fill-current text-gray-100 w-32 -ml-16" preserveAspectRatio="none" viewBox="0 0 100 100">
			<polygon points="50,0 100,0 50,100 0,100"/>
		</svg>
	</div>
</div>
<div class="bg-gray-300">
	<div class="mx-20 py-20">
		<h2 class="font-bold text-main text-4xl">
			Our Services
		</h2>
		<div class="flex mt-8 -mx-3 mt-16 text-gray-800">
			{#each services as service}
				<div class="bg-gray-100 mx-3 shadow-md rounded-lg pt-0 flex flex-col border-gray-500 mb-6 hover:shadow-xl w-1/3">
					<img src="{service.img}" alt="" class=" rounded-t-lg w-full h-64 object-cover">
					<div class="p-4 pb-8">
						<h3 class="text-lg text-gray-800">{service.tag}</h3>
						<h2 class="font-bold text-4xl text-main mb-4">{service.name}</h2>
						<p class="mb-6">{service.desc}</p>
						<a href="{service.url}" class="text-main">Learn More</a>
					</div>
				</div>			
			{/each}
		</div>
	</div>
</div>
<div class="pt-16">
	<About />
</div>
<Footer />