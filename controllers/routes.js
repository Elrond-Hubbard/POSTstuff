const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Homepage')
})

router.get('/dash', (req, res) => {
    res.send('Dashboard')
})

router.get('/login', (req, res) => {
    res.send('Login')
})

module.exports = router;