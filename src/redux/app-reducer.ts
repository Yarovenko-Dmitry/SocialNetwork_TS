import {getAuthUserData} from './auth-reducer';
import {AppStateType, InferActionsTypes} from './redux-store';
import {ThunkDispatch} from 'redux-thunk';

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action: ActionType) => {

  switch (action.type) {
    case 'INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

type ActionType = InferActionsTypes<typeof actions>;

export const actions = {
 initializedSuccess:  () => ({type: 'INITIALIZED_SUCCESS'} as const)
}

export const initializeApp = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
  const promise = dispatch(getAuthUserData());
  // !!! если промисов или условий много, то тогда через массив Promise.all([promise]).then ...
  promise.then(() => {
    dispatch(actions.initializedSuccess());
  });
}

export default appReducer;