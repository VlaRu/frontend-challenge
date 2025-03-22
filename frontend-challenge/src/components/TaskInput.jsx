import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../store/taskSlice';

export function TaskInput() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    dispatch(addNewTask(inputValue));
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
    </form>
  );
}
