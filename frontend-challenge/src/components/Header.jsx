import { useState } from 'react';
import moonIcon from '../assets/icons/icon-moon.svg';
import sunIcon from '../assets/icons/icon-sun.svg';

export function Header() {
  const [iconTheme, setIconTheme] = useState(moonIcon)

  function handleThemeIcon() {
    setIconTheme((prevTheme) => (prevTheme === moonIcon ? sunIcon : moonIcon))
  }
  return (
    <header>
      <h1>TODO</h1>
      <div onClick={handleThemeIcon}>
        <img src={iconTheme} alt="theme-img"/>
      </div>
    </header>
  )
}