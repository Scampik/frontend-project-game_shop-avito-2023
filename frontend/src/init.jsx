import { Provider } from 'react-redux';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import React from 'react';
import filter from 'leo-profanity';
import 'react-toastify/dist/ReactToastify.css';

import store from './slices/index';
import App from './components/App';
import AuthProvider from './context/AuthContext';
import resources from './locales/index.js';

const init = async () => {
  const i18n = i18next.createInstance();

  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'ru',
    });

  const ruDict = filter.getDictionary('ru');
  const engDict = filter.getDictionary('en');
  filter.add(ruDict);
  filter.add(engDict);

  return (
    <Provider store={store}>
      <AuthProvider>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </AuthProvider>
    </Provider>
  );
};

export default init;
