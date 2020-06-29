import {Redirect} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {StateType} from '../redux/redux-store';

let mapStateToPropsForRedirect = (state: StateType) => ({
  isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component: any) => {

  class RedirectComponent extends React.Component<any> {

    render() {
      if (!this.props.isAuth) {
        return <Redirect to={'/login'}/>
      }
      return <Component {...this.props}/>
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}



