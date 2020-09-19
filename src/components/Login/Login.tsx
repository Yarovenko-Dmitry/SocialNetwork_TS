import React from "react";
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, GetStringKeys, Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import styles from '../common/FormsControls/FormsControls.module.css'
import {AppStateType} from '../../redux/redux-store';

type LoginFormDataType = {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
}

type LoginFormOwnProps = {
  captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input)}
        {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, {type: 'password'})}
        {createField<LoginFormValuesTypeKeys>(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember Me')}
      </div>

      {captchaUrl && <img src={captchaUrl}/>}
      {captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input, {})}

      {error && <div className={styles.formSummaryError}>
        {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormDataType>

const LoginReduxForm = reduxForm<LoginFormDataType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type LoginType = {
  isAuth: boolean,
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void,
  captchaUrl: null | string
}

const Login = (props: LoginType) => {
  const onSubmit = (formData: LoginFormDataType) => {
    console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  )
};

const mapStateToProps = (state: AppStateType) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
