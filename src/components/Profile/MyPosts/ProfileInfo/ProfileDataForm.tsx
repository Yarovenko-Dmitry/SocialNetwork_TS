import React from 'react';
import {createField, GetStringKeys, Input, Textarea} from '../../../common/FormsControls/FormsControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import s from './ProfileInfo.module.css'
import styles from '../../../common/FormsControls/FormsControls.module.css';
import {ProfileType} from '../../../../redux/profile-reducer';

type PropsType = {
  profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

// export const ProfileDataForm = ({handleSubmit, profile, error}) => {
const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save Data</button>
      </div>
      {error && <div className={styles.formSummaryError}>
        {error}
      </div>}
      <div>
        <b>Full name</b>:
        {createField<ProfileTypeKeys>('Full name', 'fullName', [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
      </div>

      <div>
        <b>My professional skills</b>:
        {createField<ProfileTypeKeys>('My professional skills', 'lookingForAJobDescription', [], Textarea)}
      </div>

      <div>
        <b>About me</b>:
        {createField<ProfileTypeKeys>('About me', 'aboutMe', [], Textarea)}
      </div>
      <div>
        <b>contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <div key={key} className={s.contact}>
          <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
        </div>
      })}
      </div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;