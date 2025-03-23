import { useDispatch, useSelector } from 'react-redux';
import { clearCompletedTasks } from '../store/taskSlice';
import { FilteredPanel } from './FilterPanel';
import '../styles/Toolbar.css'

export function TaskToolbar({ filter, active}) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.tasks.count);

  return (
    <div className='toolbar-container'>
      <div>{count} items left</div>
      <FilteredPanel filter={filter} active={active}/>
      <button className='button-clear' onClick={() => dispatch(clearCompletedTasks())}>Clear Completed</button>
    </div>
  );
}