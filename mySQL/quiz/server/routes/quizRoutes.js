const express = require('express');
const { getQuestions, submitAnswer } = require('../controllers/quizController');
const router = express.Router();

router.get('/questions', getQuestions);
router.post('/submit', submitAnswer);

module.exports = router;