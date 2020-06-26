import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router";

export type ProfileContainerType = {
  setUserProfile: (profile: ProfileType) => void,
  profile: ProfileType
}
type AddPropsUserIdType = { userId: string };

class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps<AddPropsUserIdType>> {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = '2';
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state: StateType) => ({
  profile: state.profilePage.profile
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);