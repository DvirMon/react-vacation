import {
  makeStyles,
  Grid,
  Theme
} from '@material-ui/core';
import { FunctionComponent } from 'react';
import { DeepMap, FieldErrors, FieldValues } from 'react-hook-form';
import { FormGroupModel } from '../../models/form-model';
import FormInput from './FormInput';

const useStyles = makeStyles((theme: Theme) => ({
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
  errors?: DeepMap<FieldValues, FieldErrors>
}

const FormGroup: FunctionComponent<FormGroupProps> = (
  {
    group,
    errors
  }
) => {

  {
    const { controls, } = group;
    const classes = useStyles();
    return (

      <Grid item xs={12}>

        <Grid container spacing={3} className={classes.container}>
          {controls.map((formControl) => {
            const {
              id, key,  label, size
            } = formControl;
            return (
              <Grid key={id} item xs={size || 2}>
                <FormInput formControl={formControl} error={{ ...errors[key], key: label.toLowerCase() }} />
              </Grid>
            );
          })}
        </Grid>

      </Grid>
    );
  };
}

export default FormGroup;
