import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";
import Users from "./Users";
import {DispatchType} from "../Profile/MyPosts/MyPostsContainer";
import {StateType} from "../../redux/store";

let mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch:DispatchType) => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId: number) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUsersAC(users));
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;