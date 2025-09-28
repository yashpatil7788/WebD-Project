require('dotenv').config();
const express = require('express');
const cors = require('cors');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/quiz', quizRoutes);

// Serve frontend files
app.use(express.static('public'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});