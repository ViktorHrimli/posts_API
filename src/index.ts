import express, { Express, Request, Response, NextFunction } from "express";
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app: Express = express();

const formatLog = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLog));
app.use(cors());
app.use(express.json());

const pathHTML = path.join(__dirname, "public");
console.log(pathHTML);

app.use("/static", express.static("public"));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json("Worked!!!");
});

module.exports = app;
