const router = require("express").Router();
const { User, Blog } = require("../../models/index");

// Create new blog
router.post('/', (req, res) => {
  Blog.create(req.body)
  .then((data) => res.json(data))
})

module.exports = router;
