import {ActionType, SetUserDataACType, StateType, ToggleFollowingProgressACType, UnFollowACType} from './redux-store';
import {authAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';

const SET_USER_DATA = 'SET_USER_DATA';

export type InitialStateType = {
  userId: null | string,
  email: null | string,
  login: null | string,
  isAuth: boolean
}

let initialState : InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state: InitialStateType = initialState, action:ActionType) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}

export const setAuthUserData = (userId:string, email:string, login:string): SetUserDataACType => ({type: SET_USER_DATA, data: {userId, email, login}});

export const getAuthUserData = () => (dispatch: ThunkDispatch<InitialStateType, {}, SetUserDataACType>) =>{
  authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
}

export default authReducer;