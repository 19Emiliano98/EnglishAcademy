import { AppBar } from '../Assets/AppBar.tsx';
import { FirstContactSection } from '../FirstContact/FirstContactSection.tsx';
import { Box } from '@mui/material';

const HomeSection = () => {
  return (
    <Box sx={{ m: -1 }}>
      <AppBar />
      <FirstContactSection />
    </Box>
  )
}

export default HomeSection