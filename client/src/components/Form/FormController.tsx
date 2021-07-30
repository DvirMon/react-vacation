import { FunctionComponent } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { FormInputModel } from '../../models/form-model';

export interface FormControllerProps {
  Component?:  FunctionComponent,
  control?:  Control<FieldValues>,
  controlProps?: FormInputModel,
  error?: any
}

const FormController = ({
  Component, control, controlProps, ...props
}) => {
  const { key } = controlProps;
  return (
    <Controller
      {...props}
      control={control}
      name={key}
      defaultValue=""
      render={({
        field
      }) => (
        <Component controlProps={controlProps} field={field} />
      )}
    />
  );
};

export default FormController; 