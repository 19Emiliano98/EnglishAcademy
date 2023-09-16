import ListItems from "./ListItems";
import { Colors, TypographyH2 } from "../Assets/Styles";
import { StandardButton } from "../Assets/ButtonsStyle.tsx";
import { Box, Card, CardContent, Typography, List } from "@mui/material";
interface CardsProps{
  title: string;
  items: string[];
}
const Cards:CardsProps[] = [
  { 
    title: 'Exámenes UNR', 
    items: [ 
      'Exámenes para todos los niveles con aval nacional.',
      'La UTN avala el conocimiento mediante exámenes opcionales.',
      'Exámenes vía web en el instituto.'
    ]
  },
  { 
    title: 'Exámenes Internacionales', 
    items: [
      'Centro de preparación de Exámenes de la Universidad de Cambridge.',
      'Preparación continua según el CEFR para nuestros alumnos.',
      'Nivel niños y adultos. KET, PET, FCE, CAE.'
    ]
  }
]

const cardRender = (
  <>
    {
    Cards.map(( x, index ) => 
        <Card
          sx={{ 
            width: '387px', 
            backgroundColor: Colors.principal, 
            color: Colors.fontColor,
            borderRadius: '25px',
            m: '0px 12px'
          }}
          key={index}
        >
          <CardContent key={index} sx={{ textAlign: 'center' }}>
            <Box sx={{ height: '325px' }}>
              <Typography 
                sx={{ 
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  height: '85px'
                }} 
                variant="h4"
              >
                { x.title }
              </Typography>
              <List>
                <ListItems dataItems={x.items}/>
              </List>
            </Box>
            <StandardButton content={'Mas informacion'} icon={false} width={'324px'}/>
          </CardContent>
        </Card>
      )
    }
  </>
)

const PrepExamenesSection = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}
    >
      <Typography sx={{ ...TypographyH2 }} variant="h2">
        Preparación de exámenes
      </Typography>
      
      <Box sx={{ display: 'flex' }}>
        {cardRender}
      </Box>
    </Box>
  )
}

export default PrepExamenesSection