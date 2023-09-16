import { createTheme } from '@mui/material/styles';

export const themeProvider = createTheme({
  palette: {
    primary: {
      light: '#312783', //? Violet
      main: '#312783',
    },
    secondary: {
      light: '#FFA500', //? Yellow
      main: '#FFA500',
    },
    info: {
      light: '#0000006B', //? Gray
      main: '#0000006B',
    }
  },
});

export const Colors = {
  principal: '#312783',
  secondary: '#FFA500',
  fontColor: '#FFF',
  fontColorFooter: '#1F1855'
}

export const InputsFormStyles = {
  mb: '32px', color: 'white',
  "& input": { color: 'white' },
  "& label": { color: 'white' },
  "& value": { color: 'white' },
  "& label.Mui-focused": { color: 'white' },
  "& fieldset": { border: '2px solid #fff!important', borderRadius: '7px' }
}

export const Navbar = {
  display: 'flex', justifyContent: 'flex-end', alignItems: 'center',
  position: 'fixed', backgroundColor: '#FFA500', minWidth: '98vw', zIndex: 2
}
export const LinkNavbar = {
  textDecoration: 'none', color: '#1F1855',
  fontSize: '20px', fontFamily: 'Work Sans', fontWeight: 700, lineHeight: '20px',
  pr: 1.5, mr: -2.5
}

export const TypographyH1 = {
  color: '#312783', fontFamily: 'Work Sans', fontSize: '80px', 
  fontWeight: 700, lineHeight: '112px', letterSpacing: '-1,5px',
  fontStyle: 'normal',  
}
export const TypographyH2 = {
  color: '#000', fontFamily: 'Work Sans', fontSize: '60px', 
  fontWeight: 500, lineHeight: '72px', letterSpacing: '-0.5px',
  fontStyle: 'normal',  
}
export const TypographyH6 = {
  color: '#000', fontFamily: 'Work Sans', fontSize: '20px',
  fontWeight: 500, lineHeight: '32px', letterSpacing: '0.15px',
}
export const TypographyBody1 = {
  color: '#000', fontFamily: 'Work Sans', fontSize: '20px',
  fontWeight: 400, lineHeight: '24px', letterSpacing: '0.15px',
}
export const TypographyFooter = {
  color: Colors.fontColorFooter, fontFamily: 'Work Sans', fontSize: '24px',
  fontWeight: 400, lineHeight: '29px'
}