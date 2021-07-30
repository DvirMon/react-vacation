import { FunctionComponent } from "react";

import { Control, FieldValues, ControllerRenderProps } from "react-hook-form";

import { makeStyles, MenuItem, TextField, Theme } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { FormInputModel } from "../../models/form-model";

const useStyles = makeStyles((theme: Theme) => ({
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

export interface MuiTextFieldProps {
  control?: Control<FieldValues>,
  field?: ControllerRenderProps<FieldValues, string>
  controlProps?: FormInputModel,
}

const MuiTextField: FunctionComponent<MuiTextFieldProps> = (
  {
    controlProps,
    field,
  }
) => {

  const { type, label, variant, message, helperText, formInputProps } = controlProps
  const {
    select, selectOptions
  } = formInputProps || {};

  const classes = useStyles();

  return (
    <>
      <TextField
        {...field}
        fullWidth
        className={classes.select}
        autoComplete="off"
        error={!!message}
        variant={variant || 'filled'}
        type={type || "text"}
        label={label}
        placeholder={label}
        helperText={message || helperText || `Please enter ${label}`}
        SelectProps={{
          IconComponent: KeyboardArrowDownIcon,
          MenuProps: {
            classes: { paper: classes.paper }
          }
        }}
      />
      {select && selectOptions.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </>
  )
}


export default MuiTextField;