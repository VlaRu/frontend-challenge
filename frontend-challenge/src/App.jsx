import { createContext, useEffect, useState } from 'react';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { TaskToolbar } from './components/TaskToolbar';
import { Header } from './components/Header';
import { Snackbar, Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import './App.css';
import { grey } from '@mui/material/colors';

export const ThemeContext = createContext('dark');

function App() {
  const tasks = useSelector((state) => state.tasks?.value || []);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [isActiveFilter, setActiveFilter] = useState('all');
  const [alert, setAlert] = useState(false);
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
          <TaskInput setAlert={setAlert}/>
          <TaskList tasks={filteredTasks} setFilteredTasks={setFilteredTasks} />
          <TaskToolbar filter={filterTasks} active={isActiveFilter} />
          <Snackbar
            open={alert}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            onClose={() => setAlert(false)}
          >
            <Alert
              icon={<CheckIcon fontSize="inherit" />}
              variant="filled"
              sx={{
                width: '100%',
                backgroundColor: grey[900],
                color: 'white'
              }}
              onClose={() => setAlert(false)}>
              Task added successfully
            </Alert>
          </Snackbar>
        </main>
        <footer className="footer">Drag and drop to reorder list</footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
