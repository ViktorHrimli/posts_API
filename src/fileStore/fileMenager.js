const fs = require("fs/promises");
const path = require("path");

const dir = path.join(__dirname, "text.txt");
const data = "new filet";
const asyncWriteFile = async (path, data) => {
  return fs.writeFile(path, data);
};

const asyncAppendFile = async (path, data) => {
  return new Promise((resolve, rejects) => fs.appendFile(path, data));
};

asyncWriteFile(dir, data).then((res) => console.log(res));
