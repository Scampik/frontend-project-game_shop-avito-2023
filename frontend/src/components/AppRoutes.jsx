import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import PrivatePage from './privatePage/PrivatePage.jsx';
import LoginPage from './loginPage/Login';
import SignUpPage from './signUpPage/signUp';
import MainPage from './mainPage/MainPage';
import PageNotFound from './notFoundPage/PageNotFound.jsx';
import GamePage from './gamePage/GamePage.jsx';
import ScrollToTop from '../utils/scrollToTop.js';
import FilterPage from './filterGamePage/FilterPage.jsx';

import routes from '../routes.js';
import { useAuth } from '../hooks/index.js';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.user ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path={routes.loginPage()} element={<LoginPage />} />
      <Route path={routes.mainPage()} element={<MainPage />} />
      <Route path={routes.notFoundPage()} element={<PageNotFound />} />
      <Route path={routes.signUpPage()} element={<SignUpPage />} />
      <Route path={routes.gamePage()} element={<GamePage />} />
      <Route path={routes.filterGamePage()} element={<FilterPage />} />
      <Route
        path={routes.privatePage()}
        element={(
          <PrivateRoute>
            <PrivatePage />
          </PrivateRoute>
            )}
      />
    </Routes>
  </>
);

export default AppRoutes;
