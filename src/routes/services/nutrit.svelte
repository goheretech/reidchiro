<script>
    import Nav from '../../components/Nav.svelte';
    import {services} from '../../components/services.js';	
    import About from '../../components/About.svelte'
    import Hero from '../../components/Hero.svelte';
	import Footer from '../../components/Footer.svelte'
</script>
<svelte:head>
	<title>Nutrition | Services</title>
</svelte:head>
<Nav />
<Hero url='img/int/_OSR6169.jpg' title="Nutrition | Services"/>
<div class="bg-gray-100 px-20 py-32">
    <p class="text-center text-xl text-4xl px-20"><span class="text-main font-bold text-5xl"> Food is medicine. </span>   Proper eating can replenish and restore deficiencies while eliminating toxicities that lead to early degeneration. By using a combination of whole food supplements and healthy eating our patients progress toward <span class="text-main font-bold text-5xl"> optimum wellness</span>.
</p>    
</div>
<About />
<Footer />