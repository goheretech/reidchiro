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
        html: `Proper musculoskeletal alignment and exercise are the  keys to moving correctly and strengthening the mind-body connection.`,
        pic: 'img/exam.jpg'
    },
    {
        title: 'Nutrition',
        slug: 'nutrition',
        head: `This is the nutrition page`,
        html: ` Food is medicine.  Proper eating can replenish and restore deficiencies while eliminating toxicities that lead to early degeneration.<br> By using a combination of whole food supplements and healthy eating our patients progress toward optimum wellness.</>    `,
        pic: 'img/sup.jpg'
    }
];

posts.forEach(post => {
    post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
