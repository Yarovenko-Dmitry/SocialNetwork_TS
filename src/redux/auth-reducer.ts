import {ActionType, SetUserDataACType} from './redux-store';
import {authAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {FormAction, stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

export type InitialStateType = {
  userId: null | string,
  email: null | string,
  login: null | string,
  isAuth: boolean
}

let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state: InitialStateType = initialState, action: ActionType) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataACType =>
  ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

// !!! SetUserDataACType можно вместо него общий экшен передавать ActionType
export const getAuthUserData = () => (dispatch: ThunkDispatch<InitialStateType, unknown, SetUserDataACType>) => {
  return authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
}

export const login = (email: string, password: string, rememberMe: boolean) =>
  (dispatch: ThunkDispatch<InitialStateType, unknown, ActionType | FormAction>) => {

    authAPI.login(email, password, rememberMe)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData())
        } else {
          const messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
          dispatch(stopSubmit('login', {_error: messages}));
        }
      });
  }

export const logout = () => (dispatch: ThunkDispatch<InitialStateType, {}, ActionType>) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
}

export default authReducer;