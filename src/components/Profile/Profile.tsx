import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {DialogType, MessageType, PostType} from "../../index";
import {addPostType} from "../../redux/state";

type ProfileType = {
  state: {
    posts: Array<PostType>
  },
  addPost: addPostType
};

const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts
        posts={props.state.posts}
        addPost={props.addPost}/>
    </div>
  )
}

export default Profile;