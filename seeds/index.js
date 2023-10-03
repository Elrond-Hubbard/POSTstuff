const sequelize = require("../config/connection");
const seedUser = require("./userData.js");
const seedBlog = require("./blogData");
const seedComment = require("./commentData");

const seedAll = async () => {
  await sequelize.sync();
  await seedUser();
  await seedBlog();
  await seedComment();
  process.exit(0);
};

seedAll();
