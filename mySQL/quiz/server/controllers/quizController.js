const db = require('../db');

// Get all quiz questions
exports.getQuestions = (req, res) => {
    const sql = 'SELECT * FROM questions';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Failed to fetch questions:', err.message);
            return res.status(500).json({ error: 'Failed to fetch questions' });
        }
        res.json(results);
    });
};

// Submit an answer
exports.submitAnswer = (req, res) => {
    const { questionId, selectedOption } = req.body;

    const sql = 'SELECT correct_option FROM questions WHERE id = ?';
    db.query(sql, [questionId], (err, results) => {
        if (err) {
            console.error('Failed to fetch answer:', err.message);
            return res.status(500).json({ error: 'Failed to fetch answer' });
        }

        const correctOption = results[0].correct_option;
        const isCorrect = correctOption === selectedOption;

        res.json({ isCorrect });
    });
};