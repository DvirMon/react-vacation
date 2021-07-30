import { FunctionComponent } from "react";

import { FormGroupModel } from "../../models/form-model";

import Form from "../Form/Form";
import PasswordController from "../Form/PasswordController";

import CardContainer from '../Card'

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
  return (

    <CardContainer>
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
