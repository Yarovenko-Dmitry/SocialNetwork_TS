import {DialogType, MessageType, PostType} from "../index";
import {rerenderEntireTree} from "../rerender";

export type StateType = {
  profilePage: {
    posts: Array<PostType>,
    newPostText: string
  },
  dialogsPage: {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
  },
  sidebar: any
};

let state: StateType = {
  profilePage: {
    posts:
      [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 48},
        {id: 3, message: 'Second post', likesCount: 8},
        {id: 4, message: 'e-ge-gey', likesCount: 4}
      ],
    newPostText: 'exampl test'
  },
  dialogsPage: {
    dialogs:
      [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Alexander'},
        {id: 4, name: 'Victoriya'},
        {id: 5, name: 'Nadezhda'},
        {id: 6, name: 'Alex'}
      ],
    messages:
      [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What it is'},
        {id: 3, message: 'Go-go-go'},
        {id: 4, message: 'Good'},
        {id: 5, message: 'thanksgiving'},
        {id: 6, message: 'fame and honor'}
      ]
  },
  sidebar: {}
};

export type addPostType = () => void

export let addPost = () => {
  let newPost: PostType = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export type updateNewPostTextType = (text: string) => void

export let updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;