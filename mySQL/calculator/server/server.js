require('dotenv').config();
const express = require('express');
const cors = require('cors');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/calculator', calculatorRoutes);

// Serve frontend files
app.use(express.static('public'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});