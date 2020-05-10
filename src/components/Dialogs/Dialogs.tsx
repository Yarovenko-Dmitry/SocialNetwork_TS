import React from "react";
import s from './Dialogs.module.css'
import {DialogType, MessageType} from "../../index";
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message";

type DialogsType = {
  state:
    {
      dialogs: Array<DialogType>,
      messages: Array<MessageType>
    }
};

const Dialogs = (props: DialogsType) => {

  let dialogElements = props.state.dialogs
    .map((d: DialogType) =>
      <DialogsItem name={d.name} id={d.id}/>
    );

  let messagesElements = props.state.messages
    .map((m: MessageType) =>
      <Message message={m.message}/>
    );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
};

export default Dialogs;