import React from "react";
import styles from './FormsControls.module.css';
import {WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';
// 1 в логине не отрабатывает первое поле на валидацию
// 2 логин отправляет на диалогах

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: { touched, error }, children}) => {

  const hasError = touched && error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = (props: WrappedFieldProps) => {

  const {input, meta, ...restProps} = props;

  return (
    <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
  )
}

export const Input = (props: WrappedFieldProps) => {
  const {input, meta, ...restProps} = props;
  return (
    <FormControl {...props}><input {...input} {...restProps}/></FormControl>
  )
}