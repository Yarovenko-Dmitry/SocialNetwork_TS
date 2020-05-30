import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogType, MessageType} from "../../index";
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message";
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/state";
// type DialogsType = {
//   state:
//     {
//       dialogs: Array<DialogType>,
//       messages: Array<MessageType>
//     }
// };

type DialogsType = {
  store: StoreType
};

const Dialogs = (props: DialogsType) => {

  let state = props.store.getState().dialogsPage;

  let dialogElements = state.dialogs.map((d: DialogType) =><DialogsItem name={d.name}id={d.id}/>);
  let messagesElements = state.messages.map((m: MessageType) =><Message message={m.message}/>);
  let newMessagesBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator())
  }

  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>

      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessagesBody}
              onChange={onNewMessageChange}
              placeholder={'Enter your message'}>
            </textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;