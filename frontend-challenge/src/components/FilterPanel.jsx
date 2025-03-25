import { useContext } from 'react';
import { ThemeContext } from '../App';
import '../styles/Toolbar.css';

export function FilteredPanel({ filter, active }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`filter-btn_container ${theme}`}>
      <button
        className={active === 'all' ? 'active' : ''}
        onClick={() => filter('all')}
      >
        All
      </button>
      <button
        className={active === 'active' ? 'active' : ''}
        onClick={() => filter('active')}
      >
        Active
      </button>
      <button
        className={active === 'completed' ? 'active' : ''}
        onClick={() => filter('completed')}
      >
        Completed
      </button>
    </div>
  );
}
