import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTaskText } from '../store/taskSlice';
import { ThemeContext } from '../App';
import '../styles/Tasks.css';
import '../styles/Input.css';

export function EditInput({value, id}){
  const [inputValue, setInputValue] = useState(value);
  const [placeholder, setPlaceholder] = useState(value);
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    dispatch(editTaskText({id: id, text: inputValue}));
  }

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('Create a new todo...');
  };
  return (
    <form onSubmit={handleSubmit} className='input-edit-form'>
      <input
        className={`input-text ${theme}`}
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </form>
  )
}