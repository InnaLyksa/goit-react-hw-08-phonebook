import { grey, green, red } from '@mui/material/colors';

export const light = {
  palette: {
    mode: 'light',
    primary: green,
    divider: green[200],
    btnGreen: green[500],
    btnRed: red[300],

    background: {
      default: green[200],
      paper: green[100],
      button: red[300],
    },
    text: {
      primary: grey[900],
      secondary: grey[800],
      link: green[900],
    },
  },
};

export const dark = {
  palette: {
    mode: 'dark',

    primary: {
      main: '#4caf50',
    },
    divider: grey[500],
    btnGreen: green[500],
    btnRed: red[300],

    background: {
      main: '#757575',
      default: grey[700],
      paper: grey[800],
    },
    text: {
      primary: '#fff',
      secondary: grey[300],
      link: green[900],
    },
  },
};
