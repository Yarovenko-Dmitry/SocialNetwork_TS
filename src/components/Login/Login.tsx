import React, {Dispatch} from "react";
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm, SubmitHandler} from 'redux-form';

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

type OwnPropsType = {
  handleSubmit: ()=> void
}

export type DispatchPropsType = {
  onSubmit: (data: FormDataType, dispatch: Dispatch<any>, props: OwnPropsType) => void
}

type MixFormPropsType = OwnPropsType & DispatchPropsType  & InjectedFormProps<FormDataType, OwnPropsType>;


// type LoginFormPropsType = {
//   handleSubmit: () => void
// }
//
// type MixFormType = LoginFormPropsType & SubmitHandler<{}, {}, string>
//
// type DispatchPropsType {
//   onSubmit: (data: OnSubmitDataType, dispatch: Dispatch<any>, props: LoginFormPropsType) => void
// }

const LoginForm: React.FC<MixFormPropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'login'} component={'input'}/>
      </div>
      <div>
        <Field placeholder={'password'} name={'password'} component={'input'}/>
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm<FormDataType,OwnPropsType>({form: 'login'})(LoginForm)


const Login = (props) => {
  const onSubmit = (formData:FormDataType) => {
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