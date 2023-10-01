const router = require('express').Router();
const Blog = require('../../models/User');
const User = require('../../models/User')

router.get('/', (req, res) => {
    Blog.findAll({include: User})
        .then((data) => res.json(data))
})

module.exports = router;