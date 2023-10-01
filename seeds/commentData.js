const Comment = require("../models/Comment");

const commentdata = [
  {
    content: "The Administrator is very concerned that we get a conclusive analysis of today's sample.",
    user_id: 2,
    blog_id: 1
  },
  {
    content: "Alright...",
    user_id: 1,
    blog_id: 1
  },
  {
    content: "Yes, this all looks nominal.",
    user_id: 2,
    blog_id: 2
  },
  {
    content: "I am rather looking forward to this analysis, aren't you?",
    user_id: 1,
    blog_id: 2
  },
  {
    content: "It's not shutting down!",
    user_id: 1,
    blog_id: 3
  },
  {
    content: "Look out!",
    user_id: 3,
    blog_id: 3
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;