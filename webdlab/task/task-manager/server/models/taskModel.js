const db = require('../db');

const addTask = (task, callback) => {
  const query = 'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)';
  db.query(query, [task.title, task.description, task.status], (err, results) => {
    if (err) return callback(err);
    callback(null, results.insertId);
  });
};

const getTasks = (callback) => {
  const query = 'SELECT * FROM tasks';
  db.query(query, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

const editTask = (id, updatedTask, callback) => {
  const query = 'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?';
  db.query(query, [updatedTask.title, updatedTask.description, updatedTask.status, id], (err, results) => {
    if (err) return callback(err);
    callback(null, results.affectedRows);
  });
};

const deleteTask = (id, callback) => {
  const query = 'DELETE FROM tasks WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results.affectedRows);
  });
};

module.exports = {
  addTask,
  getTasks,
  editTask,
  deleteTask
};