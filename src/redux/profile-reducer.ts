import {PostType} from "../index";
import {
  ActionType,
  AddPostActionType,
  OnPostChangeActionType,
  SetUserProfileType,
  StateType,
  ToggleFollowingProgressACType, UnFollowACType
} from "./redux-store";
import {usersAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
  profile: null
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
  profile: null
};

const profileReducer = (state: ProfileReducerType = internalState, action: ActionType) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5, message:
        state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text: string): OnPostChangeActionType => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export const getUserProfile = (userId: string) => (dispatch: ThunkDispatch<ProfileType, {}, SetUserProfileType>) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
};

export default profileReducer