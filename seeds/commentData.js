const Comment = require("../models/Comment");

const commentdata = [
  {
    content: "Ahhhh!",
    user_id: 2,
    blog_id: 1
  },
  {
    content: "Look out!",
    user_id: 3,
    blog_id: 1
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;