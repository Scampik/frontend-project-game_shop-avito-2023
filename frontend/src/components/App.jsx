import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import PageFooter from './mainPage/components/PageFooter.jsx';
import SearchBar from './navigation/SearchBar.tsx';
import LanguageSelector from './navigation/LngSelector.jsx';
import ThemeSelector from './navigation/ThemeSelector.jsx';
import AuthButtons from './navigation/AuthButtons.jsx';
import FreeGameList from './navigation/FreeGameList.jsx';
import UserMenu from './navigation/UserMenu.jsx';
import AppRoutes from './AppRoutes.jsx';

import routes from '../routes.js';
import { useAuth } from '../hooks/index.js';
import { actions as modalActions } from '../slices/modalSlice.js';
import loginImage from '../assets/logo.jpg';

const Inventory = () => {
  const auth = useAuth();
  return (
    auth.user
      ? <Nav.Link href={routes.privatePage()}>Inventory</Nav.Link>
      : <></>
  );
};

const App = () => {
  const { t } = useTranslation();
  const auth = useAuth();
  const dispatch = useDispatch();

  const handleInDevelopment = () => {
    dispatch(modalActions.openModal({ type: 'inDevelopment' }));
  };

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
                <Nav.Link onClick={handleInDevelopment}>Features</Nav.Link>
                <FreeGameList />
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
          <AppRoutes />
        </main>
        <PageFooter />
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;
