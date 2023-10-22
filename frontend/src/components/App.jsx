import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import {
  Navbar, Container, NavDropdown, Nav,
} from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import PageFooter from './mainPage/components/PageFooter.jsx';
import PrivatePage from './privatePage/PrivatePage.jsx';
import LoginPage from './loginPage/Login';
import SignUpPage from './signUpPage/signUp';
import MainPage from './mainPage/MainPage';
import PageNotFound from './notFoundPage/PageNotFound.jsx';
import GamePage from './gamePage/GamePage.jsx';
import SearchBar from './navigation/SearchBar.jsx';
import LanguageSelector from './navigation/LngSelector.jsx';
import ThemeSelector from './navigation/ThemeSelector.jsx';
import AuthButtons from './navigation/AuthButtons.jsx';
import UserMenu from './navigation/UserMenu.jsx';
import routes from '../routes.js';
import { useAuth } from '../hooks/index.js';
import loginImage from '../assets/logo.jpg';

const Inventory = () => {
  const auth = useAuth();
  return (
    auth.user
      ? <Nav.Link href={routes.privatePage()}>Inventory</Nav.Link>
      : <></>
  );
};

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.user ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const App = () => {
  const { t } = useTranslation();
  const auth = useAuth();

  return (
    <Router>
      <div className="d-flex flex-column h-100 bg-body">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="bg-body-tertiary"
        >
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
                <Inventory />
              </Nav>
              <Nav className="flex-row flex-wrap ms-sm-auto align-items-center gap-2">
                <SearchBar />
                <LanguageSelector />
                <ThemeSelector />
                {auth.user ? <UserMenu /> : <AuthButtons />}
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
            <Route path={routes.gamePage()} element={<GamePage />} />
            <Route
              path={routes.privatePage()}
              element={(
                <PrivateRoute>
                  <PrivatePage />
                </PrivateRoute>
            )}
            />
          </Routes>
        </main>
        <PageFooter />
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;
