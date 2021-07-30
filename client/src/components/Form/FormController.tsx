import { Controller } from 'react-hook-form';

const FormController = ({
  Component, control, controlProps, ...props
}) => {
  const { key, defaultValue } = controlProps;
  return (
    <Controller
      {...props}
      control={control}
      name={key}
      defaultValue={defaultValue || ''}
      render={({
        field
      }) => (
        <Component controlProps={controlProps} field={field} />
      )}
    />
  );
};

export default FormController;
