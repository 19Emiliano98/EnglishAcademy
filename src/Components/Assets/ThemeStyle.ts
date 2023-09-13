import { createTheme } from '@mui/material/styles';

export const themeProvider = createTheme({
  palette: {
    primary: {
      light: '#312783',
      main: '#312783',
    },
    secondary: {
      light: '#FFA500',
      main: '#FFA500',
    },
    info: {
      light: '#0000006B',
      main: '#0000006B',
    }
  },
});

export const PrincipalColors = {
  principal: '#312783',
  secondary: '#FFA500',
  fontColor: '#FFF'
}