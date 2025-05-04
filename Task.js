const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Task extends Model {}
Task.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    recurrence: {
        type: DataTypes.STRING, // e.g., "daily", "weekly", "custom"
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Task',
});

module.exports = Task;