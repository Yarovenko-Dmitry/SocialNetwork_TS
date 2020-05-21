import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {DialogType, MessageType, PostType} from "../../index";
import {AddPostType, DispatchType, UpdateNewPostTextType} from "../../redux/state";

type ProfileType = {
  profilePage: {
    posts: Array<PostType>,
    newPostText: string
  },
  // addPost: AddPostType,
  // updateNewPostText: UpdateNewPostTextType
  dispatch: DispatchType
};

const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;