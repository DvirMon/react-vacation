import { FunctionComponent, useState } from "react";

import { Control, FieldValues, ControllerRenderProps } from "react-hook-form";

import { TextField, IconButton, InputAdornment } from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { FormInputModel } from "../../models/form-model";

export interface PasswordControllerProps {
  control?: Control<FieldValues>,
  field?: ControllerRenderProps<FieldValues, string>
  controlProps?: FormInputModel,
}

const PasswordController: FunctionComponent<PasswordControllerProps> = (
  {
    controlProps,
    field,
  }
) => {

  const [show, setShow] = useState(false);

  const { label, variant, message, helperText } = controlProps

  return (
    <TextField
      {...field}
      fullWidth
      autoComplete="off"
      error={!!message}
      variant={variant || 'filled'}
      type={show ? "text" : 'password'}
      label={label}
      placeholder={label}
      helperText={message || helperText || `Please enter ${label}`}
      InputProps={{
        endAdornment: (<InputAdornment position="end">
          <IconButton
            disableRipple
            onClick={() => setShow(!show)}
          >
            {show ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>)
      }}
    />
  )
}


export default PasswordController;