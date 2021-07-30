import {
  makeStyles,
  Box, Divider, Button, Grid, Theme, GridSize
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
    // width: '100%',
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
  buttonSize?: GridSize
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

  const { hasButton, buttonTitle, buttonColor, buttonSize } = buttonProps

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
          <>
            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={buttonSize || 12} className={classes.center}>
              <Button
                className={classes.formButton}
                fullWidth
                type="submit"
                variant="contained"
                color={buttonColor || "primary"}
              >
                {buttonTitle || 'Save'}
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </form>

  );
};

export default Form;
