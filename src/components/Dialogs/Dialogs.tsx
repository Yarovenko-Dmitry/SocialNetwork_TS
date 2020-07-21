import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message";

import {DialogType, MessageType} from "../../index";
import {DialogsPageType} from "../../redux/redux-store";
import {Redirect} from 'react-router';

export type DialogsType = {
  sendMessage: () => void,
  updateNewMessageBody: (body: string) => void,
  dialogsPage: DialogsPageType,
  isAuth: boolean
};

const Dialogs = (props: DialogsType) => {

  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map((d: DialogType) => <DialogsItem name={d.name} key={d.id} id={d.id}/>);
  let messagesElements = state.messages.map((m: MessageType) => <Message message={m.message} key={m.id}/>);
  let newMessagesBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  if (!props.isAuth) {
    return <Redirect to={'/login'}/>
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