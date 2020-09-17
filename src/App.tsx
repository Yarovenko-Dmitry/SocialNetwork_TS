import React from 'react';
import {Route, withRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersConteiner";
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {StateType} from './redux/redux-store';
import {withSuspense} from './hoc/withSuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


type MapStatePropType = {
  initialized: boolean
}

type MapDispatchPropType = {
  initializeApp: () => void
}

class App extends React.Component<MapStatePropType & MapDispatchPropType> {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className={'app-wrapper'}>
        <HeaderContainer/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
          <Route path={'/profile/:userId?'}
                 render={withSuspense(ProfileContainer)}/>
          <Route path={'/dialogs'}
                 render={withSuspense(DialogsContainer)}/>
          <Route path={'/users'}
                 render={() => <UsersContainer/>}/>
          <Route path={'/login'}
                 render={() => <LoginPage/>}/>


          <Route
            path={'/news'}
            component={News}/>
          <Route
            path={'/music'}
            component={Music}/>
          <Route
            path={'/settings'}
            component={Settings}/>
        </div>
      </div>
    );
  }
}

const mapStateToPropse = (state: StateType): MapStatePropType => ({
  initialized: state.app.initialized
})

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToPropse, {initializeApp}))(App);
