import express, { Express, Request, Response, NextFunction } from "express";

import { sendEmail } from "../mailSendApi/sendMail";
import { upload } from "../mailSendApi/storage";
import { uploadPhotoOnCloud } from "../mailSendApi/clodunari";

const fs = require("fs/promises");
const { Profile } = require("../modle/model");

const router = express.Router();

router.get("/users", async (req, res, next) => {
  const users = await Profile.find({});

  res.json(users);
});

interface IType extends Request {
  file?: any;
}

router.post(
  "/sendMail",
  upload.single("photo"),
  async (req: IType, res, next) => {
    const { name, surname, email, phone } = req.body;
    res.send({ body: req.body, photo: req.file });

    if (!req.file) {
      res.status(400).json({ msg: "Filed" });
    }
    {
      const url = await uploadPhotoOnCloud(req.file.path);

      await sendEmail(name, surname, email, phone, url);

      await fs
        .unlink(req.file.path)
        .then(console.log("file destroy"))
        .catch((e: any) => console.log(e.message));
    }
  }
);

module.exports = router;
