const router = require("express").Router();
const { User, Blog } = require("../models/index");

// Get homepage
router.get("/", (req, res) => {
  Blog.findAll({ include: [User] }).then((data) => {
    const blogs = data.map((blog) => blog.get({ plain: true }));
    res.render("home", { blogs });
  });
});

// Get blog page
router.get("/blog/:id", (req, res) => {
  Blog.findOne({ include: [User], where: { id: req.params.id } }).then((data) => {
    const blog = data.get({plain: true})
    res.render('blog', blog)
  });
});

router.get("/dash", (req, res) => {
  res.render("dash");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
