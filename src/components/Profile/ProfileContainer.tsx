import React, {FC} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";

export type ProfileContainerType = {
  getUserProfile: (userId: string) => void,
  profile: ProfileType,
  isAuth: boolean,
  getStatus: (userId: string) => void,
  status: string,
  updateStatus: (status: string) =>void,
  authorizedUserID: string
}

type AddPropsUserIdType = { userId: string };

class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps<AddPropsUserIdType>> {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserID;;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {

    return (
      <Profile {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}/>
    )
  }
}

let mapStateToProps = (state: StateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserID: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose<FC>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  // withAuthRedirect - убрали на время, чтобы не мешало
)(ProfileContainer)