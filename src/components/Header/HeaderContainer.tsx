import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {StateType} from '../../redux/redux-store';

export type HeaderContainerType = {
  isAuth: boolean,
  login : string,
  setAuthUserData: (userId:string, email:string, login:string) => void,
}

class HeaderContainer extends React.Component<HeaderContainerType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state:StateType) => ({
  isAuth : state.auth.isAuth,
  login : state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);