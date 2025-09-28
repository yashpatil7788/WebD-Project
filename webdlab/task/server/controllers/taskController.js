const db = require('../db');

exports.getTasks = (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.addTask = (req, res) => {
  const { title, description } = req.body;
  db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: results.insertId, title, description });
  });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  db.query('UPDATE tasks SET title = ?, description = ? WHERE id = ?', [title, description, id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
};