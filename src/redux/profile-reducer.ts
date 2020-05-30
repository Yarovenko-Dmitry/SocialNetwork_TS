import {DialogType, MessageType, PostType} from "../index";
import store, {ActionType, AddPostActionType, OnPostChangeActionType, StateType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type ProfileReducerType = {
    posts: Array<PostType>,
    newPostText: string
};

// const profileReducer = (state = store._state.profilePage, action: ActionType) => {
const profileReducer = (state: ProfileReducerType, action: ActionType) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5, message:
        state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state
  }
}
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string): OnPostChangeActionType => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer