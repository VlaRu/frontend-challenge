import { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../store/taskSlice';
import { EditInput } from './EditInput';
import cross from '../assets/icons/icon-cross.svg';
import pencil from '../assets/icons/icon-pencil.png';
import save from '../assets/icons/save.png';
import '../styles/Input.css';

export function TaskList({ tasks, setFilteredTasks }) {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const [editingTaskId, setEditingTaskId] = useState(null);

  function handleDrop(index) {
    if (draggedItemIndex === null) return;
    const updateTasks = [...tasks];
    const [draggedItem] = updateTasks.splice(draggedItemIndex, 1);
    updateTasks.splice(index, 0, draggedItem);
    setFilteredTasks(updateTasks);
    setDraggedItemIndex(null);
  }

  function handleTouchMove(e) {
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (target && target.closest('li')) {
      const index = [...target.parentNode.children].indexOf(target);
      handleDrop(index);
    }
  }

  function handleEditText(id) {
    setEditingTaskId((prev) => (prev === id ? null : id));
  }

  return (
    <ul className={`list-container ${theme}`}>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <li
            className={
              `task ${task.completed ? "checked" : ""} ${theme} ${draggedItemIndex === index ? 'dragging' : ''}`
            }
            key={task.id}
            draggable
            onDragStart={() => setDraggedItemIndex(index)}
            onDragOver={(e)=> e.preventDefault()}
            onDrop={() => handleDrop(index)}
            onTouchStart={() => setDraggedItemIndex(index)}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setDraggedItemIndex(null)}
          >
            <input
              className="checkbox"
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            {editingTaskId === task.id ? (
              <EditInput id={task.id} value={task.text} />
            ):(
              <span
                className="task-text"
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.text}
              </span>
            )}
            <button
              className='delete-button edit-button'
              onClick={() => handleEditText(task.id)}>
               <img
                  className='delete-button_icon'
                  src={pencil}
                  alt="pencil"/>
            </button>
            <button
              className="delete-button"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              <img
                className="delete-button_icon"
                src={cross}
                alt="cross-icon"
              />
            </button>
          </li>
        ))
      ) : (
        <p style={{ color: 'var(--light-grayish-blue)' }}>No tasks available</p>
      )}
    </ul>
  );
}
