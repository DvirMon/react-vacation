import { useMemo } from 'react';
import { FormGroupModel, FormInputModel } from './../models/form-model';
import { Control, FieldValues, UseFormWatch, useForm, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import useValidation from './useValidation';
import { v4 as uuid } from 'uuid';
import { useCallback } from 'react';

export interface FormBuilderProps {
  formTemplate?: FormGroupModel[],
  validationTemplate?: string,
}

interface FormBuilderModel {
  control: Control<FieldValues>,
  register: UseFormRegister<FieldValues>,
  setValue: UseFormSetValue<FieldValues>,
  watch: UseFormWatch<FieldValues>
}

const setControls = (controls: FormInputModel[], formProps: FormBuilderModel) => controls.map((control: FormInputModel) => {
  const { label, key } = control;
  return ({
    id: uuid(),
    ...control,
    key: key || label.toLowerCase(),
    ...formProps
  });
});

const setGroup = (template: FormGroupModel, formProps: FormBuilderModel) => {
  if (template !== undefined) {
    const { controls } = template;

    return {
      id: uuid(),
      ...template,
      controls: setControls(controls, formProps)
    };
  }
  return null;
};

const setForm = (formTemplate, formProps: FormBuilderModel): FormGroupModel[] => {
  return formTemplate.map((groupTemplate: FormGroupModel) => setGroup(groupTemplate, formProps));
}

const useFormBuilder = (options?: FormBuilderProps) => {

  const { formTemplate, validationTemplate } = options
  const { schema } = useValidation({ validationTemplate })

  const
    {
      control,
      register,
      setValue,
      handleSubmit,
      watch,
      formState: { errors, isValid },
    } = useForm( 
      { 
        mode: 'onBlur', 
        resolver: joiResolver(schema)
      }
    );

  const form = useMemo(() =>  setForm(formTemplate, { register, control, setValue, watch }), [formTemplate]);

  return {
    setControls,
    setGroup,
    setForm,
    handleSubmit,
    formSchema: form,
    errors,
    isValid
  };
};

export default useFormBuilder;