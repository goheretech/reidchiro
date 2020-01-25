<script>	
	import { onMount } from 'svelte';
	import NavSlim from '../components/NavSlim.svelte';
	import About from '../components/About.svelte'
	import {services, homeBlurb} from '../components/services.js';	
	import Footer from '../components/Footer.svelte';
	let scroll = 0;
    onMount (()=>{
        window.addEventListener('scroll', (e)=>{
            scroll = getScrollPercent();
            
            console.log(scroll);
		 
        })

        function getScrollPercent() {
            var h = document.documentElement, 
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight';
            return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
        }
    })
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
	<section style="background-image:url(img/kitch2.jpg)" class="w-full h-full bg-center bg-cover">
		<div class="w-full h-full flex items-center justify-center flex-col relative" style="background:rgba(30,30,30,.20)">
			<container class="flex justify-end items-end text-center h-full" style="width:1300px;">
				<div class="bg-gray-100 w-1/2 px-12 py-32">
					<h2 style="font-family: 'Playfair Display'; font-size: 48px;">"My goal is to educate and empower patients to live a healthy optimized life."</h2>
					<div class="flex justify-center items-center mt-12 pt-12 border-solid border-t-4 border-gray-300">
						<div class="rounded-full bg-center bg-cover mr-8 " style="background-image:url(img/int/_OSR6163.jpg); width:80px; height:80px;"></div>
						<h3 style="font-size:40px; font-family: 'Yellowtail', cursive;">Charles Reid M.D.</h3>
					</div>
				</div>
			</container>
		</div>
	</section>
</div>
{#each homeBlurb as blurb, i}
<section class="flex mx-32 mt-48" class:flex-row-reverse={i%2!=0}>
	<div style="background-image:url({blurb.img})" class="bg-center bg-cover w-1/2 "></div>
	<div class="w-1/2" class:pl-32={i%2==0} class:my-64={i%2!=0} class:my-32={i%2==0} class:pr-32={i%2!=0}>
		<h2 class="text-green-800 font-semibold leading-none mb-10" style="font-family: 'Playfair Display', serif; font-size:70px;">
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
					<h2 class="text-green-800 font-semibold leading-none mb-10" style="font-family: 'Playfair Display', serif; font-size:75px;">
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
<section  style="background-image:url('img/fab1.jpg'); font-family: 'Playfair Display', serif;" class="bg-center bg-contain flex justify-start items-start flex-col relative p-32 mt-48" >
		<div class="bg-green-700 absolute top-0 bottom-0 left-0 right-0 h- opacity-75"></div>
		<div class="z-10">
			<h3 class="text-white mb-12 text-xl">How we can help:</h3>
			{#each services as service, i}
				<h2 class="font-bold text-white leading-none mb-4 " style="font-family: 'Playfair Display', serif; font-size:110px;"><a class="service-item" href="{service.url}">{service.name}</a></h2>
			{/each}
		</div>
</section>
<Footer />