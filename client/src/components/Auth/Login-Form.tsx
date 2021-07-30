import { FunctionComponent, useState } from "react";

import { Grid } from "@material-ui/core/";
import Form from "../Form/Form";
import LoginTitle from "./Login-Title";

import { useNavigate } from "react-router-dom";

import { LoginModel } from "../../models/user-model";
import { FormGroupModel } from "../../models/form-model";

import PasswordController from "../Form/PasswordController";

export interface LoginFormProps { }

const LoginForm: FunctionComponent<LoginFormProps> = () => {

  const formTemplate: FormGroupModel[] =
    [{
      controls:
        [
          { key: "username", label: 'Username', size: 10 },
          {
            key: 'password',
            label: 'Password',
            size: 10,
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

  return (
    <Grid container>
      <Grid item lg={12} xs={12}>
        <LoginTitle />
      </Grid>
      <Grid item lg={12} xs={12}>
        <Form
          formTemplate={formTemplate}
          schema="login"
          onSubmit={onSubmit}
          buttonProps={{ buttonTitle: "Login", hasButton: true }}
        />
      </Grid>
    </Grid>

  );
};

export default LoginForm;
