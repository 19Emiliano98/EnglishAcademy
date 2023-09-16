import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { themeProvider, Colors } from '../Assets/Styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface parentProps{
  content: string;
  width: string;
  icon: boolean;
}

export const StandardButton = ( props: parentProps) => {
  return (
    <ThemeProvider theme={themeProvider}>
      <Button
        sx={{ 
          width: `${props.width}`, height: '55px',
          backgroundColor: Colors.secondary, color: Colors.principal,
          fontWeight: 600
        }}
        type='button'
        endIcon={ props.icon ? <ArrowForwardIcon /> : ''}
        color='secondary'
        variant="contained"
      >
        { props.content }
      </Button>
    </ThemeProvider>
  )
}

export const SubmitButton = ( props: parentProps) => {
  return (
    <ThemeProvider theme={themeProvider}>
      <Button
        sx={{ 
          width: `${props.width}`, height: '55px',
          backgroundColor: Colors.secondary, color: Colors.principal,
          fontWeight: 600, m: '0px auto'
        }}
        type='submit'
        endIcon={ props.icon ? <ArrowForwardIcon /> : ''}
        color='secondary'
        variant="contained"
      >
        { props.content }
      </Button>
    </ThemeProvider>
  )
}