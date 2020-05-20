import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

// addPost('test 123');

export let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}