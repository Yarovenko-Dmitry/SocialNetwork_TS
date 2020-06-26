import {combineReducers, createStore, Store} from "redux";
import profileReducer, {ProfileType} from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./siderbar-reducer";
import usersReducer, {UserType} from "./users-reducer";

import {DialogType, MessageType, PostType} from "../index";
import authReducer from './auth-reducer';

export type StateType = {
  profilePage: {
    posts: Array<PostType>,
    newPostText: string,
    profile: ProfileType
  },
  dialogsPage: {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
    newMessageBody: string
  },
  usersPage: {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void,
    followingInProgress: Array<number>
  }
  sidebar: any,
  auth: {
    isAuth: boolean
    login : string
  }
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

export type SetTotalUsersCountACType = {
  type: 'SET_TOTAL_USERS_COUNT',
  count: number
};

export type ToggleIsFetchingACType = {
  type: 'TOGGLE_IS_FETCHING',
  isFetching: boolean
};

export type SetUserProfileType = {
  type: 'SET_USER_PROFILE',
  profile: ProfileType
};

type UserDataType = {
  userId: string,
  email: string,
  login: string
};

export type SetUserDataACType = {
  type: 'SET_USER_DATA',
  data: UserDataType
  // data: ProfileType
};

export type ToggleFollowingProgressACType = {
  type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
  isFetching: boolean,
  userId: number
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
  | SetTotalUsersCountACType
  | ToggleIsFetchingACType
  | SetUserProfileType
  | SetUserDataACType
  | ToggleFollowingProgressACType;

export type DialogsPageType = {
  dialogs: Array<DialogType>,
  messages: Array<MessageType>,
  newMessageBody: string
};

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

export type ReduxStoreType = Store<StateType, ActionType>

let store: ReduxStoreType = createStore(reducers);

export default store;