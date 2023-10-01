const Blog = require("../models/Blog");

const blogdata = [
  {
    title: "Uniform Policy",
    content: "Why do we have to wear these ridiculous ties?",
    user_id: 1,
  },
  {
    title: "Sample Delivered to Test Chamber",
    content: "If you follow standard insertion procedures, everything will be fine.",
    user_id: 1
  },
  {
    title: "Project Update",
    content: "We've boosted the Anti-Mass Spectrometer to 105 percent. Bit of a gamble, but we need the extra resolution.",
    user_id: 2
  },
  {
    title: "About that beer I owe ya!",
    content: "Sorry for the scare. I had to put on a show for the cameras.",
    user_id: 3
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
