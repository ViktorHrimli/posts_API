const path = require("path");
const { Stream, pipeline } = require("node:stream");
const fs = require("node:fs");

const stream = new Stream();

pipeline(fs.createReadStream(path.resolve(__dirname, "text.txt")));

stream.on("data", (chunk) => {
  console.log(chunk);
});
