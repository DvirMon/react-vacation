import { FunctionComponent, useMemo } from "react";
import { TextField } from "@material-ui/core";
import useMessage from "../../hooks/useMessage";
import { FormInputModel } from "../../models/form-model";
import FormController from "./FormController";

export interface FormInputProps {
  formControl?: FormInputModel
  error?: any

}

const FormInput: FunctionComponent<FormInputProps> = (
  {
    formControl,
    error,
  }
) => {
  // const message =  useMessage(error)
  // const message = useMemo(() => useMessage({ ...error, key: label.toLocaleLowerCase() }), [error]);
  
  const {
    key,
    variant,
    type,
    label,
    helperText,
    register,
    control,
    render,
    Component,
    formInputProps } = useMemo(() => formControl, [formControl])


  const { select } = formInputProps || {}
  return (
    <>
      {render ?
        <FormController Component={Component} control={control} controlProps={{ ...formControl }} />
        :
        <TextField
          select={select}
          fullWidth
          // error={!!message}
          key={key}
          label={label}
          type={type || 'text'}
          variant={variant || "filled"}
          placeholder={label}
          autoComplete="off"
          InputProps={{
            ...register(key)
          }}
          helperText={helperText || `Enter ${label}`}
        />}
    </>
  );
}

export default FormInput;