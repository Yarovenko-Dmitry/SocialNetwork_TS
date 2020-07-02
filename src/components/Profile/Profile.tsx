import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

export type AddProfileType = {
  profile: ProfileType,
  status: string,
  updateStatus: (status: string) =>void
};

const Profile = (props: AddProfileType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;