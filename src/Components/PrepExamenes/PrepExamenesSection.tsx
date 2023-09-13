import { Box, Card, CardContent, Typography, List, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import ListItems from "./ListItems";
import { PrincipalColors, themeProvider } from "../Assets/ThemeStyle";

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
            backgroundColor: PrincipalColors.principal, 
            color: PrincipalColors.fontColor,
            borderRadius: '25px',
            m: '0px 12px'
          }}
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
            <ThemeProvider theme={themeProvider}>
              <Button 
                sx={{ backgroundColor: PrincipalColors.secondary }}
                color='secondary'
                variant="contained"
              >
                Mas informacion
              </Button>
            </ThemeProvider>
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
      <Typography 
        sx={{  }}
        variant="h2"
      >
        Preparación de exámenes
      </Typography>
      
      <Box sx={{ display: 'flex', mt: '72px' }}>
        {cardRender}
      </Box>
    </Box>
  )
}

export default PrepExamenesSection