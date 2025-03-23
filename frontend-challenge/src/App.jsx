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
  const [isActiveFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  function filterTasks(status) {
    setActiveFilter(status);

    if (status === 'active') {
      setFilteredTasks(tasks.filter((task) => !task.completed));
    } else if (status === 'completed') {
      setFilteredTasks(tasks.filter((task) => task.completed));
    } else {
      setFilteredTasks(tasks);
    }
  }

  return (
    <div className='main-container'>
      <Header/>
      <main className='main-content_container'>
        <TaskInput/>
        <TaskList tasks={filteredTasks} setFilteredTasks={setFilteredTasks}/>
        <TaskToolbar filter={filterTasks} active={isActiveFilter}/>
      </main>
      <footer className='footer'>Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
