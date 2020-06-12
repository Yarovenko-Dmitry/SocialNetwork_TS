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
import UsersContainer from "./components/Users/UsersConteiner";

const App = () => {
  return (

    <div className={'app-wrapper'}>
      <Header/>
      <Navbar/>
      <div className={'app-wrapper-content'}>
        <Route path={'/profile'}
               render={() => <Profile/>}/>
        <Route path={'/dialogs'}
               render={() => <DialogsContainer/>}/>
        <Route path={'/users'}
               render={() => <UsersContainer/>}/>


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
