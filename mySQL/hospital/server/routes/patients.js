const express = require('express');
const { getAllPatients, addPatient, updatePatient, deletePatient } = require('../controllers/patientsController');
const router = express.Router();

router.get('/', getAllPatients);
router.post('/', addPatient);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

module.exports = router;