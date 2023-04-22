"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger = require("morgan");
var cors = require("cors");
var path = require("path");
require("dotenv").config();
var usersRoute = require("./router/routes");
var app = (0, express_1.default)();
var formatLog = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatLog));
app.use(cors());
app.use(express_1.default.json());
var pathHTML = path.join(__dirname, "public");
app.use("/static", express_1.default.static("public"));
app.use("/api", usersRoute);
app.get("/", function (req, res, next) {
    res.status(200).json("Worked!!!");
});
module.exports = app;
