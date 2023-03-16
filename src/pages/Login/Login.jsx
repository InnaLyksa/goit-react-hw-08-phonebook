import * as React from 'react';
import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';

import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/operations';

import { NavLinkStyled } from './Login.styled';

export default function LoginForm() {
  const schema = yup
    .object({
      email: yup.string().email().nullable().required(),
      password: yup.string().required(),
    })
    .required();

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(
      authOperations.loginUser({
        email: data.get('email'),
        password: data.get('password'),
      })
    );
  };

  return (
    <Grid
      container
      component="main"
      sx={{
        mt: 2,
        justifyContent: 'center',
      }}
    >
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            py: 4,
            px: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            validate={schema}
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="logEmail"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="logPassword"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#4caf50', color: 'text.primary' }}
            >
              Sign In
            </Button>

            <Grid item>
              <Typography>
                Don't have an account?{' '}
                <NavLinkStyled to="/register">Register</NavLinkStyled>
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
