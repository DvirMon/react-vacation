import { FunctionComponent, Props } from "react";

import { RegisterModel } from "../../models/user-model";
import { FormGroupModel } from "../../models/form-model";

import Form from "../Form/Form";
import PasswordController from "../Form/PasswordController";
import MuiTextField from "../Form/MuiTextField";
import { Card, CardActions, CardContent, makeStyles, Theme } from "@material-ui/core";

// import generator from "generate-password";
const useStyles = makeStyles<Theme>((theme: Theme) => ({
  card: {
    width: '80%',
    [theme.breakpoints.down('xs')]: {
      width: "95% !important",
    },
    padding: theme.spacing(2)
  },
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
  const onSubmit = (data) => console.log(data)
  const classes = useStyles()
  return (

    <Card className={classes.card}>
      <CardContent >
        <Form
          formTemplate={formTemplate}
          schemaType="register"
          onSubmit={onSubmit}
          buttonProps={{ buttonTitle: "Sign in", buttonColor: "secondary", hasButton: true }}
        />
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>


  );
}

export default RegisterForm;
