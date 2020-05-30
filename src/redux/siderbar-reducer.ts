import store, {ActionType} from "./store";
import {DialogType, MessageType} from "../index";

type SidebarReducerType = any;

let internalState = {};

// const sidebarReducer = (state = store._state.sidebar, action: ActionType) => {
const sidebarReducer = (state: SidebarReducerType = internalState, action: ActionType) => {
  return state
}

export default sidebarReducer