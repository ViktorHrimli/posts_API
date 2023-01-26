"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger = require("morgan");
var cors = require("cors");
require("dotenv").config();
var app = (0, express_1.default)();
var formatLog = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatLog));
app.use(cors());
app.use(express_1.default.json());
app.get("/", function (req, res, next) {
    res.status(200).json("Heolooooolo sunuvan bitch");
});
module.exports = app;
