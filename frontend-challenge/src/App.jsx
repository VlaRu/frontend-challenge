import { createContext, useEffect, useState } from 'react';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { TaskToolbar } from './components/TaskToolbar';
import { Header } from './components/Header';
import './App.css';

export const ThemeContext = createContext('dark');

function App() {
  const tasks = useSelector((state) => state.tasks?.value || []);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [isActiveFilter, setActiveFilter] = useState('all');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  function toggleTheme() {
    setTheme((prev) => (prev === '' ? 'dark' : ''));
  }

  useEffect(() => {
    document.body.classList.remove('dark');
    if (theme === 'dark') {
      document.body.classList.add('dark');
    }
  }, [theme]);

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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="main-container">
        <Header />
        <main className={`main-content_container ${theme}`}>
          <TaskInput />
          <TaskList tasks={filteredTasks} setFilteredTasks={setFilteredTasks} />
          <TaskToolbar filter={filterTasks} active={isActiveFilter} />
        </main>
        <footer className="footer">Drag and drop to reorder list</footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
