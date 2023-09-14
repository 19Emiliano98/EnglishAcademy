import CoworkingCard from "./CoworkingCard";
import ServicesCard from "./ServicesCard";
import { Box, Typography } from "@mui/material";

const CowSerSection = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box>
        <Typography sx={{ textAlign: 'center', mb: '48px' }} variant="h2">Coworking</Typography>
        <CoworkingCard />
      </Box>

      <Box>
        <Typography sx={{ textAlign: 'center', mt: '64px', mb: '18px' }} variant="h4">Servicios Incluídos</Typography>
        <ServicesCard />
      </Box>
    </Box>
  )
}

export default CowSerSection