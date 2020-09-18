import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

export type AddProfileType = {
  isOwner: boolean,
  profile: ProfileType,
  status: string,
  updateStatus: (status: string) => void,
  savePhoto: (file: string) => void
};

const Profile = (props: AddProfileType) => {
  return (
    <div>
      <ProfileInfo isOwner={props.isOwner}
                   profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}
                   savePhoto={props.savePhoto}/>
      <MyPostsContainer/>
    </div>
  )
}


export default Profile;