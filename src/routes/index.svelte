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
		<h1 class="mt-10 text-5xl capitalize text-gray-800">Your health is in good hands. <br><span class="text-main font-bold">Welcome to a new way. </span></h1>
		<p class="my-5 leading-relaxed mb-20 text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut totam repellendus, ipsa praesentium recusandae et, minima blanditiis laudantium quisquam tempore natus in maiores ducimus nihil nesciunt incidunt commodi voluptate aut.</p>
		<a class="bg-main px-8 py-4 rounded-lg text-white shadow-md hover:border-main hover:bg-white hover:text-main" href="contact">Book Your Escape</a>
	</div>
	<div class="w-1/2 relative">
		<div class="bg-cover bg-center" style="background-image:url('img/int/_OSR6248.jpg'); height:800px"></div>
		<svg class="absolute inset-y-0 h-full fill-current text-gray-100 w-32 -ml-16" preserveAspectRatio="none" viewBox="0 0 100 100">
			<polygon points="50,0 100,0 50,100 0,100"/>
		</svg>
	</div>
</div>
<div class="bg-gray-300">
	<div class="mx-20 py-20">
		<h2 class="font-bold text-3xl">
			Our Services
		</h2>
		<h3 class="text-gray-700 text-xl mt-1">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, sint?
		</h3>
		<div class="flex mt-8 -mx-3 mt-16 text-gray-800">
			{#each services as service}
				<div class="bg-gray-100 mx-3 shadow-md rounded-lg pt-0 flex flex-col border-gray-500 mb-6 hover:shadow-xl">
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
<About />
<Footer />