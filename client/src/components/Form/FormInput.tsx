import { useMemo } from 'react';
import {
  TextField, MenuItem, makeStyles,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import setMessage from '../../hooks/useMessage';
import FormController from './FormController';

const useStyles = makeStyles((theme) => ({
  select: {
    '& svg': {
      fontSize: 30,
      color: `${theme.palette.primary.main} !important`
    }
  },
  paper: {
    top: 'calc(40%) !important',
    border: `2px solid ${theme.palette.primary.main} !important`
  }
}));

const FormInput = ({
  formControl, error, ...props
}) => {
  const message = useMemo(() => setMessage(error), [error]);
  const {
    key, label, type, placeHolder, render, register, control, Component, setValue,
    inputProps
  } = formControl;

  const {
    select, options
  } = inputProps || {};

  const classes = useStyles();

  return (
    <div>
      {(render
        ? <FormController control={control} controlProps={{ ...formControl, message, setValue }} Component={Component} />
        : (
          <TextField
            {...props}
            className={classes.select}
            select={select}
            fullWidth
            error={!!message}
            key={key}
            label={label}
            type={type || 'text'}
            variant="outlined"
            placeholder={placeHolder || label}
            autoComplete="off"
            InputProps={{
              ...register(key),
              ...inputProps,
            }}
            helperText={message || `Enter ${label}`}
            SelectProps={{
              IconComponent: KeyboardArrowDownIcon,
              MenuProps: {
                classes: { paper: classes.paper }
              }
            }}
          >
            {select && options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        ))}
    </div>
  );
};

export default FormInput;
