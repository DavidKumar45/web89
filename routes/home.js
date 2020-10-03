const router = require('express').Router();
const axios = require('axios');

router.get('/', (req, res) => {
    const user = 'bradenn' /* No point in using a variable for a static username, but it's 'best practice' */
    axios.get(`https://api.github.com/users/${user}/repos`).then(docs => {
        let repos = docs.data
            .filter(doc => doc.description !== null && !doc.fork)
            .sort((a, b) => (b.updated_at > a.updated_at) ? 1 : -1) /* I truly hate this part of javascript */
            .splice(0, 8);
        repos.forEach(repo => {
            console.log(repo['commits_url'])
        });
        return res.render('home', {repos: repos})
    }).catch(err => {
        console.log(err)
        return res.render('home', {repos: [err]})
    })
})

module.exports = router;
