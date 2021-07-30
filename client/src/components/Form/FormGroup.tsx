import React from 'react';
import {
  makeStyles,
  Grid
} from '@material-ui/core';
import FormInput from './FormInput';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '0px !important',
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

const FormGroup = ({ group, errors }) => {
  const { controls, } = group;
  const classes = useStyles();
  return (

    <Grid item xs={12}>

      <Grid container spacing={3}>
        {controls.map((formControl) => {
          const {
            size, key, label
          } = formControl;
          return (
            <Grid key={key} item xs={size || 2}>
              <FormInput formControl={formControl} error={{ ...errors[key], key: label.toLowerCase() }} />
            </Grid>
          );
        })}
      </Grid>

    </Grid>
  );
};

export default FormGroup;
