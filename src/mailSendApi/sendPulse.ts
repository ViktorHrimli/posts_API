const sendpulse = require("sendpulse-api");
const path = require("path");

import axios from "axios";

let TOKEN = "";

// axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;

const { API_USER_ID, API_SECRET } = process.env;

const TOKEN_STORAGE = path.resolve("src/tmp/");

const optionsAccesTokenRes: any = {
  grant_type: "client_credentials",
  client_id: API_USER_ID!,
  client_secret: API_SECRET!,
};

sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, function () {
  axios
    .post("https://api.sendpulse.com/oauth/access_token", optionsAccesTokenRes)
    .then((res) => (TOKEN = res.data.access_token));
});

const sendPulseSendMail = async (
  name: string,
  surname: string,
  email: string,
  phone: string,
  url: string
) => {
  const string = ` 
  <html>
      <body>
        <h2>Contact Information</h2>

        <p><strong>Name:</strong>${name}</p>

        <p><strong>Surname:</strong> ${surname}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong>${phone}</p>

        <img src=${url} alt='picture'/>

      </body>
    </html>`;

  const buffer = Buffer.from(string, "utf-8");
  const encodedString = buffer.toString("base64");

  // const emailOpt: any = {
  //   email: {
  //     html: encodedString,
  //     text: "New order",
  //     subject: "New costumer!",
  //     from: {
  //       name: "Sender",
  //       email: "ceo@yoyoteam.com.ua",
  //     },
  //     to: [
  //       {
  //         name: "Виктор",
  //         email: "viktorhrimli101@gmail.com",
  //       },
  //     ],
  //   },
  // };

  sendpulse.smtpSendMail((data: any) => console.log(data), {
    html: ` 
    <html>
      <body>

        <h2>Contact Information</h2>

        <p><strong>Name:</strong>${name}</p>

        <p><strong>Surname:</strong> ${surname}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong>${phone}</p>

        <img src=${url} alt='picture'/>

        <p><a href=${url} >Link picture </a> </p>

      </body>
    </html>`,
    text: "New order",
    subject: "New costumer!",
    from: {
      name: "Sender",
      email: "ceo@yoyoteam.com.ua",
    },
    to: [
      {
        name: "Виктор",
        email: "viktorhrimli101@gmail.com",
      },
      {
        name: "String World",
        email: "sales.stringworld@gmail.com",
      },
    ],
  });
};

export { sendPulseSendMail };
