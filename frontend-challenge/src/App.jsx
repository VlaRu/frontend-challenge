import { TaskInput } from './components/TaskInput';
import moonIcon from './assets/icons/icon-moon.svg';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>TODO</h1>
        <div>
          <img src={moonIcon} alt="theme-img" />
        </div>
      </header>
      <TaskInput />
    </>
  );
}

export default App;
