const router = require("express").Router();
const { User, Blog } = require("../../models/index");

// Get all blogs
router.get("/", (req, res) => {
  Blog.findAll({ include: [User] })
  .then((data) => res.json(data));
});

// Get one blog
router.get("/:id", (req, res) => {
  Blog.findOne({ include: [User], where: { id: req.params.id } })
  .then((data) => res.json(data)
  );
});

// Create new blog
router.post('/', (req, res) => {
  Blog.create(req.body)
  .then((data) => res.json(data))
})

module.exports = router;
