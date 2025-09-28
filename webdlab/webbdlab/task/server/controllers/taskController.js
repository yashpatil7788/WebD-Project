const db = require('../db');

exports.getAllTasks = (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.createTask = (req, res) => {
  const { title } = req.body;
  db.query('INSERT INTO tasks (title) VALUES (?)', [title], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, title });
  });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  db.query('UPDATE tasks SET title = ? WHERE id = ?', [title, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id, title });
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Task deleted' });
  });
};
