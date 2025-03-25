import { useDispatch, useSelector } from 'react-redux';
import { clearCompletedTasks } from '../store/taskSlice';
import { FilteredPanel } from './FilterPanel';
import { ThemeContext } from '../App';
import '../styles/Toolbar.css'
import { useContext } from 'react';

export function TaskToolbar({ filter, active}) {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const count = useSelector((state) => state.tasks.count);

  return (
    <div className={`toolbar-container ${theme}`}>
      <div>{count} items left</div>
      <FilteredPanel filter={filter} active={active}/>
      <button className='button-clear' onClick={() => dispatch(clearCompletedTasks())}>Clear Completed</button>
    </div>
  );
}