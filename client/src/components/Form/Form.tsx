import {
  makeStyles,
  Box, Divider, Button, Grid
} from '@material-ui/core';
import useFormBuilder from '../../hooks/useFormBuilder';
import FormGroup from './FormGroup';

const Form = ({
  schemaType, formTemplate, onSubmit, buttonProps
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

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>

        {formSchema.map((group) => (
          <Grid item xs={12}>
            <FormGroup group={group} errors={errors} />
          </Grid>
        ))}

        {hasButton && (
          <Grid item xs={12}>
            <Box mb={2}>
              <Divider />
            </Box>

            <Box display="flex">
              <Button
                type="submit"
                color="primary"
                variant="contained"
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
