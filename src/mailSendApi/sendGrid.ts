const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async (
  name: string,
  surname: string,
  email: string,
  phone: string,
  url: string
) => {
  const msg = {
    from: "viktorhrimli101@gmail.com",
    to: "viktor_hrimli@meta.ua",
    subject: "Sending with SendGrid is Fun",
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

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error: any) => {
      console.error(error);
    });
};
