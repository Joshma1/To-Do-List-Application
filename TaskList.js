//import { TaskList } from '../components/TaskList';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
    console.log('Tasks:', tasks);
    console.log('onUpdate:', onUpdate);
    console.log('onDelete:', onDelete);
    console.log(TaskList);  // This should log the component, not 'undefined'.


    if (!Array.isArray(tasks) || tasks.length === 0) {
        return <p>No tasks available</p>;
    }

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => onUpdate(task.id, { title: prompt('New title:', task.title) })}>
                        Edit
                    </button>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
export default TaskList;
