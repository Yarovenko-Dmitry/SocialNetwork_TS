import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {AddPostType, DispatchType, StateType, UpdateNewPostTextType} from "./redux/state";

type AppType = {
  state: StateType,
  // addPost: AddPostType
  // updateNewPostText: UpdateNewPostTextType
  dispatch: DispatchType
};

const App = (props: AppType) => {
  return (

    <div className={'app-wrapper'}>
      <Header/>
      <Navbar/>
      <div className={'app-wrapper-content'}>
        <Route path={'/profile'}
               render={() => <Profile
                 profilePage={props.state.profilePage}
                 dispatch={props.dispatch}/>}/>
        <Route path={'/dialogs'}
               render={() => <Dialogs
                 state={props.state.dialogsPage}/>}/>


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

export default App;
