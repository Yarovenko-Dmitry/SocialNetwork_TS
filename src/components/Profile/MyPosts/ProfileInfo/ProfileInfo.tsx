import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import {AddProfileType} from "../../Profile";
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

export const ProfileInfo: React.FC<AddProfileType> = ({isOwner, profile, status, updateStatus, savePhoto}) => {
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

  return (
    <div>
      <div className={s.descriptionBlock}>
        {
          profile.photos.large ? <img src={profile.photos.large}/> : null
        }
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
        avatar + discription
        <ProfileStatusWithHooks status={status}
                                updateStatus={updateStatus}/>
      </div>
    </div>
  )
};