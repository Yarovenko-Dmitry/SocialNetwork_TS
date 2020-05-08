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
  let dialogsData = [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Alexander'},
    {id: 4, name: 'Victoriya'},
    {id: 5, name: 'Nadezhda'},
    {id: 6, name: 'Alex'},
  ];

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'What it is'},
    {id: 3, message: 'Go-go-go'},
    {id: 4, message: 'Good'},
    {id: 5, message: 'thanksgiving'},
    {id: 6, message: 'fame and honor'},
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        <DialogsItem name={dialogsData[5].name} id={dialogsData[5].id}/>
      </div>

      <div className={s.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        <Message message={messagesData[2].message}/>
        <Message message={messagesData[3].message}/>
        <Message message={messagesData[4].message}/>
        <Message message={messagesData[5].message}/>
      </div>
    </div>
  )
};

export default Dialogs;