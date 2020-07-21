import {ActionType, SendMessageActionType} from "./redux-store";
import {DialogType, MessageType} from "../index";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogsReducerType =
  {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
    newMessageBody: string
  }

let internalState: DialogsReducerType = {
  dialogs:
    [
      {id: 1, name: 'Dmitry'},
      {id: 2, name: 'Andrey'},
      {id: 3, name: 'Alexander'},
      {id: 4, name: 'Victoriya'},
      {id: 5, name: 'Nadezhda'},
      {id: 6, name: 'Alex'}
    ],
  messages:
    [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'What it is'},
      {id: 3, message: 'Go-go-go'},
      {id: 4, message: 'Good'},
      {id: 5, message: 'thanksgiving'},
      {id: 6, message: 'fame and honor'}
    ],
  newMessageBody: ''
};

const dialogsReducer = (state: DialogsReducerType = internalState, action: ActionType) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 7, message: body}],
      };
    // case UPDATE_NEW_MESSAGE_BODY:
    //   return {
    //     ...state,
    //     newMessageBody: action.body
    //   };
    default:
      return state
  }
}

export const sendMessageActionCreator = (newMessageBody: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageBody});
// export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyChangeActionType => ({
//   type: UPDATE_NEW_MESSAGE_BODY,
//   body: body
// });

export default dialogsReducer;