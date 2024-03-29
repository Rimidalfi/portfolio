import * as nodemailer from "nodemailer";

const { VITE_EMAIL, VITE_EMAIL_PW } = import.meta.env;

const transporter = nodemailer.createTransport({
  host: "send.one.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: VITE_EMAIL,
    pass: VITE_EMAIL_PW,
  },
});

export default async function sendEmail() {
  console.log("BLA");
  const info = await transporter.sendMail({
    from: '"JANO Geschäftsanfrage" <inquiry@jano-creations.com>', // sender address
    to: "w.janowitsch@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello Brötha", // plain text body
    html: "<b>Hello Brötha</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
}

// sendMail().catch(console.error);
