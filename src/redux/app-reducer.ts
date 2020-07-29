import {getAuthUserData} from './auth-reducer';
import {ActionType, AppStateType, InitializedSuccessACType} from './redux-store';
import {ThunkDispatch} from 'redux-thunk';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action: ActionType) => {

  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

export const initializedSuccess = (): InitializedSuccessACType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
  const promise = dispatch(getAuthUserData());
  // !!! если промисов или условий много, то тогда через массив Promise.all([promise]).then ...

  promise.then(() => {
    dispatch(initializedSuccess());
  });
}

export default appReducer;