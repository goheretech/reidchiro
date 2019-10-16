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
<div class="py-5 px-20"><Nav /></div>
<Hero url='img/int/_OSR6163.jpg' title="Chiropractic | Services"/>
<About />
<Footer />