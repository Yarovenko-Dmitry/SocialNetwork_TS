import React, {FC} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router";
// import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from "redux";

export type ProfileContainerType = {
  getUserProfile: (userId: string) => void,
  profile: ProfileType,
  isAuth: boolean,
  getStatus: (userId: string) => void,
  status: string,
  updateStatus: (status: string) =>void
}

type AddPropsUserIdType = { userId: string };

class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps<AddPropsUserIdType>> {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = '2';
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
  status: state.profilePage.status
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);


export default compose<FC>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  // withAuthRedirect - убрали на время, чтобы не мешало
)(ProfileContainer)