<script>
    import {onMount} from 'svelte';
    import Nav from '../components/Nav.svelte';
    import Hero from '../components/Hero.svelte';
	import {services} from '../components/services.js';	
    import Footer from '../components/Footer.svelte'
    onMount(async () => {
		var swiper = new Swiper('.swiper-container',{
            effect:'cube',
            grabCursor: true,
            cubeEffect:{
                shadow: false,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        })
	});
    
    const faq = [
        {
            q:'What is microbiome?' ,
            a: '<p>In the gut lives a flourishing ecosystem, called the microbiome, teeming with over 10,000 species of microorganisms that outnumber our cells nearly 10 to 1. It begins developing at birth, and things like diet, exposure to toxins, and stress dictate which species of microorganisms colonize in the body.</p>'
        },
        {
            q:'What are the symptoms of a poor microbiome?' ,
            a: '<p>If you struggle with any of the following, it could be a sign that your microbiome is sick.</p><ul><li>Memory problems and poor concentration</li><li>Mood disorders--anxiety, depression, bipolar disorder, etc.</li><li>ADHD</li><li>Autism</li><li>Chronic fatigue</li><li>Dementia or Alzheimer’s disease</li><li>Insomnia</li><li>Tic disorders</li><li>Chronic headaches or migraines</li><li>Auto-immune diseases like MS, Parkinson’s, and type-1 diabetes.</li><li>Extreme menstrual or menopausal symptoms</li><li>Chronic constipation or diarrhea</li><li>Inflammatory bowel diseases</li><li>Irritable bowel syndrome</li><li>Celiac disease</li><li>Atherosclerosis</li><li>Obesity and overweight</li><li>Diabetes</li><li>Sugar and carbohydrate cravings</li><li>High blood pressure</li><li>Bad breath, gum disease, and dental problems</li><li>Painful joint inflammation and arthritis</li><li>Asthma</li><li>Allergies and food sensitivities</li><li>Acne</li><li>Eczema</li><li>Frequent colds or infections</li><li>Cancer</li></ul><p>Surprised? The microbiome is the new frontier in medicine, and as researchers are learning more about it, they are beginning to see that gut health is the biggest determinant of overall health. As Hippocrates said, “All disease begins in the gut.”</p>'
        },
        {
            q:'What can I do about it?' ,
            a: '<p>There’s hope! The microbiome is extremely responsive to changes in nutrition and lifestyle; starting a regimen of nutritional supplements, limiting your exposure to toxins, and modifying your diet can reestablish a healthy microbiome--the first step toward stopping these disruptive symptoms and leading you down a path to wellness. Make an appointment with Dr. Reid today!</p>'
        },
    ]
</script>
<style>
    li{
        padding-left:20px;
        font-size:16px;
        color:blue;
    }
    h2{
        color:red;
    }
    p{
        color:blue;
    }
</style>
<svelte:head>
	<title>FAQ | Reid Chiropractic</title>
</svelte:head>

<Nav />
<Hero url='img/int/_OSR6163.jpg' title="Frequently Asked Questions"/>

<div class="px-24 flex justify-center flex-col">
    {#each faq as unit}        
    <div class="mb-12">
        <h2 class="font-bold text-3xl">{unit.q}</h2>
        {@html unit.a}
    </div>
    {/each}
</div>