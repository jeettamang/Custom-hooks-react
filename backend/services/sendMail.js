import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.APP_GMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.APP_GMAIL,
    to: email,
    subject: "This is your verification email",
    html: ",<b>Verify your email</b>",
  };
  return transporter.sendMail(mailOptions);
};
