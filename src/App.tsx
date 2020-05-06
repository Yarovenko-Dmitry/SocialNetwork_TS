import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className={'app-wrapper'}>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
