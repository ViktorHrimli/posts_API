import express, { Request } from "express";

// import axios from "axios";
import uniqid from "uniqid";

import { upload } from "../mailSendApi/storage";
import { uploadPhotoOnCloud } from "../mailSendApi/clodunari";
import { sendPulseSendMail } from "../mailSendApi/sendPulse";

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

router.post("/send", upload.single("photo"), async (req: IType, res, next) => {
  const { name, surname, email, phone } = req.body;

  if (!req.file) {
    res.status(400).json({ msg: "Filed" });
  } else {
    const url = await uploadPhotoOnCloud(req.file.path, uniqid().toString());

    // await axios
    //   .post(
    //     `https://api.elasticemail.com/v2/email/send?apikey=A0F18FD1F9C1B48C9EA88D64ED4B9F76F0EA620BF1E2BE560CF5630ED3DC08575A52C0E7FFE56DDF3AE4A893F675750C&bodyHtml=<html><body><h2>Contact Information</h2><p><strong>Name:</strong>${name}</p><p><strong>Surname:</strong> ${surname}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong>${phone}</p> <div><img src=${url} alt='photo' /> </div></body></html>&from=viktor_hrimli@meta.ua&to=viktorhrimli101@gmail.com`
    //   )
    //   .then((res) => console.log(res.data));

    await sendPulseSendMail(name, surname, email, phone, url);

    await fs
      .unlink(req.file.path)
      .then(console.log("file destroy"))
      .catch((e: any) => console.log(e.message));

    res.status(200).json({ name, surname, email, phone, url });
  }
});

module.exports = router;
