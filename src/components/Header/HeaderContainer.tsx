import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAuthUserData, setAuthUserData} from '../../redux/auth-reducer';
import {StateType} from '../../redux/redux-store';

export type HeaderContainerType = {
  isAuth: boolean,
  login: string,
  getAuthUserData: () => void,
}

class HeaderContainer extends React.Component<HeaderContainerType> {

  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state: StateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);