import {AppStateType, InferActionsTypes} from './redux-store';
import {authAPI} from '../api/api';
import {FormAction, stopSubmit} from 'redux-form';
import {Dispatch} from 'react';
import {ThunkAction} from 'redux-thunk';
// import {ThunkDispatch} from 'redux-thunk'; - вместо 5 строки, если использовать другую типизацию на 55-58 строках

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
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

type ActionType = InferActionsTypes<typeof actions>;

export const actions = {
  setAuthUserData: (userId: string | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: 'SET_USER_DATA', payload: {userId, email, login, isAuth}} as const)
}

type DispatchType = Dispatch<ActionType>;

// !!! SetUserDataACType можно вместо него общий экшен передавать ActionType
export const getAuthUserData = () => (dispatch: DispatchType) => {
  return authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
      }
    });
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, {}, ActionType | FormAction> =>
  // !!! вместо типизации на 54 строке  ThunkAction<void, AppStateType, {}, ActionType | FormAction>
  // добавляем(dispatch: ThunkDispatch<InitialStateType, unknown, ActionType | FormAction>) => {
    (dispatch) => {
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

export const logout = () => (dispatch: DispatchType) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false));
      }
    });
}

export default authReducer;