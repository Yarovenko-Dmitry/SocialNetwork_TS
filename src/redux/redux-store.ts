import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./siderbar-reducer";
import usersReducer from "./users-reducer";

import {ActionType, StateType} from "./store";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer
});

export type ReduxStoreType = Store<StateType, ActionType>

let store: ReduxStoreType = createStore(reducers);

export default store;