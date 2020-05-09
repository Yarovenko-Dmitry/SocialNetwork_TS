import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemType = {
  name: string,
  id: number
};

const DialogsItem = (props: DialogsItemType) => {
  let path = '/dialogs/' + props.id
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
};

type MessageType = {
  message: string
};

const Message = (props: MessageType) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
};

const Dialogs = () => {

  let dialogs = [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Alexander'},
    {id: 4, name: 'Victoriya'},
    {id: 5, name: 'Nadezhda'},
    {id: 6, name: 'Alex'},
  ];

  let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'What it is'},
    {id: 3, message: 'Go-go-go'},
    {id: 4, message: 'Good'},
    {id: 5, message: 'thanksgiving'},
    {id: 6, message: 'fame and honor'},
  ];

  let dialogElements = dialogs
    .map(d =>
      <DialogsItem name={d.name} id={d.id}/>
    );

  let messagesElements = messages
    .map(m =>
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