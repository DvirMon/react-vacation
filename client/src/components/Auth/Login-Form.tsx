import { FunctionComponent, useState } from "react";

import { Card, CardContent, Grid, makeStyles, Theme } from "@material-ui/core/";
import Form from "../Form/Form";
import LoginTitle from "./Login-Title";

import { useNavigate } from "react-router-dom";

import { FormGroupModel } from "../../models/form-model";

import PasswordController from "../Form/PasswordController";
import CardContainer from "../Card";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    padding: theme.spacing(2)
  },
}))

export interface LoginFormProps { }

const LoginForm: FunctionComponent<LoginFormProps> = () => {

  const formTemplate: FormGroupModel[] =
    [{
      controls:
        [
          { label: 'Username' },
          {
            label: 'Password',
            render: true,
            Component: (props) => <PasswordController {...props} />
          }
        ]
    }
    ]


  // state hook
  // const [user, setUser] = useState(new LoginModel());
  // const [asyncError, setServerError] = useState(null);

  const navigate = useNavigate()

  // function to handle login request
  const handleLogIn = async () => {
    navigate('browser')

    // handle request
    try {
      // await loginService.login(user);
    } catch (err) {
      handleErrorResponse(err);
    }
  };

  const handleErrorResponse = (err: any) => {
    if (err.response?.status === 409) {
      const asyncError = err.response.data;
      // setServerError(asyncError);
    } else {
      console.log(err);
    }
  };

  const onSubmit = (data) => console.log(data)
  const classes = useStyles()

  return (
    <Grid container className={classes.center}>
      <Grid item lg={12} xs={12}>
        <LoginTitle />
      </Grid>
      <Grid item lg={8} xs={11} className={classes.center}>
        <CardContainer>
          <Form
            formTemplate={formTemplate}
            schemaType="login"
            onSubmit={onSubmit}
            buttonProps={{ buttonTitle: "Login", hasButton: true }}
          />
        </CardContainer>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
