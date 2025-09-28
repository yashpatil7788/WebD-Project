const db = require('../db');

exports.addCustomer = (req, res) => {
  const { name, email, phone } = req.body;
  const sql = 'INSERT INTO customers (name, email, phone) VALUES (?, ?, ?)';
  db.query(sql, [name, email, phone], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Customer added successfully' });
  });
};

exports.getCustomers = (req, res) => {
  db.query('SELECT * FROM customers', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
