import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostType} from "../../index";
import {DispatchType} from "../../redux/state";

type ProfileType = {
  profilePage: {
    posts: Array<PostType>,
    newPostText: string
  },
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