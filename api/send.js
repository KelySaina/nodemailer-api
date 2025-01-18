const nodemailer = require("nodemailer");
const { validateEmailPayload } = require("../utils/validators");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { from, to, subject, message } = req.body;

  // Validate the request payload
  const validation = validateEmailPayload(to, subject, message);
  if (!validation.isValid) {
    return res.status(400).json({
      error: "Validation failed",
      details: validation.errors,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlMessage = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Notification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border: 1px solid #e4e4e8;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background-color: #4a90e2;
      color: #ffffff;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .body {
      padding: 20px;
      color: #333333;
      line-height: 1.6;
    }
    .body p {
      margin: 0 0 10px;
    }
    .body .highlight {
      font-weight: bold;
      color: #000000;
    }
    .footer {
      background-color: #f4f4f9;
      text-align: center;
      padding: 10px;
      color: #888888;
      font-size: 12px;
    }
    .footer a {
      color: #4a90e2;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Notification</h1>
    </div>
    <div class="body">
      <p><span class="highlight">Sender:</span> <strong>${from}</strong></p>
      <p class="highlight">${message}</p>
    </div>
    <div class="footer">
      <p>© 2025 KelySaina Service. All rights reserved.</p>
      <p>For inquiries, contact us at <a href="mailto:kelysaina@gmail.com">contact KelySaina</a> or visit <a href="https://thierry-michael.vercel.app">our website</a>.</p>
    </div>
  </div>
</body>
</html>
`

    const mailOptions = {
      from: from,
      to: to,
      subject,
      html: htmlMessage,
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({
      isOK: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ isOK: false, error: "Failed to send email" });
  }
};
