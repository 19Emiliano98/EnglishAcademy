import AppBar from '../Assets/AppBar.tsx';
import FirstContactSection from '../FirstContact/FirstContactSection.tsx';
import PrepExamenesSection from '../PrepExamenes/PrepExamenesSection.tsx';
import LanguagesSection from '../Languages/LanguagesSection.tsx';
import CoursesSection from '../Courses/CoursesSection.tsx';
import CowSerSection from '../Coworking&Services/CowSerSection.tsx';
import AboutsUsSection from '../AboutUs/AboutsUsSection.tsx';
import FormSection from '../Formulary/FormSection.tsx';
import FooterSection from '../Footer/FooterSection.tsx';
import { Box } from '@mui/material';

const HomeSection = () => {
  return (
    <Box sx={{ m: -1 }}>
      <AppBar />
      <FirstContactSection />
      <Box sx={{ pt: 112 }}>
        <PrepExamenesSection />
        <LanguagesSection />
        <CoursesSection />
        <CowSerSection />
        <AboutsUsSection />
        <FormSection />
        <FooterSection />
      </Box>
    </Box>
  )
}

export default HomeSection