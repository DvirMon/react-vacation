import { useMemo } from 'react';
import {
  TextField, MenuItem, makeStyles,
} from '@material-ui/core';
import setMessage from '../../hooks/useMessage';
import FormController from './FormController';

const FormInput = ({
  formControl, error, ...props
}) => {
  const message = useMemo(() => setMessage(error), [error]);
  const {
    key, label, type, placeHolder, render, register, control, Component, setValue,
  } = formControl;

  return (
    <div> 
      {(render
        ? <FormController control={control} controlProps={{ ...formControl, message, setValue }} Component={Component} />
        : (
          <TextField
            {...props}
            fullWidth
            error={!!message}
            key={key}
            label={label}
            type={type || 'text'}
            variant="filled"
            placeholder={placeHolder || label}
            autoComplete="off"
            InputProps={{
              ...register(key),
            }}
            helperText={message || `Enter ${label}`}
             
          >
    
          </TextField>
        ))}
    </div>
  );
};

export default FormInput;
