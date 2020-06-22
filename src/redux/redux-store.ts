import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./siderbar-reducer";
import usersReducer, {UserType} from "./users-reducer";

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
  usersPage: {
    users : Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
  }
  sidebar: any
};

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

export type FollowACType = {
  type: 'FOLLOW',
  userId: number
};

export type UnFollowACType = {
  type: 'UNFOLLOW',
  userId: number
};

export type SetUsersACType = {
  type: 'SET_USERS',
  users: Array<UserType>
};

export type SetCurrentPageACType = {
  type: 'SET_CURRENT_PAGE',
  currentPage: number
};

export type SetTotalUserCountACType = {
  type: 'SET_TOTAL_USERS_COUNT',
  count: number
};

export type ToggleIsFetchingACType = {
  type: 'TOGGLE_IS_FETCHING',
  isFetching: boolean
};

export type ActionType =
  AddPostActionType
  | OnPostChangeActionType
  | SendMessageActionType
  | UpdateNewMessageBodyChangeActionType
  | FollowACType
  | UnFollowACType
  | SetUsersACType
  | SetCurrentPageACType
  | SetTotalUserCountACType
  | ToggleIsFetchingACType;

export type DialogsPageType = {
  dialogs: Array<DialogType>,
  messages: Array<MessageType>,
  newMessageBody: string
};

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer
});

export type ReduxStoreType = Store<StateType, ActionType>

let store: ReduxStoreType = createStore(reducers);

export default store;