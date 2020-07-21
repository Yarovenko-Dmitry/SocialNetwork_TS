import React, {Dispatch} from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

import {ActionType, StateType} from "../../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
};

export type DispatchType = Dispatch<ActionType>;

const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    // updatedNewPostText: (text: string) => {
    //   let action = updateNewPostTextActionCreator(text);
    //   dispatch(action);
    // },
    addPost: (newPostText: string) => {
      dispatch(addPostActionCreator(newPostText));
    },
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;