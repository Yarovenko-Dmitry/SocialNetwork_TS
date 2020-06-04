import {PostType} from "../index";
import {ActionType, AddPostActionType, OnPostChangeActionType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type ProfileReducerType = {
  posts: Array<PostType>,
  newPostText: string
};

let internalState = {
  posts:
    [
      {id: 1, message: 'Hi, how are you?', likesCount: 0},
      {id: 2, message: 'It\'s my first post', likesCount: 48},
      {id: 3, message: 'Second post', likesCount: 8},
      {id: 4, message: 'e-ge-gey', likesCount: 4}
    ],
  newPostText: 'example test'
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
    default:
      return state;
  }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string): OnPostChangeActionType => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer