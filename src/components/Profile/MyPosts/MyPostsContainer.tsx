import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/store";

export type MyPostsContainerType = {
  store: StoreType
};

const MyPostsContainer = (props: MyPostsContainerType) => {

  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text: string) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts updatedNewPostText={onPostChange}
             addPost={addPost}
             posts={state.profilePage.posts}
             newPostText={state.profilePage.newPostText}
    />
  )
}

export default MyPostsContainer;