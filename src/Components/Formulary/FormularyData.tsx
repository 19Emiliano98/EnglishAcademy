import { Box, TextField, Button } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  fullname: string;
  email: string;
  number: number;
  consult: string;
  moreData: string;
};

const selectValues = [
  {
    value: '',
    label: '',
  },
  {
    value: 'Tienda Online',
    label: 'Tienda Online',
  },
  {
    value: 'Landing Page',
    label: 'Landing Page',
  },
  {
    value: 'Desarrollo Libre',
    label: 'Desarrollo Libre',
  }
];

const FormularyData = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data); //! muestrea el submit

  return (
    <>
      <Box 
        sx={{ display: 'flex', flexDirection: 'column', width: '798px', m: '0px auto' }} 
        component='form' 
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          sx={{ mb: '32px' }}
          required
          type='text'
          label='Nombre y Apellido'
          {...register("fullname", { required: true })}
        />

        <TextField
          sx={{ mb: '32px' }}
          required
          type='text'
          label='Correo electrónico'
          {...register("email", { required: true })}
        />

        <TextField
          sx={{ mb: '32px' }}
          required
          type='number'
          label='Número de teléfono'
          {...register("number", { required: true })}
        />

        <TextField
          sx={{ mb: '32px' }}
          required
          type='select'
          select
          SelectProps={{
            native: true,
          }}
          label='Consulta'
          {...register("consult", { required: true })}
        >
          {selectValues.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          sx={{ mb: '32px' }}
          required
          type='text'
          label='Dejanos más datos de tu consulta'
          multiline
          rows={5}
          {...register("moreData", { required: true })}
        />

        {errors.fullname && errors.email && errors.number && errors.consult && errors.moreData && <span>This field is required</span>}
        
        <Button type="submit" variant='contained'>Enviar Formulario</Button>
      </Box>
    </>
  )
}

export default FormularyData;