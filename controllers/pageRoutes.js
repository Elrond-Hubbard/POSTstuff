const router = require("express").Router();
const { User, Blog } = require("../models/index");

router.get("/", (req, res) => {
  Blog.findAll({ include: [User] }).then((data) => {
    const blogs = data.map((blog) => blog.get({plain: true}))
    res.render("home", {blogs});
  });
});

router.get("/dash", (req, res) => {
  res.render("dash");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
