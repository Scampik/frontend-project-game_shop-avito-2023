/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const getAuthHeader = (userData) => {
  if (userData && userData.token) {
    return { Authorization: `Bearer ${userData.token}` };
  }
  return {};
};

export default AuthProvider;
