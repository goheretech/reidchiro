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
<Hero url='img/int/_OSR6192.jpg' title="Chiropractic | Services"/>
<div class="bg-gray-100 px-20 py-32">
    <p class="text-center text-4xl px-20">Proper musculoskeletal alignment and exercise are the  keys to <span class="text-main font-bold text-5xl">moving correctly </span> and <span class="text-main font-bold text-5xl">strengthening</span> the mind-body connection.</p>    

    <a href="contact" class="text-main text-3xl font-bold uppercase">Call Us Today!</a>
</div>
<About />
<Footer />