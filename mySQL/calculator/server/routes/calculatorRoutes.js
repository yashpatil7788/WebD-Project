const express = require('express');
const { calculate } = require('../controllers/calculatorController');
const router = express.Router();

router.post('/', calculate);

module.exports = router;