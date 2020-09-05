import {InferActionsTypes} from "./redux-store";
import {DialogType, MessageType} from "../index";

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
    case 'SEND_MESSAGE':
      let body = action.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 7, message: body}],
      };
    default:
      return state
  }
}

export type ActionType = InferActionsTypes<typeof actions>;

export const actions = {
  sendMessageActionCreator: (newMessageBody: string) => ({
    type: 'SEND_MESSAGE',
    newMessageBody
  } as const)
}

export default dialogsReducer;