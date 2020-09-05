import {PostType} from "../index";
import {InferActionsTypes} from "./redux-store";
import {profileAPI, usersAPI} from '../api/api';
import {Dispatch} from 'react';

export type ProfileType = {
  aboutMe: string,
  contacts:
    {
      facebook: null | string,
      website: null | string,
      vk: null | string,
      twitter: null | string,
      instagram: null | string,
      youtube: null | string,
      github: null | string,
      mainLink: null | string
    },
  lookingForAJob: boolean,
  lookingForAJobDescription: null | string,
  fullName: string,
  userId: string | number,
  photos:
    {
      small: null | string,
      large: null | string
    }
}

export type ProfileReducerType = {
  posts: Array<PostType>,
  newPostText: string,
  profile: null,
  status: string
};

let internalState: ProfileReducerType = {
  posts:
    [
      {id: 1, message: 'Hi, how are you?', likesCount: 0},
      {id: 2, message: 'It\'s my first post', likesCount: 48},
      {id: 3, message: 'Second post', likesCount: 8},
      {id: 4, message: 'e-ge-gey', likesCount: 4}
    ],
  newPostText: 'http://localhost:3001/users',
  profile: null,
  status: ''
};

const profileReducer = (state: ProfileReducerType = internalState, action: ActionType) => {

  switch (action.type) {
    case 'ADD_POST':
      let newPost = {
        id: 5, message:
        action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case 'SET_USER_PROFILE': {
      return {
        ...state,
        profile: action.profile
      };
    }
    case 'SET_STATUS': {
      return {
        ...state,
        status: action.status
      };
    }
    default:
      return state;
  }
}

export type ActionType = InferActionsTypes<typeof actions>;

export const actions = {
  addPostActionCreator: (newPostText: string) => ({type: 'ADD_POST', newPostText} as const),
  setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
  setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
}

type DispatchType = Dispatch<ActionType>;

export const getUserProfile = (userId: string) => (dispatch: DispatchType) => {
  usersAPI.getProfile(userId)
    .then(response => {
      dispatch(actions.setUserProfile(response.data));
    });
};

export const getStatus = (userId: string) => (dispatch: DispatchType) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(actions.setStatus(response.data));
    });
};

export const updateStatus = (status: string) => (dispatch: DispatchType) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(actions.setStatus(status));
      }
    });
};

export default profileReducer