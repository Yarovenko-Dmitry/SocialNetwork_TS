import * as serviceWorker from './serviceWorker';
import {StateType} from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";

export let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

export type PostType = {
  id: number,
  message: string,
  likesCount: number
};

export type DialogType = {
  id: number,
  name: string,
};

export type MessageType = {
  id: number,
  message: string,
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
