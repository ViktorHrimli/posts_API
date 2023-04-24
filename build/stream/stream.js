"use strict";
var path = require("path");
var _a = require("node:stream"), Stream = _a.Stream, pipeline = _a.pipeline;
var fs = require("node:fs");
var stream = new Stream();
pipeline(fs.createReadStream(path.resolve(__dirname, "text.txt")));
stream.on("data", function (chunk) {
    console.log(chunk);
});
