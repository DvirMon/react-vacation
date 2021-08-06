import { FunctionComponent } from "react";

import { FormGroupModel } from "../../models/form-model";

import Form from "../Form/Form";
import PasswordController from "../Form/PasswordController";

import CardContainer from '../CardContainer'
import { Button, Grid, makeStyles, Theme } from "@material-ui/core";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme: Theme) => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(2)
  }
}))

const formTemplate: FormGroupModel[] =
  [
    {
      controls:
        [
          { key: "firstName", label: 'First Name' },
          { key: "lastName", label: 'Last Name' },
          { label: 'Username' },
          {
            label: 'Password',
            render: true,
            Component: (props) => <PasswordController {...props} />
          }]
    }
  ]


const RegisterForm: FunctionComponent = () => {
  const navigate = useNavigate()
  const onSubmit = (data) => console.log(data)
  const classes = useStyles()
  return (

    <CardContainer>
      <Grid container>
        <Grid className={classes.buttonContainer} item xs={12}>
          <Button
            fullWidth
            disableRipple
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
          >
            Back to Login
          </Button>
        </Grid>
      </Grid>
      <Form
        formTemplate={formTemplate}
        schemaType="register"
        onSubmit={onSubmit}
        buttonProps={{ buttonTitle: "Sign in", buttonColor: "secondary", hasButton: true }}
      />
    </CardContainer>

  );
}

export default RegisterForm;
