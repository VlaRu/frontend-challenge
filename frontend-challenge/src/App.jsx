import { useEffect, useState } from 'react';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { TaskToolbar } from './components/TaskToolbar';
import { Header } from './components/Header';
import './App.css';

function App() {
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
      <Header/>
      <TaskInput/>
      <TaskList tasks={filteredTasks} setFilteredTasks={setFilteredTasks}/>
      <TaskToolbar filter={filterTasks}/>
    </>
  );
}

export default App;
