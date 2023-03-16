import { useState, useEffect, lazy, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from '../../style/theme';

import PublicRoute from '../Routes/PublicRoute';
import PrivateRoute from '../Routes/PrivateRoute';
import authOperations from '../../redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Loader } from '../Loader/Loader';

const ContactsAppBar = lazy(() => import('../AppBar/AppBar'));
const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() =>
  import('../../pages/Registration/RegistrationForm')
);
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  const [mode, setMode] = useState(
    JSON.parse(window.localStorage.getItem('theme'))
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleColorMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };
  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(mode));
  }, [mode]);
  // console.log(theme.palette.mode);
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        {!isFetchingUser && (
          <Routes>
            <Route
              path="/"
              element={
                <ContactsAppBar
                  theme={theme.palette.mode}
                  changeTheme={toggleColorMode}
                />
              }
            >
              <Route index element={<HomePage />} />
              <Route
                path="contacts"
                element={
                  <PrivateRoute
                    component={ContactsPage}
                    redirectTo="/login"
                  ></PrivateRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute
                    component={LoginPage}
                    redirectTo="/contacts"
                  ></PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute
                    component={RegisterPage}
                    redirectTo="/contacts"
                  ></PublicRoute>
                }
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </Suspense>
      <ToastContainer />
    </ThemeProvider>
  );
};
