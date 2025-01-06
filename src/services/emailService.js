const transporter = require("../config/email");
require("dotenv").config();

const sendEmailService = async (to, subject, message) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: to,
    subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("Email service error:", error);
    throw new Error("Failed to send email");
  }
};

module.exports = { sendEmailService };
