import { Box, Card, CardContent, Typography } from "@mui/material";
import { PrincipalColors } from "../Assets/ThemeStyle";

const cardData: string[] = [
  'Salón con pupitres, mesas y sillas',
  'Televisor, parlante y computadoras para clases regulares y virtuales',
  'Amplio salón para reuniones, talleres y cursos',
  'Servicio de Administración para cursos externos'
]

const ServicesCard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {
        cardData.map( ( x, index ) =>
          <Card 
            sx={{
              width: '257px', height: '250px',
              backgroundColor: PrincipalColors.principal, color: PrincipalColors.fontColor,
              borderRadius: '25px',
              ml: '16px'
            }}
            key={index}
          >
            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography sx={{ display: 'flex', alignItems: 'center', width: '200px', height: '215px' }}>
                {x}
              </Typography>
            </CardContent>
          </Card>
        )
      }
    </Box>
  )
}

export default ServicesCard