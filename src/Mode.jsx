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
'--button-c':'#f0f0f0',
'--button-t':'#242424',
'--button-ts':'0 0.0625em 0 #fff',
'--button-bs':'inset 0 0.0625em 0 0 #f4f4f4, 0 0.0625em 0 0 #efefef,0 0.125em 0 0 #ececec, 0 0.25em 0 0 #e0e0e0, 0 0.3125em 0 0 #dedede,0 0.375em 0 0 #dcdcdc, 0 0.425em 0 0 #cacaca, 0 0.425em 0.5em 0 #cecece',
'--button-abc':'inset 0 0.03em 0 0 #f4f4f4, 0 0.03em 0 0 #efefef,0 0.0625em 0 0 #ececec, 0 0.125em 0 0 #e0e0e0, 0 0.125em 0 0 #dedede,0 0.2em 0 0 #dcdcdc, 0 0.225em 0 0 #cacaca, 0 0.225em 0.375em 0 #cecece',
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
  '--button-c':'#2a2a2a',
'--button-t':'#e0e0e0',
'--button-ts':'0 0.0625em 0 #000',
'--button-bs':'inset 0 0.0625em 0 0 #3a3a3a,0 0.0625em 0 0 #252525,0 0.125em 0 0 #202020,0 0.25em 0 0 #1c1c1c,0 0.3125em 0 0 #181818,0 0.375em 0 0 #141414,0 0.425em 0 0 #101010,0 0.425em 0.5em 0 #0a0a0a',
'--button-abc':'inset 0 0.03em 0 0 #3a3a3a,0 0.03em 0 0 #252525,0 0.0625em 0 0 #202020,0 0.125em 0 0 #1c1c1c,0 0.125em 0 0 #181818,0 0.2em 0 0 #141414,0 0.225em 0 0 #101010,0 0.225em 0.375em 0 #0a0a0a',
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
