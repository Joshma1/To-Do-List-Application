import { useState, useEffect }
from 'react';
import {getTasks} from '../utils/api';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = awaitgetTasks();
            setTasks(tasks);
        };
        fetchTasks();
    }, []);
    return tasks;
};
export default useTasks;