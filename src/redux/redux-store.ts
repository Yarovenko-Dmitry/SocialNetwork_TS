import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileType} from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./siderbar-reducer";
import usersReducer, {UserType} from "./users-reducer";
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

import {DialogType, MessageType, PostType} from "../index";
import appReducer from './app-reducer';

export type StateType = {
  profilePage: {
    posts: Array<PostType>,
    newPostText: string,
    profile: ProfileType,
    status: string
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
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void,
    followingInProgress: Array<string>
  }
  sidebar: any,
  auth: {
    isAuth: boolean
    login: string
    userId: string
  },
  app: {
    initialized: boolean
  }
};

export type AddPostActionType = {
  type: 'ADD-POST',
  newPostText: string
};

export type SendMessageActionType = {
  type: 'SEND-MESSAGE',
  newMessageBody: string
};

export type FollowACType = {
  type: 'FOLLOW',
  userId: string
};

export type UnFollowACType = {
  type: 'UNFOLLOW',
  userId: string
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
  userId: string | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
};

export type SetUserDataACType = {
  type: 'SET_USER_DATA',
  payload: UserDataType
};

export type ToggleFollowingProgressACType = {
  type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
  isFetching: boolean,
  userId: string
};

export type SetStatusType = {
  type: 'SET_STATUS',
  status: string
};

export type InitializedSuccessACType = {
  type: 'INITIALIZED_SUCCESS'
};

export type ActionType =
  AddPostActionType
  | SendMessageActionType
  | FollowACType
  | UnFollowACType
  | SetUsersACType
  | SetCurrentPageACType
  | SetTotalUsersCountACType
  | ToggleIsFetchingACType
  | SetUserProfileType
  | SetUserDataACType
  | ToggleFollowingProgressACType
  | SetStatusType
  | InitializedSuccessACType
  ;

export type DialogsPageType = {
  dialogs: Array<DialogType>,
  messages: Array<MessageType>,
  newMessageBody: string,
};

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

export type AppStateType = ReturnType<typeof reducers>

let store: ReturnType<typeof createStore> = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;