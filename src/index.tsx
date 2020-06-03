import * as serviceWorker from './serviceWorker';
import {StateType} from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "./StoreContext";
// !!!! import store, {SSSSStateType} from "./redux/redux-store"; замут с типизацией

export let rerenderEntireTree = (state: StateType) => {
// !!! export let rerenderEntireTree = (state: SSSSStateType) => { замут с типизацией

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
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
