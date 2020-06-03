import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DispatchType, StateType, StoreType} from "./redux/store";

type AppType = {
  state: StateType,
  dispatch: DispatchType,
  store: StoreType
};

const App = (props: AppType) => {
  return (

    <div className={'app-wrapper'}>
      <Header/>
      <Navbar/>
      <div className={'app-wrapper-content'}>
        <Route path={'/profile'}
               render={() => <Profile
                 store={props.store}/>}/>
        <Route path={'/dialogs'}
               render={() => <DialogsContainer
                 store={props.store}/>}/>


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
