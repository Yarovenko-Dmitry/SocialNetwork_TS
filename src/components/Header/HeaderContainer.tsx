import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout} from '../../redux/auth-reducer';
import {StateType} from '../../redux/redux-store';

export type HeaderContainerType = {
  isAuth: boolean,
  login: string,
  logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {

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

export default connect(mapStateToProps, {logout})(HeaderContainer);