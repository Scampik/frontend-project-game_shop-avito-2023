import { Provider } from 'react-redux';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

import store from './slices/index';
import App from './components/App';
import AuthProvider from './context/AuthContext';
import { initI18next } from './initI18next.js';

const vdom = async () => {
  await initI18next();

  return (
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  );
};

export default vdom;
