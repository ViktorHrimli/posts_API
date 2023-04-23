const nodemailer = require("nodemailer");

const { UA_PASS, UA_USER } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: UA_USER,
    pass: UA_PASS,
  },
};

export const sendEmail = async (
  name: string,
  surname: string,
  email: string,
  phone: string,
  url: string
) => {
  const transporter = nodemailer.createTransport(config);

  const mailOptions = {
    from: UA_USER,
    to: "viktorhrimli101@gmail.com",
    subject: "Example HTML Email",
    html: `
    <html>
      <body>
        <h2>Contact Information</h2>

        <p><strong>Name:</strong>${name}</p>

        <p><strong>Surname:</strong> ${surname}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong>${phone}</p>

        <img src=${url} />

      </body>
    </html>
  `,
  };

  await transporter.sendMail(mailOptions);
};
