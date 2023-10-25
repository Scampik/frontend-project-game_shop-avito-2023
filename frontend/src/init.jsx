import { Provider } from 'react-redux';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

import store from './slices/index';
import App from './components/App';
import AuthProvider from './contexts/AuthContext';
import ModalWindow from './components/modals/index';
import { initI18next } from './initI18next.js';

const vdom = async () => {
  await initI18next();

  return (
    <Provider store={store}>
      <AuthProvider>
        <App />
        <ModalWindow />
      </AuthProvider>
    </Provider>
  );
};

export default vdom;
