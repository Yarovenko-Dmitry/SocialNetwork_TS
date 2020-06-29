import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


const mapStateToProps = (state: StateType) => ({
  profile: state.profilePage.profile,
});

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);