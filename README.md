# Email Sending Service API Documentation

## API Endpoint

### HTTP Method: POST

### Request URL
```
https://ks-mailer.vercel.app/api/send
```

---

## Request Body
Send the following JSON payload in the body of your `POST` request:

```json
{
  "from": "sender@example.com",
  "to": "recipient@example.com",
  "subject": "Subject of the Email",
  "message": "This is the email body content."
}
```

---

## Response

### Success (200):
```json
{
  "isOK": true,
  "message": "Email sent successfully",
  "messageId": "<unique-message-id>"
}
```

### Validation Error (400):
```json
{
  "error": "Validation failed",
  "details": [
    "Invalid email address",
    "Subject cannot be empty"
  ]
}
```

### Server Error (500):
```json
{
  "isOK": false,
  "error": "Failed to send email"
}
```

### Invalid HTTP Method (405):
```json
{
  "error": "Method not allowed"
}
```

---

## HTML Email Template

The email body includes:

### Components:
1. **Header:** A stylized header displaying "KelySaina Service."
2. **Body:** Dynamic content with the sender's email and the provided message.
3. **Footer:** Contact information and a website link.

### Dynamic Variables:
- `from`: Displays the sender's email.
- `message`: Displays the user's input message.

---

## Testing the Endpoint

### cURL Command
Run the following `cURL` command to test the API:

```bash
curl -X POST https://ks-mailer.vercel.app/api/send \
-H "Content-Type: application/json" \
-d '{
  "from": "sender@example.com",
  "to": "recipient@example.com",
  "subject": "Hello from KelySaina",
  "message": "Thank you for using our service!"
}'
```

### Postman
1. Open Postman and create a new request.
2. Set the method to `POST`.
3. Use the API URL: `[https://your-deployment-url.com/api/send](https://ks-mailer.vercel.app/api/send)`.
4. Add the following headers:
   - `Content-Type`: `application/json`
5. Provide the request body in JSON format (as shown above).
