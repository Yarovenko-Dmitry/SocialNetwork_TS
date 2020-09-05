import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import styles from '../common/FormsControls/FormsControls.module.css'
import {StateType} from '../../redux/redux-store';

type LoginFormDataType = {
  email: string,
  password: string,
  rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Email'}
               name={'email'}
               component={Input}
               validate={[required]}
        />
      </div>
      <div>
        <Field placeholder={'Password'}
               name={'password'}
               type={'password'}
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
      {props.error && <div className={styles.formSummaryError}>
        {props.error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

type LoginType = {
  isAuth: boolean,
  login: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props:LoginType) => {
  debugger
  const onSubmit = (formData:LoginFormDataType) => {
    console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
};

const mapStateToProps = (state: StateType) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);