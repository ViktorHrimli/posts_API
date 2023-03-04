const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const userShema = new Shema({
  user: {
    type: String,
  },

  tweets: {
    type: String,
  },

  followers: {
    type: String,
  },
  avatar: { type: String },
});

const Profile = mongoose.model("profile", userShema);

module.exports = { Profile };
