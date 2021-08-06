import { FunctionComponent, useState } from "react";

import { Grid, makeStyles, Theme } from "@material-ui/core/";
import Form from "../Form/Form";
import LoginTitle from "./Login-Title";

import { useNavigate } from "react-router-dom";
import { useHttp } from "../../services/http-service";

import { LoginModel } from "../../models/user-model";
import { FormGroupModel } from "../../models/form-model";

import PasswordController from "../Form/PasswordController";
import CardContainer from "../CardContainer";

import { environment } from "../../environment";

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

const url = `${environment.server}"/api/auth/login`

const LoginForm: FunctionComponent<LoginFormProps> = () => {

  const navigate = useNavigate()

  // state hook
  // const [user, setUser] = useState(new LoginModel());
  // const [asyncError, setServerError] = useState(null);

  const { post } = useHttp()

  // function to handle login request
  const handleLogIn = async (user: LoginModel) => {

    // handle request
    try {

      const data = await post(url, user);
      console.log(data)

      // navigate('browser')
      // await loginService.login(user);
    } catch (err) {
      handleErrorResponse(err);
    }
  };

  const handleErrorResponse = (err: any) => {
    if (err.response?.status === 409) {
      const asyncError = err.response.data;
      // setServerError(asyncError);
      console.log(err);
    } else {
      console.log(err);
    }
  };

  const onSubmit = (data) => handleLogIn(data)
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
