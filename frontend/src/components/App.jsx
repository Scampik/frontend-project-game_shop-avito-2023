import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  // Navigate,
  // Outlet,
  // useLocation,
} from 'react-router-dom';
import {
  Button, Navbar, Container, NavDropdown, Nav,
} from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { MoonStars, SunFill } from 'react-bootstrap-icons';

import PageFooter from './mainPage/components/PageFooter.jsx';
import LoginPage from './loginPage/Login';
import SignUpPage from './signUpPage/signUp';
import MainPage from './mainPage/MainPage';
import PageNotFound from './notFoundPage/PageNotFound.jsx';
import routes from '../routes.js';
import { useAuth } from '../context/AuthContext.jsx';
import loginImage from '../assets/logo.jpg';

const AuthButton = () => {
  // const { t } = useTranslation();
  const auth = useAuth();
  // const location = useLocation();

  return (
    auth.user
      ? <Button onClick={auth.logOut}>Log out</Button>
      : <Nav.Link href={routes.loginPage()}>Log in</Nav.Link>
  );
};

const SignUpButton = () => {
  const auth = useAuth();
  return (
    auth.user
      ? <></>
      : <Button as={Link} to={routes.signUpPage()} className="text-decoration-none">Join Free</Button>
  );
};

const Inventory = () => {
  const auth = useAuth();
  console.log(auth.user);
  return (
    auth.user
      ? <Nav.Link href={routes.loginPage()}>Inventory</Nav.Link>
      : <></>
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
            size={18}
            onClick={handleTheme}
          />
        ) : (
          <MoonStars
            size={18}
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
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to={routes.mainPage()} className="fs-4 fw-semibold mr-auto">
              <img
                src={loginImage}
                height={30}
                width={30}
                className="rounded-circle"
                alt={t('enter')}
              />
              {t('siteName')}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <NavDropdown title="Free Games" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">MMORPG</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Shooter
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">MOBA</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Free-To-Play-Games
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Browser Games" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Browser MMORPG</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Browser Shooter
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Browser MOBA</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Browser-Games
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#features">Top-2023</Nav.Link>
              </Nav>
              <Nav>
                <ThemeButton />
                <Inventory />
                <AuthButton />
                <SignUpButton />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main className="bg-body">
          <Routes>
            <Route path={routes.loginPage()} element={<LoginPage />} />
            <Route path={routes.mainPage()} element={<MainPage />} />
            <Route path={routes.notFoundPage()} element={<PageNotFound />} />
            <Route path={routes.signUpPage()} element={<SignUpPage />} />
          </Routes>
        </main>
        <PageFooter />
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;
