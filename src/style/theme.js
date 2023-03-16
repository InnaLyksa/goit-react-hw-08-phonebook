import { grey, green, red } from '@mui/material/colors';
export const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: green,
          divider: green[200],

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
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: grey[500],

          background: {
            default: grey[600],
            paper: grey[800],
            button: red[300],
          },
          text: {
            primary: '#fff',
            secondary: grey[300],
            link: green[900],
          },
        }),
  },
});
