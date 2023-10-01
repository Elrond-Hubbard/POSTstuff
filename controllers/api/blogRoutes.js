const router = require('express').Router();
const {User, Blog} = require('../../models/index');

router.get('/', (req, res) => {
    Blog.findAll({include: [User]})
        .then((data) => res.json(data))
})

module.exports = router;