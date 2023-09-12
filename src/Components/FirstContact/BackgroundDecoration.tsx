import { CardMedia } from "@mui/material"
import FondoBlur from '../../Img/FirstContact/Fondo inicial Blur.png';

const BackgroundDecoration = () => {
  return (
    <>
      <CardMedia
        sx={{
          position: 'absolute', top: '11.75%',
          height: '701px', opacity: '100%', objectFit: 'cover'
        }}
        component="img"
        image={FondoBlur}
      />
    </>
  )
}

export default BackgroundDecoration