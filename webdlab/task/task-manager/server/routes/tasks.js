const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.post('/tasks', tasksController.addTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', tasksController.editTask);

module.exports = router;