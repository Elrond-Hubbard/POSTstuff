const router = require("express").Router();
const { User, Blog, Comment } = require("../../models/index");

// get all blogs
router.get("/", (req, res) => {
  Blog.findAll({ include: [User, Comment] }).then((data) => res.json(data));
});

// get comments for one blog
router.get("/:blog_id", (req, res) => {
  Comment.findAll({
    include: [User],
    where: { blog_id: req.params.blog_id },
  }).then((data) => res.json(data));
});

// Create new blog
router.post("/", (req, res) => {
  Blog.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.userId,
  }).then((data) => res.json(data));
});

module.exports = router;
