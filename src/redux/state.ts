import {DialogType, MessageType, PostType} from "../index";

export type StateType = {
  profilePage: {
    posts: Array<PostType>,
    newPostText: string
  },
  dialogsPage: {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
    newMessageBody: string
  },
  sidebar: any
};

export type GetStateType = () => StateType;
export type CallSubscriberType = (state: StateType) => void;
export type ObserverType = (state: StateType) => void;

export type SubscribeType = (observer: ObserverType) => void;
export type DispatchType = (action: ActionType) => void;

export type AddPostActionCreatorType = () => AddPostActionType;
export type UpdateNewPostTextActionCreatorType = (text: string) => OnPostChangeActionType;

export type SendMessageActionCreatorType = () => SendMessageActionType;
export type UpdateNewMessageBodyCreatorType = (body: string) => UpdateNewMessageBodyChangeActionType;

export type StoreType = {
  _state: StateType,
  _callSubscriber: CallSubscriberType,
  getState: GetStateType,
  subscribe: SubscribeType,
  dispatch: DispatchType
}

export type AddPostActionType = {
  type: 'ADD-POST',
};

export type OnPostChangeActionType = {
  type: 'UPDATE-NEW-POST-TEXT',
  newText: string
};

export type SendMessageActionType = {
  type: 'SEND-MESSAGE',
};

export type UpdateNewMessageBodyChangeActionType = {
  type: 'UPDATE-NEW-MESSAGE-BODY',
  body: string
};

export type ActionType =
  AddPostActionType
  | OnPostChangeActionType
  | SendMessageActionType
  | UpdateNewMessageBodyChangeActionType;

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let store: StoreType = {
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
        ],
      newMessageBody: ''
    },
    sidebar: {}
  },

  _callSubscriber(state: StateType) {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer: ObserverType) {
    this._callSubscriber = observer;
  },

  dispatch(action: ActionType) {
    if (action.type === ADD_POST) {
      let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({id: 7, message: body})
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator: AddPostActionCreatorType = () =>
  ({type: ADD_POST});
export const updateNewPostTextActionCreator: UpdateNewPostTextActionCreatorType = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageActionCreator : SendMessageActionCreatorType = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator : UpdateNewMessageBodyCreatorType = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;

