const router = require('express').Router();
const User = require('../../models/User')
const Blog = require('../../models/Blog')

router.get('/', async (req, res) => {
    const userData = await User.findAll();
    res.json(userData)
})

router.get('/login', (req, res) => {
    res.send('apiLogin')
})

router.get('/logout', (req, res) => {
    res.send('apiLogout')
})

module.exports = router;