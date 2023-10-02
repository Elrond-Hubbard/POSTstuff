const router = require("express").Router();
const { User, Blog, Comment } = require("../models/index");

// Get homepage
router.get("/", (req, res) => {
  Blog.findAll({ include: [User] }).then((data) => {
    const blogs = data.map((blog) => blog.get({ plain: true }));
    res.render("home", { blogs });
  });
});

// Get blog page
router.get("/blog/:id", (req, res) => {
  // Use Promise.all to execute both queries concurrently
  Promise.all([
    Blog.findOne({
      include: [User, Comment],
      where: { id: req.params.id },
    }),
    Comment.findAll({
      include: [User],
      where: { blog_id: req.params.id },
    }),
  ]).then(([blogData, commentsData]) => {
    const blog = blogData.get({ plain: true });
    const comments = commentsData.map((comment) =>
      comment.get({ plain: true })
    );
    res.render("blog", { blog, comments }); // Render the view with both data
  });
});

router.get("/dash", (req, res) => {
  res.render("dash");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
