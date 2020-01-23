<script>
    import NavSlim from './NavSlim.svelte';
    import { onMount } from 'svelte';
    export let whiteActive = false;
    onMount (()=>{
        window.addEventListener('scroll', (e)=>{
            if (window.scrollY > 600) 
            {
                whiteActive = true
            }else{
                whiteActive = false
            };            
        })
    })
</script>

<style>
    img{
        filter: grayscale(100%) brightness(0%) invert(100%);
        transition:all 300ms;
    }

    .text-white{
        transition:all 300ms;
    }
    .border-white{
        transition:all 300ms;
    }
    nav:hover {
        background:white;
    } 

    nav:hover img{
        filter: none;
    }

    nav:hover .text-white{
        color:#2f855a !important;
    }
    nav:hover .border-white{
        border-color:#2f855a !important;
    }

    nav.wb {
        background:white;
    } 

    nav.wb img{
        filter: none;
    }

    nav.wb .text-white{
        color:#2f855a !important;
    }
    nav.wb .border-white{
        border-color:#2f855a !important;
    }
</style>

<nav class:wb={whiteActive} class="px-8 py-4 flex item-center justify-between fixed top-0 left-0 right-0 hover:shadow z-10" style="transition:all 300ms">
    <img class="h-12" src="img/logononame.png" alt="Reid Chiropractic">
    <div class="flex items-center text-white">
        <a class=" px-4" href="#">For You</a>
        <a class=" px-4" href="#">Services</a>
        <a class=" px-4" href="#">About</a>
        <div class="border-l-2 border-white w-0 h-8 mx-8"></div>
        <a class=" px-4" href="#">Sign Up</a>
        <a class="ml-4  px-4 -mb-2 text-xl" href="#"><i class="material-icons ">search</i></a>
        <a class=" px-4 -mb-2 text-xl" href="#"><i class="material-icons ">menu</i></a>
    </div>
</nav>