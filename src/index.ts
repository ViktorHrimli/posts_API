import express, { Express, Request, Response, NextFunction } from "express";
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app: Express = express();

const formatLog = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLog));
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json("Heolooooolo sunuvan bitch");
});

module.exports = app;
