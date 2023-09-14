import { Card, CardContent, Typography } from "@mui/material";
import { PrincipalColors } from "../Assets/ThemeStyle";

const textData: string[] = [
  'Nuestra Institución cuenta con espacios amplios preparados para el dictado de clases. Con pupitres, mesas y sillas; además de televisor, parlante y computadoras para el dictado de clases regulares y virtuales.',
  'También contamos con un amplio salón para reuniones, talleres y cursos de distintas especialidades.',
  'Ofrecemos el servicio de Administración para cursos externos, además de asesoramiento para el dictado de talleres y cursos.'
]

const CoworkingCard = () => {
  return (
    <Card 
      sx={{ 
        backgroundColor: PrincipalColors.principal, color: PrincipalColors.fontColor,
        width: '1072px', height: '338px',
        borderRadius: '25px'
      }}
    >
      <CardContent>
        {
          textData.map( ( x, index ) => 
            <Typography 
              sx={{ fontSize: '24px', fontWeight: 400, lineHeight: '34.5px', mb: '30px' }}
              key={index}
              variant="body1"
            >
              {x}
            </Typography>
          )
        }
      </CardContent>
    </Card>
  )
}

export default CoworkingCard