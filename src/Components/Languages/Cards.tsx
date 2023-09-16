import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { languagesLogos } from "../Assets/ImagesLoader";
import { Colors } from "../Assets/Styles";

interface CardProps{
  title: string;
  src: string;
  alt: string
  description: string;
}

const cardElements:CardProps[] = [
  {
    title: 'INGLÉS',
    src: languagesLogos[0].src,
    alt: languagesLogos[0].alt,
    description: 'A partir de 4 años, adolescentes y adultos'
  },
  {
    title: 'ITALIANO',
    src: languagesLogos[1].src,
    alt: languagesLogos[1].alt,
    description: 'Adolescentes y adultos'
  },
  {
    title: 'PORTUGUÉS',
    src: languagesLogos[2].src,
    alt: languagesLogos[2].alt,
    description: 'Adolescentes y adultos'
  }
]

const Cards = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {
        cardElements.map( ( x, index ) => 
          <Card 
            sx={{ 
              display: 'flex', justifyContent: 'center', 
              width: '250px', height: '250px', 
              backgroundColor: Colors.principal,
              color: Colors.fontColor,
              borderRadius: '25px', mr: '33px'
            }}
            key={index}
          >
            <CardContent>
              <Typography sx={{ mt: '16px', textAlign: 'center', }} variant="body1">{x.title}</Typography>
              
              <CardMedia
                sx={{ width: '96px', m: '16px auto' }}
                component="img"
                image={x.src}
                alt={x.alt}
              />

              <Typography sx={{ width: '172px' }} variant="body1">{x.description}</Typography>
            </CardContent>
          </Card>
        )
      }
    </Box>
  )
}

export default Cards