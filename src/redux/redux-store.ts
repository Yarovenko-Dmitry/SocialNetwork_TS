import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileType} from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
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

export type DialogsPageType = {
  dialogs: Array<DialogType>,
  messages: Array<MessageType>,
  newMessageBody: string,
};

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  // sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<T extends { [key: string]: (...arg: any[]) => any }> = ReturnType<PropertiesTypes<T>>

export type AppStateType = ReturnType<typeof reducers>

let store: ReturnType<typeof createStore> = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;