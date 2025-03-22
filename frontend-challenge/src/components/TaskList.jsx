import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../store/taskSlice';

export function TaskList({ tasks, setFilteredTasks }) {
  const dispatch = useDispatch();
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  function handleDragStart(indx) {
    setDraggedItemIndex(indx);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(index) {
    if (draggedItemIndex === null) return;
    const updateTasks = [...tasks];
    const [draggedItem] = updateTasks.splice(draggedItemIndex, 1);
    updateTasks.splice(index, 0, draggedItem);
    setFilteredTasks(updateTasks);
    setDraggedItemIndex(null);
  }

  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <li
            key={task.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
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
            <button onClick={() => dispatch(deleteTask(task.id))}>x</button>
          </li>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </ul>
  );
}
