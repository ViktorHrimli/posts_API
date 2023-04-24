"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var uniqid_1 = __importDefault(require("uniqid"));
var multer = require("multer");
var path = require("path");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "".concat(process.cwd(), "/src/uploads/"));
    },
    filename: function (req, file, cb) {
        var _a = file.originalname.split("."), extension = _a[1];
        cb(null, "".concat((0, uniqid_1.default)(), ".").concat(extension));
    },
});
var upload = multer({ storage: storage });
exports.upload = upload;
