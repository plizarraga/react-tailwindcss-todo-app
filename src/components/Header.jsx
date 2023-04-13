import React, { useEffect, useState } from 'react';
import { IconMoon, IconSun } from './icons';

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-6 pt-11 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold uppercase tracking-[0.5em] text-white">
          Todo
        </h1>
        <button type="button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
