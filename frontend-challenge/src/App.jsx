import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { useSelector, useDispatch } from 'react-redux';
import moonIcon from './assets/icons/icon-moon.svg';
import './App.css';

function App() {
  const tasks = useSelector((state) => state.tasks?.value || []);

  return (
    <>
      <header>
        <h1>TODO</h1>
        <div>
          <img src={moonIcon} alt="theme-img" />
        </div>
      </header>
      <TaskInput />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
