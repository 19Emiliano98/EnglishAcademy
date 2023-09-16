import { Box, Card, CardContent, Typography } from '@mui/material';
import { Colors } from '../Assets/Styles';
import { StandardButton } from '../Assets/ButtonsStyle';

const AboutUsCard = () => {
  return (
    <Card
      sx={{
        width: '1078px', height: '322px', borderRadius: '25px',
        backgroundColor: Colors.principal, color: Colors.fontColor
      }}
    >
      <CardContent>
        <Box sx={{ m: '25px auto', width: '950px' }}>
          <Typography sx={{ fontWeight: 400, fontSize: '16px', letterSpacing: '0.15px', lineHeight: '32px' }} variant='body1'>
            Más de 20 años de experiencia en la enseñanza de Idiomas. El mejor nivel académico, con profesores preparados para potenciar tus destrezas, 
            comprometidos con tu futuro, con permanente innovación y con cursos a tu medida. Cursos online, presenciales, individuales y grupales con 
            grupos reducidos. Dictamos clases a reconocidas empresas y te preparamos para rendir Exámenes Internacionales y Nacionales, potenciando tus capacidades
          </Typography>
          
          <Typography sx={{ fontWeight: 700, fontSize: '24px', letterSpacing: '0.15px', lineHeight: '32px' }} variant='body1'>
            Access Idiomas es parte de tu futuro. Accede a una nueva opción.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <StandardButton content={'Quiero consultar'} icon={true} width={'457px'}/>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AboutUsCard;