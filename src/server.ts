import { Express } from "express";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.set("strictQuery", true);

const app: Express = require("./index");

const { PORT, DB } = process.env;

mongoose
  .connect(DB)
  .then(() => {
    app.listen(PORT || 3001, () => {
      console.log("Server running. Use our API on port: 3000");
    });
    console.log("Database connection successful");
  })
  .catch((error: any) => {
    console.log(error.message);
    process.exit(1);
  });
