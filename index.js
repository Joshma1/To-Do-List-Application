import React, { useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import useTaskStore from '../state/taskStore';

const Home = () => {
    const { tasks, setTasks, addTask, updateTask, deleteTask } = useTaskStore();

    // Load tasks from the API on component mount
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await fetch('/api/tasks');
                const data = await res.json();
                setTasks(data);
            } catch (err) {
                console.error('Error fetching tasks:', err);
            }
        };

        fetchTasks();
    }, [setTasks]);

    const handleAddTask = async (task) => {
        try {
            const res = await fetch('/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task),
            });
            const newTask = await res.json();
            addTask(newTask);
        } catch (err) {
            console.error('Error adding task:', err);
        }
    };

    const handleUpdateTask = async (id, updatedFields) => {
        try {
            const res = await fetch(`/api/tasks?id=${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedFields),
            });
            const updatedTask = await res.json();
            updateTask(updatedTask);
        } catch (err) {
            console.error('Error updating task:', err);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await fetch(`/api/tasks?id=${id}`, { method: 'DELETE' });
            deleteTask(id);
        } catch (err) {
            console.error('Error deleting task:', err);
        }
    };

    return (
        <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>To-Do List</h1>
            <TaskForm onSubmit={handleAddTask} />
            <TaskList
                tasks={tasks}
                onUpdate={handleUpdateTask}
                onDelete={handleDeleteTask}
            />
        </main>
    );
};

export default Home;
