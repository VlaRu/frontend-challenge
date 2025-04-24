import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../store/taskSlice';
import { ThemeContext } from '../App';
import save from '../assets/icons/save.png';
import '../styles/Tasks.css';

export function TaskInput({setAlert}) {
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('Create a new todo...');
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    dispatch(addNewTask(inputValue));
    setInputValue('');
    setAlert(true);
  }

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('Create a new todo...');
  };

  return (
    <form className={`input-form ${theme}`} onSubmit={handleSubmit}>
      <div className="input-circle"></div>
      <input
        className={`input-text ${theme}`}
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <img src={save} alt="save" />
    </form>
  );
}
