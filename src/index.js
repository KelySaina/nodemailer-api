const express = require('express');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/email', emailRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});