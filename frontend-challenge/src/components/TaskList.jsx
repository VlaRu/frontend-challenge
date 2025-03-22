import { useDispatch } from 'react-redux';
import { toggleTask } from '../store/taskSlice';

export function TaskList({ tasks }) {
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <li
            key={task.id}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
          </li>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </ul>
  );
}
