import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SamuraiJSApp} from './App';

ReactDOM.render(<SamuraiJSApp/>, document.getElementById('root'));

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
