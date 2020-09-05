import React, {Dispatch} from "react";
import {actions, ActionType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
};

export type DispatchType = Dispatch<ActionType>;

const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(actions.addPostActionCreator(newPostText));
    },
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;