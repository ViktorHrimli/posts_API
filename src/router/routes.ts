import express, { Request } from "express";

// import axios from "axios";
import uniqid from "uniqid";

import { upload } from "../mailSendApi/storage";
import { uploadPhotoOnCloud } from "../mailSendApi/clodunari";
import {
  sendPulseSendInfo,
  sendPulseSendPhoto,
} from "../mailSendApi/sendPulse";

const fs = require("fs/promises");
const { Profile } = require("../modle/model");

const router = express.Router();

// const { API_USER_ID, API_SECRET } = process.env;

interface IType extends Request {
  file?: any;
}

router.get("/users", async (req, res, next) => {
  const users = await Profile.find({});

  res.json(users);
});

router.post("/sendinfo", async (req, res, next) => {
  const { name = "", email = "", message = "" } = req.body;
  try {
    await sendPulseSendInfo({ name, email, message });
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ msg: "Filed" });
  }
});

router.post(
  "/sendphoto",
  upload.single("photo"),
  async (req: IType, res, next) => {
    if (!req.file) {
      res.status(400).json({ msg: "Filed" });
    } else {
      const url = await uploadPhotoOnCloud(req.file.path, uniqid().toString());

      await sendPulseSendPhoto(url);

      await fs
        .unlink(req.file.path)
        .then(console.log("file destroy"))
        .catch((e: any) => console.log(e.message));

      res.status(200).json({ url });
    }
  }
);

module.exports = router;
