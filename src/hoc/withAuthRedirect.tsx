import {Redirect} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';

let mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
});

type MapPropsType = {
  isAuth: boolean
};

type DispatchPropsType = {
  fake: () => void
}

export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {

  debugger

  const RedirectComponent: React.FC<DispatchPropsType & MapPropsType> = (props) => {
    debugger
    let {isAuth, fake, ...restProps} = props;
    if (!isAuth) {
      return <Redirect to={'/login'}/>
    }
    return <Component {...restProps as unknown as WCP}/>
  }

  let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(
    mapStateToPropsForRedirect, {
      fake: () => {
      }
    })
  (RedirectComponent);

  return ConnectedAuthRedirectComponent;
}

// НЕ УДАЛЯТЬ !!!
//                   !!!!!            ТИПИЗАЦИЯ
// https://www.youtube.com/watch?v=TnRx8_n4SYI&feature=youtu.be&list=PLcvhF2Wqh7DM3z1XqMw0kPuxpbyMo3HvN&t=3089

// let mapStateToPropsForRedirect = (state: AppStateType) => ({
//   isAuth: state.auth.isAuth
// });
//
// export const withAuthRedirect = (Component: any) => {
//
//   class RedirectComponent extends React.Component<any> {
//
//     render() {
//       if (!this.props.isAuth) {
//         return <Redirect to={'/login'}/>
//       }
//       return <Component {...this.props}/>
//     }
//   }
//
//   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
//
//   return ConnectedAuthRedirectComponent;
// }
//          ??????????????????????????????????????????????
// что такое FC  as unknown as WCP