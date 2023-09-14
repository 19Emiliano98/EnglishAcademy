import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ListItems from "./ListItems";
import { CursosImages } from "../Assets/ImagesLoader";
import { PrincipalColors } from "../Assets/ThemeStyle";

interface CardProps{
  src: string;
  alt: string;
  titleList: string;
  data: string[];
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
    ]
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
    ]
  },
  {
    src: CursosImages[2].src,
    alt: CursosImages[2].alt,
    titleList: 'Viajeros',
    data: [
      '<b>Cursos para Viajeros:</b> Clases orientadas a la práctica de Vocabulario general para viajes y situaciones típicas de los mismos.'
    ]
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
              width: '1072px', height: '314px', 
              backgroundColor: PrincipalColors.principal, color: PrincipalColors.fontColor
            }} 
            key={index}
          >
            <CardContent sx={{ border: '2px solid red' }}>
              <CardMedia 
                sx={{ width: '96px' }}
                component="img"
                image={x.src}
                alt={x.alt}
              />
            </CardContent>
            <CardContent sx={{ border: '2px solid green' }}>
              <Typography sx={{ textAlign: 'center' }}>
                {x.titleList}
              </Typography>
              
              <ListItems data={x.data}/>
            </CardContent>
            {/* <CardContent sx={{ border: '2px solid red' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ backgroundColor: PrincipalColors.secondary }}>
                  <CardMedia 
                    sx={{ width: '96px' }}
                    component="img"
                    image={x.src}
                    alt={x.alt}
                  />
                </Box>
                <Box sx={{  }}>
                  <Typography sx={{ textAlign: 'center' }}>
                    {x.titleList}
                  </Typography>
                  
                  <ListItems data={x.data}/>
                </Box>
              </Box>
            </CardContent> */}
          </Card>
        )
      }
    </>
  )
}

export default Cards