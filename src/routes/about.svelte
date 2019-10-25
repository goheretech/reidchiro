
<script>
    import Nav from '../components/Nav.svelte';
    import Hero from '../components/Hero.svelte';
	import {services} from '../components/services.js';	
	import Footer from '../components/Footer.svelte'
</script>
<svelte:head>
	<title>About Dr. Reid</title>
</svelte:head>
<Nav />
<Hero url='img/int/_OSR6163.jpg' title=""/>
<div class="bg-gray-100">
	<div class="relative " style="height:75vh">
		<div style="background:url('img/int/_OSR6163.jpg'); background-size:cover; background-position:center;" class="bg-red-300 absolute left-0 top h-full w-1/2 bg-center bg-cover bg-white floater" data-var="10"></div>

		<div class="absolute bg-white shadow-xl top right-0 p-24 m-16 w-1/2 rounded floater" data-var="100">
			<h2 class="text-5xl text-main font-bold mb-8">Who is Dr. Reid?</h2>
			<p class="text-xl z-30 relative">Dr. Charles Reid is a chiropractor and clinical nutritionist with over 30 years of experience helping his patients achieve optimal health.</p><p class="text-xl mt-4">Health and wellness are his passion, and he treats the whole body for ultimate healing, rather than treating individual symptoms.</p>
		</div>
	</div>
	<div class="relative -mt-16 z-10" style="height:75vh">
		<div style="background:url('img/int/_OSR6267.jpg'); background-size:cover; background-position:center;" class="bg-red-300 absolute right-0 top h-full w-3/5 bg-center bg-cover bg-white floater shadow-xl" data-var="30"></div>

		<div class="absolute bg-white shadow-2xl top left p-24 m-16 w-1/2 rounded floater" data-var="160">
			<h2 class="text-5xl text-main font-bold mb-8">What Sets Dr. Reid Apart?</h2>
			<p class="text-xl">Dr. Reid committed to learning the best ways to help his patients--always reading the latest science, attending conferences, and even mentoring other doctors in the field.</p> <p class="text-xl mt-4">He will help you create your ultimate healthy experience through moving well, eating well, and thinking well.	</p>
		</div>
	</div>
	<div class="relative -mt-16" style="height:75vh">
		<div style="background:url('img/int/_OSR6248.jpg'); background-size:cover; background-position:center;" class="bg-red-300 absolute left-0 top h-full w-1/2 bg-center bg-cover bg-white floater" data-var="0">
		
		</div>

		<div class="absolute bg-white shadow-xl top right-0 p-24 m-16 w-1/2 rounded floater z-20" data-var="100">
			<h2 class="text-5xl text-main font-bold mb-8">Education & Services</h2>
			<ul class="list-disc ml-8 text-xl">
				<li>Doctor of Chiropractic, Life Chiropractic College, Marietta GA</li>
				<li>Wellness International Chiropractic Association</li>
				<li>Over 1000 continuing education hours on nutrition & chiropractic</li>
				<li>Mentors & trains chiropractors entering the field of nutrition.</li>
			</ul>
		</div>
	</div>
</div>
<Footer />