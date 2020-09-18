import React, {FC} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
  getStatus,
  getUserProfile,
  ProfileType,
  savePhoto,
  saveProfile,
  updateStatus
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";

export type ProfileContainerType = {
  getUserProfile: (userId: string) => void,
  profile: ProfileType,
  isAuth: boolean,
  getStatus: (userId: string) => void,
  status: string,
  updateStatus: (status: string) => void,
  authorizedUserID: string,
  savePhoto: (file: File) => void,
  saveProfile: (profile: ProfileType) => Promise<any>
}



type AddPropsUserIdType = { userId: string };

type PrevPropsType ={

}

type PrevStateType ={

}

type SnapshotType ={

}

class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps<AddPropsUserIdType>> {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserID;
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.refreshProfile()
  }

  render() {

    return (
      <Profile {...this.props}
               isOwner={!this.props.match.params.userId}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}
               savePhoto={this.props.savePhoto}
      />
    )
  }
}

let mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserID: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose<FC>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
  // withAuthRedirect - убрали на время, чтобы не мешало
)(ProfileContainer)