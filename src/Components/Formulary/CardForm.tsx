import { Card, CardContent, Typography } from "@mui/material";
import FormularyData from "./FormularyData";
import { Colors } from "../Assets/Styles";

const CardForm = () => {
  return (
    <Card
      sx={{
        width: '1076px', height: '700px', borderRadius: '25px',
        background: Colors.principal, color: Colors.fontColor, pb: '16px'
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