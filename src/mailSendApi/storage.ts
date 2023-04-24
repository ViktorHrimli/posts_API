import uniqid from "uniqid";

const multer = require("multer");
const path = require("path");

const abs = path.resolve("src/uploads/");

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, abs);
  },
  filename: (req: any, file: any, cb: any) => {
    const [, extension] = file.originalname.split(".");

    cb(null, `${uniqid()}.${extension}`);
  },
});

const upload = multer({ storage: storage });

export { upload };
