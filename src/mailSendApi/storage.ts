import uniqid from "uniqid";

const multer = require("multer");
const path = require("path");

const absolutePath = path.resolve("./uploads");

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, absolutePath);
  },
  filename: (req: any, file: any, cb: any) => {
    const [, extension] = file.originalname.split(".");

    cb(null, `${uniqid()}.${extension}`);
  },
});

const upload = multer({ storage: storage });

export { upload };
