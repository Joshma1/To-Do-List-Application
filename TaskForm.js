import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [recurrence, setRecurrence] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, dueDate, recurrence });
        setTitle('');
        setDescription('');
        setDueDate('');
        setRecurrence('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxWidth: '400px',
                padding: '20px',
                backgroundColor: '#ffffff', // White box
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Light shadow
                color: '#333333', // Dark text
                margin: '20px auto'
            }}
        >
            <h2 style={{ textAlign: 'center', color: '#444' }}>Add a New Task</h2>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <select
                value={recurrence}
                onChange={(e) => setRecurrence(e.target.value)}
                style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            >
                <option value="">No Recurrence</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="custom">Custom</option>
            </select>
            <button
                type="submit"
                style={{
                    padding: '10px',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
