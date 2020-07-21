import {combineReducers, createStore, Store, applyMiddleware} from "redux";
import profileReducer, {ProfileType} from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./siderbar-reducer";
import usersReducer, {UserType} from "./users-reducer";
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import {DialogType, MessageType, PostType} from "../index";
import {AddMassageFormDataType} from '../components/Dialogs/Dialogs';


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
  }
};

export type AddPostActionType = {
  type: 'ADD-POST',
  newPostText: string
};

// export type OnPostChangeActionType = {
//   type: 'UPDATE-NEW-POST-TEXT',
//   newText: string
// };

export type SendMessageActionType = {
  type: 'SEND-MESSAGE',
  newMessageBody: string
};

// export type UpdateNewMessageBodyChangeActionType = {
//   type: 'UPDATE-NEW-MESSAGE-BODY',
//   body: string
// };

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
  userId: string,
  email: string,
  login: string
};

export type SetUserDataACType = {
  type: 'SET_USER_DATA',
  data: UserDataType
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


export type ActionType =
  AddPostActionType
  // | OnPostChangeActionType
  | SendMessageActionType
  // | UpdateNewMessageBodyChangeActionType
  | FollowACType
  | UnFollowACType
  | SetUsersACType
  | SetCurrentPageACType
  | SetTotalUsersCountACType
  | ToggleIsFetchingACType
  | SetUserProfileType
  | SetUserDataACType
  | ToggleFollowingProgressACType
  | SetStatusType;

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
  auth: authReducer,
  form: formReducer
});

export type ReduxStoreType = Store<StateType, ActionType>

// let store: ReduxStoreType = createStore(reducers);

let store: ReturnType<typeof createStore> = createStore(reducers, applyMiddleware(thunkMiddleware));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;