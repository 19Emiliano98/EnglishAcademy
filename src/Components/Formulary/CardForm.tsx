import { Card, CardContent, Typography } from "@mui/material";
import FormularyData from "./FormularyData";
import { PrincipalColors } from "../Assets/ThemeStyle";

const CardForm = () => {
  return (
    <Card
      sx={{
        width: '1076px', height: '700px', borderRadius: '25px',
        background: PrincipalColors.principal, color: PrincipalColors.fontColor 
      }}
    >
      <CardContent>
        <Typography sx={{ textAlign: 'center', mt: '16px', mb: '32px' }} variant="h4">Contactanos</Typography>

        <FormularyData />
      </CardContent>
    </Card>
  )
}

export default CardForm;