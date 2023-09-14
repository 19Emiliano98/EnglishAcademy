import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ListItems from "./ListItems";
import { CursosImages } from "../Assets/ImagesLoader";
import { PrincipalColors } from "../Assets/ThemeStyle";

interface CardProps{
  src: string;
  alt: string;
  titleList: string;
  data: string[];
  height: string;
}

const cardItems: CardProps[] = [
  {
    src: CursosImages[0].src,
    alt: CursosImages[0].alt,
    titleList: 'Presenciales',
    data: [
      '<b>Intensivos:</b> 3hs semanales con preparación en: oralidad, escucha, escritura y lectura.',
      'Los mismos potencian tus habilidades al máximo preparándote para afrontar cualquier situación de la vida cotidiana.',
      '<b>Speakout / Conversacional:</b> 1,30 hrs semanales con orientación a la práctica de Conversación.',
      'Para estudiantes que buscan reforzar conocimientos sin las horas habituales de los cursos regulares.'
    ],
    height: '330px'
  },
  {
    src: CursosImages[1].src,
    alt: CursosImages[1].alt,
    titleList: 'Virtuales',
    data: [
      '<b>Intensivos:</b> 3hs semanales con preparación en: oralidad, escucha, escritura y lectura.',
      'Los mismos potencian tus habilidades al máximo preparándote para afrontar cualquier situación de la vida cotidiana.',
      '<b>Speakout / Conversacional:</b> 1,30 hrs semanales con orientación a la práctica de Conversación.',
      'Para estudiantes que buscan reforzar conocimientos sin las horas habituales de los cursos regulares.'
    ],
    height: '330px'
  },
  {
    src: CursosImages[2].src,
    alt: CursosImages[2].alt,
    titleList: 'Viajeros',
    data: [
      '<b>Cursos para Viajeros:</b> Clases orientadas a la práctica de Vocabulario general para viajes y situaciones típicas de los mismos.'
    ],
    height: '251px'
  }
]

const Cards = () => {
  return (
    <>
      {
        cardItems.map( ( x, index ) => 
          <Card 
            sx={{ 
              display: 'flex',
              width: '1072px', height: `${x.height}`, 
              color: PrincipalColors.fontColor,
              borderRadius: '25px',
              mt: '30px'
            }} 
            key={index}
          >
            <CardContent sx={{ backgroundColor: PrincipalColors.secondary }}>
              <CardMedia 
                sx={{ width: '251px', height: '251px' }}
                component="img"
                image={x.src}
                alt={x.alt}
              />
            </CardContent>
            <CardContent sx={{ backgroundColor: PrincipalColors.principal }}>
              <Typography sx={{ textAlign: 'center', fontWeight: 400 }} variant="h4">
                {x.titleList}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '150px' }}>
                <ListItems data={x.data}/>
              </Box>
            </CardContent>
          </Card>
        )
      }
    </>
  )
}

export default Cards