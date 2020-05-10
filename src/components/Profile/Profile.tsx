import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {DialogType, MessageType, PostType} from "../../index";

type ProfileType = {
  state: {
    posts: Array<PostType>
  }
};

const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}/>
    </div>
  )
}

export default Profile;