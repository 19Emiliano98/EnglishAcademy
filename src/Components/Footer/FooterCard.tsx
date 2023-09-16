import { Box, Typography, CardMedia  } from '@mui/material';
import { Colors, TypographyBody1, TypographyFooter } from '../Assets/Styles';
import { LogosSocial } from '../Assets/ImagesLoader';
import logo from '../../Img/logos/logo1.png';

const FooterCard = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        background: Colors.secondary, mt: '281px'
      }}
    >
      <Box sx={{ display: 'flex', mt: '23px' }}>
        <CardMedia
          sx={{ width: '197px', height: '109px', borderRadius: '25px' }}
          component="img"
          image= { logo }
          alt= 'Access Idiomas'
        />
        
        <Box sx={{ display: 'flex', flexDirection: 'column', m: 'auto 25px' }}>
          {
            LogosSocial.map( ( x, index ) => 
              <Box sx={{ display: 'flex', mt: 1 }}>
                <CardMedia
                  key={index}
                  sx={{ width: '30px', height: '30px' }}
                  component="img"
                  image= { x.src }
                  alt= { x.alt }
                />

                <Typography sx={{ ...TypographyBody1, ml: 1.6, mt: 0.3 }} variant='body1'>{ x.alt }</Typography>
              </Box>
            )
          }
        </Box>
      </Box>

      <Typography sx={{ ...TypographyFooter, mt: '37px', mb: '21px'}}>
        Designed by DesusWeb - www.desusweb.com
      </Typography>
    </Box>
  )
}

export default FooterCard