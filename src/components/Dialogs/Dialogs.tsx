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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItem name={'Dmitry'} id={1}/>
        <DialogsItem name={'Andrey'} id={2}/>
        <DialogsItem name={'Alexander'} id={3}/>
        <DialogsItem name={'Victoriya'} id={4}/>
        <DialogsItem name={'Nadezhda'} id={5}/>
        <DialogsItem name={'Alex'} id={6}/>
      </div>

      <div className={s.messages}>
        <Message message={'Hi'}/>
        <Message message={'What it is'}/>
        <Message message={'Go-go-go'}/>
      </div>
    </div>
  )
};

export default Dialogs;