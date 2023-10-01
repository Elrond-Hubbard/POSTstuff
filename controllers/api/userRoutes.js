const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('apiUsers')
})

router.get('/login', (req, res) => {
    res.send('apiLogin')
})

router.get('/logout', (req, res) => {
    res.send('apiLogout')
})

module.exports = router;