import React, {FC} from 'react';
import {connect} from "react-redux";
import {
  follow, getUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unFollow,
  UserType
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

import {StateType} from "../../redux/redux-store";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


export type UsersContainerType = {
  users: Array<UserType>,
  currentPage: number,
  pageSize: number,
  setCurrentPage: (totalCount: number) => void,
  totalUsersCount: number,
  isFetching: boolean,
  toggleFollowingProgress: (isFetching: boolean, userId: string) => void,
  followingInProgress: Array<string>,
  getUsers: (currentPage: number, pageSize: number) => void,
  follow: (userId: string) => void
  unFollow: (userId: string) => void
}
// в React.Component приходят <тип пропса, стейт>
// class Users extends React.Component<UsersContainerType, {}> {

class UsersContainer extends React.Component<UsersContainerType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {

    return <>
      {this.props.isFetching ?
        <Preloader/>
        : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

const mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

// export default withAuthRedirect(connect(mapStateToProps, {
//   follow, unFollow, setCurrentPage,
//   toggleFollowingProgress, getUsers: getUsers
// })(UsersContainer));

export default compose<FC>(
  connect(mapStateToProps, {follow, unFollow, setCurrentPage, toggleFollowingProgress, getUsers: getUsers}),
  withAuthRedirect
)(UsersContainer);