import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/redux-store";

type ProfileType = {
  store: ReduxStoreType
};

const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;