<script>	
	import NavSmall from '../components/NavSmall.svelte';
	import About from '../components/About.svelte'
	import {services} from '../components/services.js';	
	import Footer from '../components/Footer.svelte'
</script>
<style>

	.btn{
		transition: all .2s;
		-webkit-transition: all .2s;
		padding-left:0px;
		font-size:18px;		
		padding:8px 16px;
	}
	.btn:hover{
		color:white;
		
	}

	.persp{
		perspective: 1000px;
	}
	.rLeft{
		transform: rotateY(5deg) !important;
	}
	.rMid{
		transform: translateZ(-15px) !important;
	}
	.rRight{
		transform: rotateY(-5deg) !important;
	}

</style>
<svelte:head>
	<title>Reid Chiropractic</title>
</svelte:head>
<div class="flex items-center bg-gray-100 h-screen">
	<div class="w-1/2 px-20 -mt-20 ">
		<NavSmall />
		<h1 class="mt-24 text-6xl capitalize text-gray-800" style="font-size:3vw">Your health is in <span class="text-main font-bold">good hands</span>. <br><span class="text-main font-bold"></span></h1>
		<p class="my-5 leading-relaxed mb-20 text-gray-800 text-3xl">Passionate about <span class="text-main font-bold"> health and wellness</span>, Dr. Charles Reid applies his over <span class="text-main font-bold">30 years of experience</span> to help patients achieve optimum health. </p>
		<a class="bg-main px-8 py-4 rounded-lg text-white shadow-md hover:border-main hover:bg-white hover:text-main float-right" href="contact">Schedule Today</a>
	</div>
	<div class="w-1/2 relative h-full" style="overflow:hidden;">
		<div class=" bg-bottom bg-cover floaterI" data-var="-120" style="background-image:url('img/reid1.jpg'); height:100%; background-position-x: 35%; background-position-y:10%; transform:scale(1.2)"></div>
		<svg class="absolute inset-y-0 h-full fill-current text-gray-100 w-32 -ml-16" preserveAspectRatio="none" viewBox="0 0 100 100">
			
			<polygon points="50,0 100,0 50,100 0,100"/>
		</svg>
	</div>
</div>
<div class="bg-gray-300 h-screen shadow-med relative z-2">
	<div class="mx-20 py-20 h-full flex flex-col justify-center">
		<h2 class="font-bold text-main text-4xl">
			Our Services
		</h2>
		<div class="flex mt-8 -mx-3 mt-16 text-gray-800 justify-center persp floater">
			{#each services as service, i}
				<div class:rRight={i==2} class:rMid={i==1} class:rLeft={i==0} class="bg-gray-100 mx-3 shadow-2xl rounded-lg pt-0 flex flex-col border-gray-500 mb-6 hover:shadow-3xl w-1/3 "  data-var="30" style="-webkit-box-reflect: below 12px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(80%, transparent), to(rgba(255, 255, 255, 0.8)))">
					<img src="{service.img}" alt="" class=" rounded-t-lg w-full h-64 object-cover">
					<div class="p-12 pb-16">
						<h3 class="text-md text-gray-800 font-thin mb-2">{service.tag}</h3>
						<h2 class="font-bold text-4xl text-main mb-8">{service.name}</h2>
						<p class="mb-6">{service.desc}</p>
						<a href="{service.url}" class="text-main btn float-right rounded-lg hover:bg-main">{service.button}</a>
					</div>
				</div>			
			{/each}
		</div>
	</div>
</div>
<div class="pt-16 z-10 relative">
	<About />
</div>
<Footer />