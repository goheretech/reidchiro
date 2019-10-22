<script>
    import Nav from '../../components/Nav.svelte';
    import {services} from '../../components/services.js';	
    import About from '../../components/About.svelte'
    import Hero from '../../components/Hero.svelte';
	import Footer from '../../components/Footer.svelte'
</script>
<svelte:head>
	<title>Chiropractic | Services</title>
</svelte:head>
<Nav />
<Hero url='img/int/_OSR6192.jpg' title=" "/>
<div class="bg-gray-100 relative my-16" style="height:90vh">
    <div style="background:url('img/hands.jpg'); background-size:cover; background-position:center;" class="bg-red-300 absolute right-0 top h-full w-1/2 bg-center bg-contain" >
    
    </div>

    <div class="absolute bg-white shadow-xl top left p-24 m-32 w-1/2 rounded floater">
        <h1 class="text-5xl font-bold text-gray-900" style="font-size:3.8vw;">This is an important piece of info.</h1>
        <p class="text-2xl mt-8 mb-16">Proper musculoskeletal alignment and exercise are the  keys to <span class="text-main font-bold text-3xl">moving correctly </span> and <span class="text-main font-bold text-3xl">strengthening</span> the mind-body connection.</p> 
        <a href="#" class="bg-main rounded shadow px-8 py-4 text-gray-100 my-8">Call Now</a>
    </div>
    <!-- <p class="text-center text-4xl px-20">Proper musculoskeletal alignment and exercise are the  keys to <span class="text-main font-bold text-5xl">moving correctly </span> and <span class="text-main font-bold text-5xl">strengthening</span> the mind-body connection.</p>    

    <a href="contact" class="text-main text-3xl font-bold uppercase">Call Us Today!</a> -->
</div>
<About />
<Footer />