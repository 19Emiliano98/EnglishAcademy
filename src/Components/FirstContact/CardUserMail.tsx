import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { themeProvider } from '../Assets/ThemeStyle';

const renderInputs = (
  <ThemeProvider theme={themeProvider}>
    <TextField 
      sx={{ width: '620px', borderRadius: '4px', mr: '32px' }}
      color='info'
      placeholder='Correo electrónico'
      variant="outlined"
    />
    <Button 
      sx={{ width: '150px', height: '56px' }}
      variant="contained"
    >
      Comenzar <ArrowForwardIcon />
    </Button>
  </ThemeProvider>
)

const CardUserMail = () => {
  return (
    <Card
      sx={{
        width: '935px', height: '480px',
        borderRadius: '25px',
        border: '2px solid #312783',
        boxShadow: '0px 4px 18px 3px rgba(0, 0, 0, 0.12), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 6px 6px -3px rgba(0, 0, 0, 0.20)',
        mt: 2.7, ml: 13
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', mt: '13px', ml: '32px' }}>
        <Typography
          sx={{
            width: 750,
            color: '#312783', fontFamily: 'Work Sans', fontSize: '80px',
            fontStyle: 'normal', fontWeight: 700, lineHeight: '112px',
            letterSpacing: '-1,5px'
          }}
          variant='h1'
        >
          En Access, aprendemos idiomas
        </Typography>
        <Typography
          sx={{
            color: '#000', fontFamily: 'Work Sans', fontSize: '20px',
            fontWeight: 500, lineHeight: '32px', letterSpacing: '0.15px',
            mt: 3, mr: 33,
          }}
          variant='h6'
        >
          Dejanos tu correo electrónico y te contactaremos en breve.
        </Typography>
        <Box sx={{ mt: 7, ml: '8px' }}>
          {renderInputs}
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardUserMail