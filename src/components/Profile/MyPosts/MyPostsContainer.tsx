import {Dispatch} from "react";
import {actions, ActionsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
};

export type DispatchType = Dispatch<ActionsType>;

const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(actions.addPostActionCreator(newPostText));
    },
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;