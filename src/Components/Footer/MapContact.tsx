import { Box, Typography } from '@mui/material';
import { Colors, TypographyH6 } from '../Assets/Styles';

const MapContact = () => {
  return (
    <Box sx={{ display: 'flex', width: '1200px' }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.4888410480817!2d-60.682527285267724!3d-32.95048945171734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aca3e91a56d7%3A0xf81a76ab888290b0!2sAVELLANEDA%20y%20PELLEGRINI!5e0!3m2!1ses!2sar!4v1694894469808!5m2!1ses!2sar" 
        width="636px" 
        height="398px"
        style={{ borderRadius: '25px' }}
        loading="lazy"
      ></iframe>

      <Box sx={{ background: `${Colors.secondary}`, width: '7px', borderRadius: '25px', m: '0px 24px' }}/>

      <Box>
        <Typography variant='h4'>¿Cómo encontrarnos?</Typography>

        <Typography sx={{ ...TypographyH6, mt: '83px' }} variant='h6'>Dirección: Av. Siempre viva 3469, Rosario, Santa Fe</Typography>

        <Typography sx={{ ...TypographyH6, mt: '32px' }} variant='h6'>Teléfono: 3541-5863218</Typography>

        <Typography sx={{ ...TypographyH6, mt: '32px' }} variant='h6'>Horarios de atención: Lunes a Viernes de 09 a 19</Typography>
      </Box>
    </Box>
  )
}

export default MapContact