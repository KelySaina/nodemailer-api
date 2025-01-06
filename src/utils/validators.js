const validateEmailPayload = (subject, message) => {
  const errors = [];
  
  if (!subject || typeof subject !== 'string') {
    errors.push('Subject is required and must be a string');
  }
  
  if (!message || typeof message !== 'string') {
    errors.push('Message is required and must be a string');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

module.exports = { validateEmailPayload };