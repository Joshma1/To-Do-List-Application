let tasks = []; // In-memory store (resets on server restart)
let nextId = 1; // Simple ID generator

export default function handler(req, res) {
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case 'GET': {
            if (id) {
                const task = tasks.find((t) => t.id === parseInt(id));
                if (!task) return res.status(404).json({ error: 'Task not found' });
                return res.status(200).json(task);
            }
            return res.status(200).json(tasks);
        }

        case 'POST': {
            const { title, description, dueDate, recurrence } = req.body;
            const newTask = {
                id: nextId++,
                title,
                description,
                dueDate,
                recurrence,
                completed: false,
            };
            tasks.push(newTask);
            return res.status(201).json(newTask);
        }

        case 'PUT': {
            if (!id) return res.status(400).json({ error: 'Task ID required' });

            const taskIndex = tasks.findIndex((t) => t.id === parseInt(id));
            if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });

            tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
            return res.status(200).json(tasks[taskIndex]);
        }

        case 'DELETE': {
            if (!id) return res.status(400).json({ error: 'Task ID required' });

            tasks = tasks.filter((t) => t.id !== parseInt(id));
            return res.status(204).end();
        }

        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}
