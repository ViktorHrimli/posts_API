"use strict";
var mongoose = require("mongoose");
var Shema = mongoose.Schema;
var userShema = new Shema({
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
var Profile = mongoose.model("profile", userShema);
module.exports = { Profile: Profile };
