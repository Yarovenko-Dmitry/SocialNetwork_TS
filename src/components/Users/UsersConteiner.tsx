import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unFollow,
  UserType
} from "../../redux/users-reducer";
import {StateType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

export type UsersContainerType = {
  users: Array<UserType>,
  follow: (userId: number) => void,
  unFollow: (userId: number) => void,
  setUsers: (users: Array<UserType>) => void,
  currentPage: number,
  pageSize: number,
  setTotalUsersCount: (pageNamber: number) => void,
  setCurrentPage: (totalCount: number) => void,
  totalUsersCount: number,
  toggleIsFetching: (isFetching: boolean) =>void,
  isFetching: boolean
}
// в React.Component приходят <тип пропса, стейт>
// class Users extends React.Component<UsersContainerType, {}> {

class UsersContainer extends React.Component<UsersContainerType> {

  // constructor(props: UsersContainerType) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
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
      />
    </>
  }
}

let mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, {
  follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer);