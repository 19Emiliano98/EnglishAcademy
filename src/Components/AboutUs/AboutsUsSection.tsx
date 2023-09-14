import { Box, Typography } from '@mui/material'
import AboutUsCard from './AboutUsCard'

const AboutsUsSection = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '70px' }}>
      <Typography sx={{ mb: '48px' }} variant='h2'>Sobre Nosotros</Typography>
      <AboutUsCard />
    </Box>
  )
}

export default AboutsUsSection