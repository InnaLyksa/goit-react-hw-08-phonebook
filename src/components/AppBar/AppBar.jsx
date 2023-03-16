import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
import AuthNav from './AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserNav from './UserNav/UserNav';
import Navigation from './Navigation/Navigation';
// import HouseIcon from '@mui/icons-material/House';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Loader } from 'components/Loader/Loader';

export default function ContactsAppBar({ theme, changeTheme }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <NavLink to="/">
            {/* <IconButton
              size="large"
              edge="start"
              color="default"
              aria-label="menu"
            >
              <HouseIcon />
            </IconButton> */}
          </NavLink>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Navigation />
          </Typography>
          <div>
            {isLoggedIn ? (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <UserNav />
              </Typography>
            ) : (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <AuthNav />
              </Typography>
            )}
          </div>
          {/* <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              changeTheme();
            }}
          >
            {theme === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton> */}
        </Toolbar>
      </AppBar>

      <Toolbar />
      <Container>
        <React.Suspense fallback={<Loader />}>
          <Outlet />
        </React.Suspense>
      </Container>
    </React.Fragment>
  );
}
