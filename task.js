const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

const controller = new TaskController();

// Routes mapped to controller methods
router.post('/', (req, res) => controller.createTask(req, res));
router.get('/', (req, res) => controller.getAllTasks(req, res));
router.put('/:id', (req, res) => controller.updateTask(req, res));
router.delete('/:id', (req, res) => controller.deleteTask(req, res));

module.exports = router;
