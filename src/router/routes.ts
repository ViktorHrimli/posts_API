import express, { Express } from "express";

const { Profile } = require("../modle/model");

const router = express.Router();

router.get("/users", async (req, res, next) => {
  const users = await Profile.find({});

  res.json(users);
});

module.exports = router;
