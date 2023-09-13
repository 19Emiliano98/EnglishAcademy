import { AppBar } from '../Assets/AppBar.tsx';
import { FirstContactSection } from '../FirstContact/FirstContactSection.tsx';
import PrepExamenesSection from '../PrepExamenes/PrepExamenesSection.tsx';
import { Box } from '@mui/material';

const HomeSection = () => {
  return (
    <Box sx={{ m: -1 }}>
      <AppBar />
      <FirstContactSection />
      <Box sx={{ pt: 112 }}>
        <PrepExamenesSection />
      </Box>
    </Box>
  )
}

export default HomeSection