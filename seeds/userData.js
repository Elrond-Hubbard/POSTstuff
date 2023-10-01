const User = require("../models/User");

const userdata = [
  {
    username: "dKleiner",
    password: "blackMesa",
  },
  {
    username: "eVance",
    password: "resonanceCascade",
  },
  {
    username: "bCalhoun",
    password: "beerIoweYa",
  }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
