import PropTypes from 'prop-types';
import { useMemo, useState, useEffect, useContext, useCallback, createContext, useReducer } from 'react';
// firebase
import { auth, db } from 'src/lib/createFirebaseApp';

import { useAuthState } from 'react-firebase-hooks/auth';
// import { connectAuthEmulator } from 'firebase/auth';

//
import { onValue, ref } from 'firebase/database';
import { defaultSettings } from './config-setting';
import reducer from './reducer';

// ----------------------------------------------------------------------
// if (process.env.NODE_ENV_T === 'development') {
//   connectAuthEmulator(auth, 'http://127.0.0.1:9099');
// }

// console.log(db, auth);
const initialState = {
  // reducer
  alert: { open: false, severity: 'info', message: '', variant: 'filled', color: '', duration: 1000 },
  modal: { open: false, title: '', content: '' },
  loadingSpinner: false,
  // themeMode, themeDirection etc..
  ...defaultSettings,
  // toggle Mode
  onToggleMode: () => {},
  // Global state vars
};

// ----------------------------------------------------------------------

export const SettingsContext = createContext(initialState);

// context settings hook
export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) throw new Error('useSettingsContext must be used inside SettingsProvider');

  return context;
};

// ----------------------------------------------------------------------

export function SettingsProvider({ children }) {
  // const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const [themeMode, setThemeMode] = useState(initialState.themeMode);
  const [productsTable, setProductsTable] = useState([]);
  const [client, setClient] = useState([]);
  const [custId, setCustId] = useState('');
  const [avatar, setAvatar] = useState('');

  const [user, loading, error] = useAuthState(auth);

  const host = process.env.NODE_ENV === 'development' ? 'https://192.168.0.220:3001' : 'https://tranceformd.com';

  useEffect(() => {
    const purchaseRef = ref(db, 'purchases/');
    const custRef = ref(db, 'customers/');
    let listener = () => {};
    let custlistener = () => {};
    if (user) {
      if (user.photoURL) setAvatar(user.photoURL);
      listener = onValue(purchaseRef, (snapshot) => {
        if (snapshot.val()) {
          const items = Object?.values(snapshot.val());
          console.log('purchases loaded');
          setProductsTable([...items.filter((item) => item?.billing_details?.email === user.email)]);
        }
      });
      custlistener = onValue(custRef, (snapshot) => {
        if (snapshot.val()) {
          const customers = Object?.values(snapshot.val());
          const cust = customers.filter((item) => item.email === user.email);
          setCustId(cust[0]?.id);
          setClient({ ...cust[0] });
        }
      });
    } else {
      console.log('App logged out');
      setProductsTable([]);
      setClient({});
      setCustId('');
      // onValue(custRef, (snapshot) => {
      //   if (snapshot.val()) {
      //     const customers = Object?.values(snapshot.val());

      //     console.log(' logged out custIds loaded');
      //     console.log(customers);
      //     setClient(customers);
      //   }
      // });
    }
    return () => {
      listener();
      custlistener();
    };
  }, [user]);

  // looks for cookie in local storage with thememode - so that theme persists across tabs
  useEffect(() => {
    const mode = getCookie('themeMode') || defaultSettings.themeMode;
    setThemeMode(mode);
  }, []);

  // Mode
  const onToggleMode = useCallback(() => {
    const value = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(value);
    setCookie('themeMode', value);
  }, [themeMode]);

  const memoizedValue = useMemo(
    () => ({
      // reducer
      state,
      dispatch,
      // Mode
      themeMode,
      avatar,
      setAvatar,
      onToggleMode,
      loading,
      productsTable,
      custId,
      client,
      user,
      host,
    }),
    [
      // dependency array
      // reducer
      state,
      dispatch,
      // the rest
      themeMode,
      avatar,
      setAvatar,
      onToggleMode,
      loading,
      productsTable,
      custId,
      client,
      user,
      host,
    ]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

// ----------------------------------------------------------------------

function getCookie(name) {
  if (typeof document === 'undefined') {
    throw new Error('getCookie() is not supported on the server. Fallback to a different value when rendering on the server.');
  }

  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts[1].split(';').shift();
  }

  return undefined;
}

function setCookie(name, value, exdays = 3) {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

// function removeCookie(name) {
//   document.cookie = `${name}=;path=/;max-age=0`;
// }
