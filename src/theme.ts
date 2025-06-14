import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#e1d1c8',
      paper: '#c2a39a',
    },
    primary: {
      main: '#8b5e3c',
    },
    text: {
      primary: '#3d2b1f',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#001600',
      paper: '#0a3007',
    },
    primary: {
      main: '#4caf50',
    },
    text: {
      primary: '#ffffff',
    },
  },
});
