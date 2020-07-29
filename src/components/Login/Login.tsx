import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';

type LoginFormDataType = {
  login: string,
  password: string,
  rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'}
               name={'login'}
               component={Input}
               validate={[required]}
        />
      </div>
      <div>
        <Field placeholder={'password'}
               name={'password'}
               component={Input}
               validate={[required]}
        />
      </div>
      <div>
        <Field type={'checkbox'}
               name={'rememberMe'}
               component={Input}
        /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

const Login = () => {
  const onSubmit = (formData:LoginFormDataType) => {
    console.log(formData)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
};

export default Login;