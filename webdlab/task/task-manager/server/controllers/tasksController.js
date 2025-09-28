const db = require('../db');

// Add a new task
const addTask = (req, res) => {
  const { title, description } = req.body;
  const query = 'INSERT INTO tasks (title, description) VALUES (?, ?)';
  
  db.query(query, [title, description], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, title, description });
  });
};

// Delete a task
const deleteTask = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM tasks WHERE id = ?';
  
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(204).send();
  });
};

// Edit a task
const editTask = (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const query = 'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?';
  
  db.query(query, [title, description, status, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ id, title, description, status });
  });
};

module.exports = {
  addTask,
  deleteTask,
  editTask
};