import { Box, Typography } from "@mui/material";
import Cards from "./Cards";

const LanguagesSection = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
      <Typography 
        sx={{
          fontFamily: 'Work Sans', fontSize: '60px', fontWeight: 500,
          lineHeight: '72px', letterSpacing: '-0.5px', mb: '48px'
        }}
        variant="h2"
      >
        Clases de idiomas
      </Typography>

      <Cards />
    </Box>
  )
}

export default LanguagesSection