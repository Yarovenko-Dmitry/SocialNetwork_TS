import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {rerenderEntireTree} from "./rerender";

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

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App
//       state={state}
//       addPost={addPost}/>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

rerenderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
