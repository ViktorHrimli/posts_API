"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var multer = require("multer");
var uuidv4_1 = require("uuidv4");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        var _a = file.originalname.split("."), extension = _a[1];
        cb(null, "".concat((0, uuidv4_1.uuid)(), ".").concat(extension));
    },
    limits: {
        fileSize: process.env.SIZE_UPLOAD_IMG,
    },
});
var upload = multer({ storage: storage });
exports.upload = upload;
