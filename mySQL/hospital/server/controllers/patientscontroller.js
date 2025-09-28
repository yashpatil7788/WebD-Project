const db = require('../db');

// Get all patients
exports.getAllPatients = (req, res) => {
    db.query('SELECT * FROM patients', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// Add a new patient
exports.addPatient = (req, res) => {
    const { name, age, gender, contact, medical_history } = req.body;
    const sql = 'INSERT INTO patients (name, age, gender, contact, medical_history) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, age, gender, contact, medical_history], (err, result) => {
        if (err) return res.status(