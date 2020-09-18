import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import userPhoto from "../../../../assets/images/default_user.png"
import ProfileDataFormReduxForm from './ProfileDataForm';
import {ContactsType, ProfileType} from '../../../../redux/profile-reducer';


type ProfileInfoType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e: any) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  /*  Димыча
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
    }*/

  /* // const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
   const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
     e.target.files && savePhoto(e.target.files[0])
   */


  const onSubmit = (formData: ProfileType) => {
    if (saveProfile) {
      saveProfile(formData).then(
        () => {
          console.log(formData);
          setEditMode(false);
        })
    }
  }


  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        {editMode
          ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
          : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
            setEditMode(true)
          }}/>}
        <ProfileStatusWithHooks status={status}
                                updateStatus={updateStatus}/>
      </div>
    </div>
  )
};

type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
  return (
    <div>
      {isOwner && <div>
        <button onClick={goToEditMode}>Edit</button>
      </div>}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob &&
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>
      }
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
      })}
      </div>
    </div>
  )
}

type ContactsPropsType = {
  contactTitle: string
  contactValue: string
}
const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}