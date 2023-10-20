import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext.jsx';
import useLanguage from './useLng.js';

const useAuth = () => useContext(AuthContext);

export { useAuth, useLanguage };
