API Endpoint
HTTP Method: POST
Request URL
https://your-deployment-url.com/api/send

Request Body
Send the following JSON payload in the body of your POST request:

json
Copy
Edit
{
  "from": "sender@example.com",
  "to": "recipient@example.com",
  "subject": "Subject of the Email",
  "message": "This is the email body content."
}
Response
Success (200):

json
Copy
Edit
{
  "isOK": true,
  "message": "Email sent successfully",
  "messageId": "<unique-message-id>"
}
Validation Error (400):

json
Copy
Edit
{
  "error": "Validation failed",
  "details": [
    "Invalid email address",
    "Subject cannot be empty"
  ]
}
Server Error (500):

json
Copy
Edit
{
  "isOK": false,
  "error": "Failed to send email"
}
Invalid HTTP Method (405):

json
Copy
Edit
{
  "error": "Method not allowed"
}
HTML Email Template
The email body includes:

Header: A stylized header displaying "KelySaina Service."
Body: Dynamic content with the sender's email and the provided message.
Footer: Contact information and a website link.
Dynamic Variables
${from}: Displays the sender's email.
${message}: Displays the user's input message.
Testing the Endpoint
cURL Command
Run the following cURL command to test the API:

bash
Copy
Edit
curl -X POST https://your-deployment-url.com/api/send-email \
-H "Content-Type: application/json" \
-d '{
  "from": "sender@example.com",
  "to": "recipient@example.com",
  "subject": "Hello from KelySaina",
  "message": "Thank you for using our service!"
}'
Postman
Open Postman and create a new request.
Set the method to POST.
Use the API URL: https://your-deployment-url.com/api/send-email.
Add the following headers:
Content-Type: application/json
Provide the request body in JSON format (as shown above).
