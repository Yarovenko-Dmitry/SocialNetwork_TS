import React, {FC} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from "redux";

export type ProfileContainerType = {
  getUserProfile: (userId: string) => void,
  profile: ProfileType,
  isAuth: boolean
}
type AddPropsUserIdType = { userId: string };

class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps<AddPropsUserIdType>> {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = '2';
    }
    this.props.getUserProfile(userId);
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state: StateType) => ({
  profile: state.profilePage.profile,
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);


export default compose<FC>(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  // withAuthRedirect - убрали на время, чтобы не мешало
)(ProfileContainer)