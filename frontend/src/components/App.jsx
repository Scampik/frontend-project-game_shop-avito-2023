import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  // Navigate,
  // Outlet,
  useLocation,
} from 'react-router-dom';
import { Button, Navbar, Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { MoonStars, SunFill } from 'react-bootstrap-icons';

import PageFooter from './mainPage/components/PageFooter.jsx';
import LoginPage from './loginPage/Login';
import MainPage from './mainPage/MainPage';
import PageNotFound from './notFoundPage/PageNotFound.jsx';
import routes from '../routes.js';
import { useAuth } from '../context/AuthContext.jsx';
import loginImage from '../assets/register.jpg';

const AuthButton = () => {
  // const { t } = useTranslation();
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.user
      ? <Button onClick={auth.logOut}>Log out</Button>
      : <Button as={Link} to="/login" state={{ from: location }}>Log in</Button>
  );
};

const ThemeButton = () => {
  const [theme, setTheme] = useState('dark');
  const handleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  useEffect(() => {
    const body = document.querySelector('body');
    body.removeAttribute('data-bs-theme');
    body.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <div className="m-2 ps-3 pe-3">
      { theme === 'light'
        ? (
          <SunFill
            size={20}
            onClick={handleTheme}
          />
        ) : (
          <MoonStars
            size={20}
            onClick={handleTheme}
          />
        )}
    </div>
  );
};

const App = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="d-flex flex-column h-100 bg-body">
        <Navbar className="shadow-sm bg-body-tertiary justify-content-between" expand="lg">
          <Container className="pe-0 me-0">
            <Navbar.Brand as={Link} to={routes.mainPage()} className="fs-4 fw-semibold mr-auto">
              {t('siteName')}
              <img
                src={loginImage}
                height={20}
                width={20}
                className="rounded-circle"
                alt={t('enter')}
              />
            </Navbar.Brand>
            <AuthButton />
          </Container>
          <ThemeButton />
        </Navbar>
        <main className="bg-body">
          <Routes>
            <Route path={routes.loginPage()} element={<LoginPage />} />
            <Route path={routes.mainPage()} element={<MainPage />} />
            <Route path={routes.notFoundPage()} element={<PageNotFound />} />
          </Routes>
        </main>
        <PageFooter />
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;
