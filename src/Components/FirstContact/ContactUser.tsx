import { Box, CardMedia } from '@mui/material';
import CardUserMail from './CardUserMail';
import ilustrations from '../../Img/FirstContact/Ilustraciones.png';

const ContactUser = () => {
  return (
    <Box
      sx={{
        position: 'absolute', top: '20%'
      }}
    >
      <CardUserMail />
      <CardMedia
        sx={{
          position: 'absolute', top: '-10px', left: '1110px',
          width: '700px', height: '627px'
        }}
        component="img"
        image={ilustrations}
      />
    </Box>
  )
}

export default ContactUser