import { useEffect, useState } from 'react';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { clearCompletedTasks } from './store/taskSlice';
import { FilteredPanel } from './components/FilterPanel';
import moonIcon from './assets/icons/icon-moon.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks?.value || []);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  function filterTasks(status) {
    if (status === 'active') {
      setFilteredTasks(tasks.filter((task) => !task.completed));
    } else if (status === 'completed') {
      setFilteredTasks(tasks.filter((task) => task.completed));
    } else {
      setFilteredTasks(tasks);
    }
  }

  return (
    <>
      <header>
        <h1>TODO</h1>
        <div>
          <img src={moonIcon} alt="theme-img" />
        </div>
      </header>
      <TaskInput />
      <TaskList tasks={filteredTasks} setFilteredTasks={setFilteredTasks} />
      <FilteredPanel filter={filterTasks}/>
    </>
  );
}

export default App;
