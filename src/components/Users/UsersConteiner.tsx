import React, {FC} from 'react';
import {connect} from "react-redux";
import {actions, follow, requestUsers, unFollow, UserType} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from '../../redux/users-selectors';


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

const mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

const setCurrentPage = actions.setCurrentPage
const toggleFollowingProgress = actions.toggleFollowingProgress

export default compose<FC>(
  connect(mapStateToProps, {follow, unFollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers}),
  withAuthRedirect
)(UsersContainer);