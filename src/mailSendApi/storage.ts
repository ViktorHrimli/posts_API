import uniqid from "uniqid";

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, `${process.cwd()}src/uploads/`);
  },
  filename: (req: any, file: any, cb: any) => {
    const [, extension] = file.originalname.split(".");

    cb(null, `${uniqid()}.${extension}`);
  },
});

const upload = multer({ storage: storage });

export { upload };
