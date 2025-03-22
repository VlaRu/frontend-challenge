import { useDispatch, useSelector } from 'react-redux';
import { clearCompletedTasks } from '../store/taskSlice';
import { FilteredPanel } from './FilterPanel';

export function TaskToolbar({ filter }) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.tasks.count);

  return (
    <>
      <div>{count} items left</div>
      <FilteredPanel filter={filter} />
      <button onClick={() => dispatch(clearCompletedTasks())}>Clear Completed</button>
    </>
  );
}