const sequelize = require('../config/connection');
const seedUser = require('./userData.js');
const seedBlog = require('./blogData');

const seedAll = async () => {
    await sequelize.sync();
    await seedUser();
    await seedBlog();
    process.exit(0);
};

seedAll();