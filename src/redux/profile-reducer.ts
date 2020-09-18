import {PostType} from "../index";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {profileAPI, usersAPI} from '../api/api';
import {Dispatch} from 'react';
import {FormAction, stopSubmit} from 'redux-form';

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
  aboutMe: string
}

export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type PhotosType = {
  small: null | string,
  large: null | string
}

export type ProfileReducerType = {
  posts: Array<PostType>,
  newPostText: string,
  profile: ProfileType | null,
  status: string
};

let initialState: ProfileReducerType = {
  posts:
    [
      {id: 1, message: 'Hi, how are you?', likesCount: 0},
      {id: 2, message: 'It\'s my first post', likesCount: 48},
      {id: 3, message: 'Second post', likesCount: 8},
      {id: 4, message: 'e-ge-gey', likesCount: 4}
    ] as Array<PostType>,
  newPostText: 'http://localhost:3001/users',
  profile: null as ProfileType | null,
  status: ''
};

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

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
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(p=> p.id !== action.postId)
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
    case 'SAVE_PHOTO_SUCCESS': {
      return {...state, profile: {...state.profile, photos: action.photos} as ProfileType};}
    default:
      return state;
  }
}

export type ActionsType = InferActionsTypes<typeof actions>;

export const actions = {
  addPostActionCreator: (newPostText: string) => ({type: 'ADD_POST', newPostText} as const),
  deletePostActionCreator: (postId: number) => ({type: 'DELETE_POST', postId} as const),
  savePhotoSuccess: (photos: PhotosType) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const),

  setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
  setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
}

type DispatchType = Dispatch<ActionsType>;

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

export const savePhoto = (file: File) => async (dispatch: DispatchType) => {
  const response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
    if (userId != null) {
      dispatch(getUserProfile(userId))}
  } else {
    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer

export type InitialStateType = typeof initialState

type ThunkType = BaseThunkType<ActionsType | FormAction>