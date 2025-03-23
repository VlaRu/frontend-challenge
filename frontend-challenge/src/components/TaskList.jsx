import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../store/taskSlice';
import cross from '../assets/icons/icon-cross.svg';
import '../styles/Input.css'

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
    <ul className='list-container'>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <li
            className={task.completed ? "task checked" : "task"}
            key={task.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            <input
              className='checkbox'
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            <span
              className='task-text'
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <button className='delete-button' onClick={() => dispatch(deleteTask(task.id))}>
              <img className='delete-button_icon' src={cross} alt="cross-icon" />
            </button>
          </li>
        ))
      ) : (
        <p style={{color: 'var(--light-grayish-blue)'}}>No tasks available</p>
      )}
    </ul>
  );
}
