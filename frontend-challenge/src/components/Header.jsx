import { useContext } from 'react';
import { ThemeContext } from '../App'
import moonIcon from '../assets/icons/icon-moon.svg';
import sunIcon from '../assets/icons/icon-sun.svg';
import '../styles/Header.css'

export function Header() {
  const { theme, toggleTheme} = useContext(ThemeContext);

  return (
    <header className='header-container'>
      <h1>TODO</h1>
      <div onClick={toggleTheme}>
        <img
          className='theme-icon'
          src={theme === '' ? moonIcon : sunIcon}
          alt="theme-img"/>
      </div>
    </header>
  )
}