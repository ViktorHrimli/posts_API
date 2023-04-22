const multer = require("multer");
const path = require("path");
import { uuid } from "uuidv4";

const absolutePath = path.join("uploads");

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, absolutePath);
  },
  filename: (req: any, file: any, cb: any) => {
    const [, extension] = file.originalname.split(".");

    cb(null, `${uuid()}.${extension}`);
  },
  limits: {
    fileSize: process.env.SIZE_UPLOAD_IMG,
  },
});

const upload = multer({ storage: storage });

export { upload };
