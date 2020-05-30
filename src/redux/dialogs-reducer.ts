import store, {ActionType, SendMessageActionType, StateType, UpdateNewMessageBodyChangeActionType} from "./state";
import {DialogType, MessageType} from "../index";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogsReducerType =
  {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
    newMessageBody: string
  }

// const dialogsReducer = (state = store._state.dialogsPage, action: ActionType) => {
const dialogsReducer = (state : DialogsReducerType, action: ActionType) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 7, message: body});
      return state
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state
  }
}

export const sendMessageActionCreator = ():SendMessageActionType => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyChangeActionType=> ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;