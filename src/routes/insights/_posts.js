// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
    {
        title: 'The Functions Of The Microbiome',
        img: 'https://picsum.photos/1920/1080',
        slug: 'microbiome-functions',
        html: `<p>The microbiome is the collection of microorganisms--bacteria, fungi, protozoa, viruses, etc.--that inhabit the gut. It is appropriately referred to as a “super organ,” as it is absolutely essential to human life, playing a prominent role in the most important processes in our body:</p>
        <ul>
            <li>Aiding digestion.</li>
            <li>Absorbing nutrients from food.</li>
            <li>Detoxication (think of your microbiome as a second liver).</li>
            <li>Fighting invaders in the gut, like harmful bacteria, viruses, and parasites.</li>
            <li>Producing your body’s chemical messengers--enzymes, vitamins, neurotransmitters, and other substances
                that cooperate with your cells. Fun fact! 90% of the body’s serotonin is made in the gut.</li>
            <li>Mediating the body’s response to stress.</li>
            <li>Impacting energy levels and sleep patterns.</li>
            <li>Influencing the actions of the immune, endocrine, and nervous systems--including directly with the
                brain.</li>
        </ul>
        <p>    
            Therefore, if our gut flora are healthy, generally so are the rest of our organs,but if they are sick, all manner of chronic diseases, auto-immune disorders, and mental illnesses can start to overrun our bodies and drag us down a path of degeneration.
        </p>`
        
    },
    {
        title: 'The Functions Of The Microbiome',
        img: 'https://picsum.photos/1920/1080',
        slug: 'microbiome-functions',
        html: `<p>The microbiome is the collection of microorganisms--bacteria, fungi, protozoa, viruses, etc.--that inhabit the gut. It is appropriately referred to as a “super organ,” as it is absolutely essential to human life, playing a prominent role in the most important processes in our body:</p>
        <ul>
            <li>Aiding digestion.</li>
            <li>Absorbing nutrients from food.</li>
            <li>Detoxication (think of your microbiome as a second liver).</li>
            <li>Fighting invaders in the gut, like harmful bacteria, viruses, and parasites.</li>
            <li>Producing your body’s chemical messengers--enzymes, vitamins, neurotransmitters, and other substances
                that cooperate with your cells. Fun fact! 90% of the body’s serotonin is made in the gut.</li>
            <li>Mediating the body’s response to stress.</li>
            <li>Impacting energy levels and sleep patterns.</li>
            <li>Influencing the actions of the immune, endocrine, and nervous systems--including directly with the
                brain.</li>
        </ul>
        <p>    
            Therefore, if our gut flora are healthy, generally so are the rest of our organs,but if they are sick, all manner of chronic diseases, auto-immune disorders, and mental illnesses can start to overrun our bodies and drag us down a path of degeneration.
        </p>`
        
    },
    {
        title: 'The Functions Of The Microbiome',
        img: 'https://picsum.photos/1920/1080',
        slug: 'microbiome-functions',
        html: `<p>The microbiome is the collection of microorganisms--bacteria, fungi, protozoa, viruses, etc.--that inhabit the gut. It is appropriately referred to as a “super organ,” as it is absolutely essential to human life, playing a prominent role in the most important processes in our body:</p>
        <ul>
            <li>Aiding digestion.</li>
            <li>Absorbing nutrients from food.</li>
            <li>Detoxication (think of your microbiome as a second liver).</li>
            <li>Fighting invaders in the gut, like harmful bacteria, viruses, and parasites.</li>
            <li>Producing your body’s chemical messengers--enzymes, vitamins, neurotransmitters, and other substances
                that cooperate with your cells. Fun fact! 90% of the body’s serotonin is made in the gut.</li>
            <li>Mediating the body’s response to stress.</li>
            <li>Impacting energy levels and sleep patterns.</li>
            <li>Influencing the actions of the immune, endocrine, and nervous systems--including directly with the
                brain.</li>
        </ul>
        <p>    
            Therefore, if our gut flora are healthy, generally so are the rest of our organs,but if they are sick, all manner of chronic diseases, auto-immune disorders, and mental illnesses can start to overrun our bodies and drag us down a path of degeneration.
        </p>`
        
    },
    {
        title: 'The Functions Of The Microbiome',
        img: 'https://picsum.photos/1920/1080',
        slug: 'microbiome-functions',
        html: `<p>The microbiome is the collection of microorganisms--bacteria, fungi, protozoa, viruses, etc.--that inhabit the gut. It is appropriately referred to as a “super organ,” as it is absolutely essential to human life, playing a prominent role in the most important processes in our body:</p>
        <ul>
            <li>Aiding digestion.</li>
            <li>Absorbing nutrients from food.</li>
            <li>Detoxication (think of your microbiome as a second liver).</li>
            <li>Fighting invaders in the gut, like harmful bacteria, viruses, and parasites.</li>
            <li>Producing your body’s chemical messengers--enzymes, vitamins, neurotransmitters, and other substances
                that cooperate with your cells. Fun fact! 90% of the body’s serotonin is made in the gut.</li>
            <li>Mediating the body’s response to stress.</li>
            <li>Impacting energy levels and sleep patterns.</li>
            <li>Influencing the actions of the immune, endocrine, and nervous systems--including directly with the
                brain.</li>
        </ul>
        <p>    
            Therefore, if our gut flora are healthy, generally so are the rest of our organs,but if they are sick, all manner of chronic diseases, auto-immune disorders, and mental illnesses can start to overrun our bodies and drag us down a path of degeneration.
        </p>`
        
    },
];

posts.forEach(post => {
    post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
