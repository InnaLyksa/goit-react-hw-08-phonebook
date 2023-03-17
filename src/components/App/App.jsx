import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { light, dark } from '../../style/theme';

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

  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(window.localStorage.getItem('darkTheme')) ?? false
  );

  useEffect(() => {
    window.localStorage.setItem('darkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Suspense fallback={<Loader />}>
        {!isFetchingUser && (
          <Routes>
            <Route
              path="/"
              element={
                <ContactsAppBar
                  isDark={isDarkTheme}
                  changeTheme={handleChangeTheme}
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
        <ToastContainer />
      </Suspense>
    </ThemeProvider>
  );
};
