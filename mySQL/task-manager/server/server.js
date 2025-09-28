const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', customerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
