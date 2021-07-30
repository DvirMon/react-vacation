import {
  makeStyles,
  Box, Divider, Button, Grid, Theme
} from '@material-ui/core';
import { FunctionComponent } from 'react';
import useFormBuilder from '../../hooks/useFormBuilder';
import { FormGroupModel } from '../../models/form-model';
import FormGroup from './FormGroup';

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
  schemaType?: string,
  onSubmit: any,
  buttonProps: FormButtonProps
}

const Form: FunctionComponent<FormProps> = (
  {
    schemaType, 
    formTemplate, 
    onSubmit, 
    buttonProps
  }) => {
  const {
    formSchema, handleSubmit, errors
  } = useFormBuilder(
    {
      formTemplate,
      validationTemplate: schemaType
    }
  );

  const { hasButton, buttonTitle, buttonColor } = buttonProps

  const classes = useStyles();

  return (

    <form onSubmit={handleSubmit(onSubmit)} className={classes.center}>
      <Grid container spacing={3}>

        {formSchema.map((group) => (
          <Grid item xs={12}>
            <FormGroup key={group.id} group={group} errors={errors} />
          </Grid>
        ))}

        {hasButton && (
          <Grid item xs={12} className={classes.center}>
            <Box mb={2}>
              <Divider />
            </Box>

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
};

export default Form;
