// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
    {
        title: 'Chiropractic',
        slug: 'chiropractic',
        head: `Adjusting For Wellness`,
        html: `<p class="text-2xl mt-8 mb-16">Proper musculoskeletal alignment and exercise are the  keys to <span class="text-main font-bold text-3xl">moving correctly </span> and <span class="text-main font-bold text-3xl">strengthening</span> the mind-body connection.</p>`,
        pic: 'img/exam.jpg'
    },
    {
        title: 'Nutrition',
        slug: 'nutrition',
        head: `This is the nutrition page`,
        html: ` <p class="text-xl text-3xl mt-8 mb-16"><span class="text-main font-bold text-4xl"> Food is medicine. </span>   Proper eating can replenish and restore deficiencies while eliminating toxicities that lead to early degeneration.</p> <p class="text-xl text-3xl mt-8 mb-16">By using a combination of whole food supplements and healthy eating our patients progress toward <span class="text-main font-bold text-4xl"> optimum wellness</span>.</>    `,
        pic: 'img/sup.jpg'
    }
];

posts.forEach(post => {
    post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
