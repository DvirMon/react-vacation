import { FunctionComponent } from "react";

import { Control, FieldValues, ControllerRenderProps } from "react-hook-form";

import { TextField } from "@material-ui/core";

import { FormInputModel } from "../../models/form-model";

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

  const { type, label, variant, message, helperText } = controlProps

  return (
    <TextField
      {...field}
      fullWidth
      autoComplete="off"
      error={!!message}
      variant={variant || 'filled'}
      type={type || "text"}
      label={label}
      placeholder={label}
      helperText={message || helperText || `Please enter ${label}`}
    />
  )
}


export default MuiTextField;