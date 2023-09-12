import { Card, CardContent, Typography } from '@mui/material';

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
      <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
      </CardContent>
    </Card>
  )
}

export default CardUserMail