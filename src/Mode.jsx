import React, { useEffect, useState } from 'react';

const lightTheme = {
  '--card-bg': 'rgba(255, 255, 255, 0.7)',
  '--nav-bg': 'rgba(255, 255, 255, 0.8)',
  '--bag': '#f9f9f9',
  '--font-color': '#111',
  '--primary-color': '#000',
  '--border': '1px solid rgba(0, 0, 0, 0.1)',
  '--boxshadow': 'inset 0 5px 200px rgba(0, 0, 0, 0.08)',
  '--total':'white',
};

const darkTheme = {
  '--card-bg': 'rgba(36, 36, 36, 0.372)',
  '--nav-bg': 'rgba(0, 0, 0, 0.6)',
  '--bag': 'black',
  '--font-color': 'white',
  '--primary-color': 'white',
  '--border': '1px solid rgba(255, 255, 255, 0.25)',
  '--boxshadow': 'inset 0 5px 200px rgba(255, 255, 255, 0.08)',
  '--total':'none',
};

const applyTheme = (themeObj) => {
  for (let key in themeObj) {
    document.documentElement.style.setProperty(key, themeObj[key]);
  }
};

const Mode = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = systemPrefersDark ? darkTheme : lightTheme;
    applyTheme(defaultTheme);
    setIsDark(systemPrefersDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? lightTheme : darkTheme;
    applyTheme(newTheme);
    setIsDark(!isDark);
  };

  return (
    <div onClick={toggleTheme} style={{
      textAlign: 'center',
      backgroundColor: 'transparent',
      color: 'var(--font-color)',
      cursor: 'pointer',
      transition: 'var(--transition-duration)'
    }}>
        <a className= {isDark ? 'fa-regular fa-sun' : 'fa-regular fa-moon'} ></a>
     
    </div>
  );
};

export default Mode;
