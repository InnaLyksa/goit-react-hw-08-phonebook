import { grey, green, red } from '@mui/material/colors';

// import { createTheme } from '@mui/material/styles';

// export let theme = createTheme({
//   palette: {
//     primary: {
//       main: '#a5d6a7',
//       light: 'rgb(161 240 226)',
//       dark: '#7700ff',
//       divider: green[200],
//     },
//     secondary: {
//       main: '#edf2ff',
//     },
//   },
// });

export const light = {
  palette: {
    mode: 'light',
    primary: green,
    divider: green[200],
    btnGreen: green[500],

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
    // primary: {
    //   main: 'rgb(161 240 226)',
    //   // primary: green,
    //   // divider: green[200],
    // },
    // secondary: {
    //   main: '#000',
    // },
    // background: {
    //   main: '#fff',
    // },
  },
};

export const dark = {
  palette: {
    mode: 'dark',
    primary: grey,
    divider: grey[500],
    btnGreen: green[500],

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
    // primary: {
    //   main: '#7700ff',
    // },
    // secondary: {
    //   main: '#fff',
    // },
    // background: {
    //   main: '#757575',
    // },
  },
};
// export const getDesignTokens = mode => ({
//   palette: {
//     mode,
//     ...(mode === 'light'
//       ? {
//           // palette values for light mode
//           primary: green,
// divider: green[200],

//           background: {
//             default: green[200],
//             paper: green[100],
//             button: red[300],
//           },
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//             link: green[900],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: grey,
//           divider: grey[500],

//           background: {
//             default: grey[600],
//             paper: grey[800],
//             button: red[300],
//           },
//           text: {
//             primary: '#fff',
//             secondary: grey[300],
//             link: green[900],
//           },
//         }),
//   },
// });
