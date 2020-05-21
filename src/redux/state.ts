import {DialogType, MessageType, PostType} from "../index";

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

export type GetStateType = () => void;
export type CallSubscriberType = () => void;
export type AddPostType = () => void;
export type UpdateNewPostTextType = (text: string) => void;
export type SubscribeType = (state: StateType) => void;
export type DispatchType = (action: ActionType) => void;

export type StoreType = {
  _state: StateType,
  getState: GetStateType,
  _callSubscriber: CallSubscriberType,
  addPost: AddPostType,
  updateNewPostText: UpdateNewPostTextType,
  subscribe: SubscribeType
}

export type ActionType = {
  type: string,
  newText : string
};

let store = {
  _state: {
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
  },
  _callSubscriber(state: StateType) {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer: SubscribeType) {
    this._callSubscriber = observer;
  },


  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText: string) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },


  dispatch(action: ActionType){
    if (action.type === 'ADD-POST'){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;

