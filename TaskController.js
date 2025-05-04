const Task = require('../models/Task');

class TaskController {
    // Get all tasks
    async getAllTasks(req, res) {
        try {
            const tasks = await Task.findAll();
            res.status(200).json(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            res.status(500).json({ message: 'Error fetching tasks', error: error.message });
        }
    }

    // Create a task
    async createTask(req, res) {
        try {
            const { title, description, dueDate, recurrence } = req.body;

            if (!title) {
                return res.status(400).json({ message: 'Title is required' });
            }

            const task = await Task.create({ title, description, dueDate, recurrence });
            res.status(201).json(task);
        } catch (error) {
            console.error('Error creating task:', error);
            res.status(500).json({ message: 'Error creating task', error: error.message });
        }
    }

    // Update a task
    async updateTask(req, res) {
        try {
            const task = await Task.findByPk(req.params.id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }

            await task.update(req.body);
            res.status(200).json({ message: 'Task updated successfully', task });
        } catch (error) {
            console.error('Error updating task:', error);
            res.status(500).json({ message: 'Error updating task', error: error.message });
        }
    }

    // Delete a task
    async deleteTask(req, res) {
        try {
            const task = await Task.findByPk(req.params.id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }

            await task.destroy();
            res.status(200).json({ message: 'Task deleted successfully' });
        } catch (error) {
            console.error('Error deleting task:', error);
            res.status(500).json({ message: 'Error deleting task', error: error.message });
        }
    }
}

module.exports = TaskController;
