const express = require('express');
const sequelize = require('./db');
const taskRoutes = require('./routes/task'); // Import task routes

const app = express();
const PORT = process.env.PORT || 3000;

// ========== Middleware ==========
app.use(express.json()); // Parse incoming JSON

// ========== Routes ==========
app.use('/tasks', taskRoutes); // Mount task routes at /tasks

// ========== Default Route ==========
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// ========== Sync Database & Start Server ==========
sequelize.sync({ alter: true })
    .then(() => {
        console.log(' Database synchronized');
        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Failed to sync database:', err.message);
        process.exit(1); // Exit if DB fails
    });
