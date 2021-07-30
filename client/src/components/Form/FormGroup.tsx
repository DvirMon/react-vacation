import { FunctionComponent } from "react";
import {
  makeStyles,
  Box, Grid, Divider
} from '@material-ui/core';
import FormInput from './FormInput';
import { FormGroupModel, FormInputModel } from "../../models/form-model";
import { DeepMap, FieldError, FieldValues } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'center',
  },
  divider: {
    height: '100% !important',
  },
  button: {
    fontSize: 16,
    width: '10%'
  },
  title: {
    fontWeight: 600
  }
}));

export interface FormGroupProps {
  group: FormGroupModel
  errors?: DeepMap<FieldValues, FieldError>
}

const FormGroup: FunctionComponent<FormGroupProps> = (
  {
    group,
    errors
  }
) => {

  const { title, divider, controls, } = group;

  const classes = useStyles();

  return (
    <Grid item xs={12}>

      {divider

        && (
          <Box mb={2}>
            <Divider />
          </Box>
        )}
      {title &&
        <Box mb={2}>
            {title}
        </Box>
      }

      <Grid container spacing={3} className={classes.container}>
        {controls.map((control: FormInputModel) => {
          const { id, size, key, label } = control;
          return (
            <Grid key={id} item xs={size || 12} > 
              <FormInput formControl={control}/>
            </Grid>
          );
        })}
      </Grid>

    </Grid>
  );
}

export default FormGroup;