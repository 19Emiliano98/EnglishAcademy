import MapContact from "./MapContact";
import FooterCard from "./FooterCard";
import { Box } from '@mui/material';

const FooterSection = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '62px' }}>
        <MapContact />
      </Box>
      
      <FooterCard />
    </>
  )
}

export default FooterSection