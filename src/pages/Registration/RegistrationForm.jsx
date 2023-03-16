import * as React from 'react';
import { useDispatch } from 'react-redux';
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
import authOperations from 'redux/auth/operations';
import { NavLinkStyled } from '../Login/Login.styled';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().nullable().required(),
    password: yup.string().required(),
  })
  .required();

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credentials = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };
    console.log(credentials);

    dispatch(authOperations.addNewUser(credentials));
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
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            validate={schema}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="logName"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              helperText="Name can contain only letters, apostrophe and spaces"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="logEmail"
              label="Email Address"
              name="email"
              autoComplete="email"
              helperText="Email must be valid and contain @"
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
              helperText=" Password must be at least 7 characters"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#4caf50', color: 'text.primary' }}
            >
              Sign up
            </Button>

            <Grid item>
              <Typography>
                Do you have an account?{' '}
                <NavLinkStyled to="/login">LogIn</NavLinkStyled>
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
