// src/utils/validators.js

/**
 * Validates the payload for sending an email.
 *
 * @param {string} to - The recipient email address.
 * @param {string} subject - The email subject.
 * @param {string} message - The email message body.
 * @returns {Object} Validation result with `isValid` boolean and `errors` array.
 */
const validateEmailPayload = (to, subject, message) => {
  const errors = [];

  // Validate the 'to' field (email address)
  if (!to || typeof to !== "string" || !/\S+@\S+\.\S+/.test(to)) {
    errors.push("Valid recipient email is required");
  }

  // Validate the 'subject' field
  if (!subject || typeof subject !== "string") {
    errors.push("Subject is required and must be a string");
  }

  // Validate the 'message' field
  if (!message || typeof message !== "string") {
    errors.push("Message is required and must be a string");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

module.exports = { validateEmailPayload };
