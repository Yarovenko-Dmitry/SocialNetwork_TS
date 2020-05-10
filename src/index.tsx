import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export type PostType = {
  id: number,
  message: string,
  likesCount: number
};

let posts: Array<PostType> = [
  {id: 1, message: 'Hi, how are you?', likesCount: 0},
  {id: 2, message: 'It\'s my first post', likesCount: 48},
  {id: 3, message: 'Second post', likesCount: 8},
  {id: 4, message: 'e-ge-gey', likesCount: 4}
];

export type DialogType = {
  id: number,
  name: string,
};

let dialogs: Array<DialogType> = [
  {id: 1, name: 'Dmitry'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Alexander'},
  {id: 4, name: 'Victoriya'},
  {id: 5, name: 'Nadezhda'},
  {id: 6, name: 'Alex'}
];

export type MessageType = {
  id: number,
  message: string,
};

let messages: Array<MessageType> = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'What it is'},
  {id: 3, message: 'Go-go-go'},
  {id: 4, message: 'Good'},
  {id: 5, message: 'thanksgiving'},
  {id: 6, message: 'fame and honor'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
