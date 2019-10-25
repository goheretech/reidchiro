
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
<Hero url='img/int/_OSR6163.jpg' />
<div class="bg-gray-100 p-20 text-xl flex pt-10">
	<div class="w-1/2">
		<p>Dr. Charles Reid is a chiropractor and clinical nutritionist with over 30 years of experience helping his patients achieve optimal health.  Health and wellness are his passion, and he treats the whole body for ultimate healing, rather than treating individual symptoms.
		</p>
		<p class="mt-5">Dr. Reid committed to learning the best ways to help his patients--always reading the latest science, attending conferences, and even mentoring other doctors in the field. He will help you create your ultimate healthy experience through moving well, eating well, and thinking well.	</p>
	</div>
	<div class="w-1/2 ml-20 ">
		<h2 class="text-4xl text-main font-bold mb-4">Education & Services</h2>
		<ul class="list-disc ml-8">
			<li>Doctor of Chiropractic, Life Chiropractic College, Marietta GA</li>
			<li>Wellness International Chiropractic Association</li>
			<li>Over 1000 continuing education hours on nutrition & chiropractic</li>
			<li>Mentors & trains chiropractors entering the field of nutrition.</li>
		</ul>
	</div>
	
</div>
<Footer />