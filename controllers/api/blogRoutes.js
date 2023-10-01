const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('apiBlog')
})

module.exports = router;