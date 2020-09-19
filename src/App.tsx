import React from 'react';
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersConteiner";
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store, {AppStateType} from './redux/redux-store';
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
          <Switch>
            <Route exact path={'/'}
                   render={() => <Redirect to={'/profile'}/>}/>
            <Route path={'/profile/:userId?'}
                   render={withSuspense(ProfileContainer)}/>
            <Route path={'/dialogs'}
                   render={withSuspense(DialogsContainer)}/>
            <Route path={'/users'}
                   render={() => <UsersContainer/>}/>
            <Route path={'/login'}
                   render={() => <LoginPage/>}/>

            <Route path={'/news'}
                   component={News}/>
            <Route path={'/music'}
                   component={Music}/>
            <Route path={'/settings'}
                   component={Settings}/>
            <Route path={'/settings'}
                   component={Settings}/>
            <Route path={'*'}
                   render={() => <div> 404 NOT FOUND</div>}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToPropse = (state: AppStateType): MapStatePropType => ({
  initialized: state.app.initialized
})

const AppContainer: any = compose(
  withRouter,
  connect(mapStateToPropse, {initializeApp}))(App);

export const SamuraiJSApp = () => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </HashRouter>
}