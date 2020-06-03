import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/store";

type ProfileType = {
  store: StoreType
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