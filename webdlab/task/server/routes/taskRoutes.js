const express = require('express');
const { getTasks, addTask, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask);
router.put('/:id', updateTask); // Route for editing tasks
router.delete('/:id', deleteTask); // Route for deleting tasks

module.exports = router;