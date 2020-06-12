import {ActionType} from "./store";

type SidebarReducerType = any;

let internalState = {};

// const sidebarReducer = (state = store._state.sidebar, action: ActionType) => {
const sidebarReducer = (state: SidebarReducerType = internalState, action: ActionType) => {
  return state
}

export default sidebarReducer