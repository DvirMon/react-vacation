import { FunctionComponent, useMemo } from "react";
import {
  makeStyles,
  Box, Button, Grid, Theme
} from '@material-ui/core';

import FormGroup from './FormGroup';

import useFormBuilder from "../../hooks/useFormBuilder";

import { FormGroupModel } from "../../models/form-model";


const useStyles = makeStyles<Theme>((theme: Theme) => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '40%',
  },
  formButton: {
    width: '100%',
    height: 50,
  }
}))

export interface FormButtonProps {
  hasButton?: boolean
  buttonTitle?: string,
  buttonColor?: "inherit" | "default" | "primary" | "secondary",
}

export interface FormProps {
  formTemplate: FormGroupModel[],
  schema?: string,
  onSubmit: any,
  buttonProps: FormButtonProps
}

const Form: FunctionComponent<FormProps> = (
  {
    schema,
    formTemplate,
    onSubmit,
    buttonProps,
  }
) => {

  const template = useMemo(() => formTemplate, [formTemplate])
  const { hasButton, buttonColor, buttonTitle } = useMemo(() => buttonProps || {}, [])
  
  const { formSchema, handleSubmit, isValid } = useFormBuilder({ formTemplate: template, validationTemplate: schema });

  const classes = useStyles()
  return (

    <form onSubmit={handleSubmit(onSubmit)} className={classes.center}>
      <Grid container>

        <Grid item xs={12}>
          {formSchema.map((group: FormGroupModel) => (
            <FormGroup key={group.id} group={group} />
          ))}
        </Grid>

        {hasButton && (
          <Grid item xs={12} className={classes.center}>
            <Box className={classes.buttonContainer}>
              <Button
                className={classes.formButton}
                type="submit"
                variant="contained"
                color={buttonColor || "primary"}
              >
                {buttonTitle || 'Save'}
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </form>

  );
}

export default Form;