import { Box, TextField } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import { InputsFormStyles } from '../Assets/Styles.ts';
import { SubmitButton } from '../Assets/ButtonsStyle.tsx';
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
    <Box 
      sx={{ display: 'flex', flexDirection: 'column', width: '798px', m: '0px auto' }}
      component='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        sx={{ ...InputsFormStyles }}
        autoComplete='off'
        required
        type='text'
        label='Nombre y Apellido'
        {...register("fullname", { required: true })}
      />

      <TextField
        sx={{ ...InputsFormStyles }}
        autoComplete='off'
        required
        type='text'
        label='Correo electrónico'
        {...register("email", { required: true })}
      />

      <TextField
        sx={{ ...InputsFormStyles }}
        autoComplete='off'
        required
        type='number'
        label='Número de teléfono'
        {...register("number", { required: true })}
      />

      <TextField
        sx={{ ...InputsFormStyles, color: "white" }}
        autoComplete='off'
        required
        type='select'
        select
        SelectProps={{
          native: true,
        }}
        inputProps={{ style: { ...InputsFormStyles} }}
        label='Consulta'
        {...register("consult", { required: true })}
      >
        {selectValues.map((option) => (
          <option key={option.value} value={option.value} style={{ color: "black" }}>
            {option.label}
          </option>
        ))}
      </TextField>

      <TextField
        sx={{ ...InputsFormStyles }}
        inputProps={{ style: { ...InputsFormStyles} }}
        autoComplete='off'
        required
        type='text'
        label='Dejanos más datos de tu consulta'
        multiline
        rows={5}
        {...register("moreData", { required: true })}
      />

      {errors.fullname && errors.email && errors.number && errors.consult && errors.moreData && <span>This field is required</span>}
      
      <SubmitButton content={'Enviar Formulario'} icon={true} width={'457px'}/>
    </Box>
  )
}

export default FormularyData;