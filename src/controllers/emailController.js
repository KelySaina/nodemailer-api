const { sendEmailService } = require("../services/emailService");
const { validateEmailPayload } = require("../utils/validators");

const sendEmail = async (req, res) => {
  const { to, subject, message } = req.body;

  // Validate input
  const validation = validateEmailPayload(to, subject, message);
  if (!validation.isValid) {
    return res.status(400).json({
      error: "Validation failed",
      details: validation.errors,
    });
  }

  try {
    const result = await sendEmailService(to, subject, message);
    res.status(200).json({
      message: "Email sent successfully",
      messageId: result.messageId,
    });
  } catch (error) {
    console.error("Controller error:", error);
    res.status(500).json({
      error: "Failed to send email",
      message: error.message,
    });
  }
};

module.exports = { sendEmail };
