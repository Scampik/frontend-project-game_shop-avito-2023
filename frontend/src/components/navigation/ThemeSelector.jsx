import React, { useState, useEffect } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { MoonFill, SunFill } from 'react-bootstrap-icons';

const ThemeButton = () => {
  const [theme, setTheme] = useState('dark');
  const handleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  useEffect(() => {
    const body = document.querySelector('body');
    body.removeAttribute('data-bs-theme');
    body.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <Dropdown align="end" as="li" className="nav-item">
      <Dropdown
        as={Button}
        className="d-flex py-2 px-0 px-lg-2 align-items-center nav-link"
        variant="link"
      >
        {theme === 'light' ? (
          <SunFill onClick={handleTheme} />
        ) : (
          <MoonFill onClick={handleTheme} />
        )}
      </Dropdown>
    </Dropdown>
  );
};

export default ThemeButton;
