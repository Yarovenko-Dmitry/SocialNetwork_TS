import React from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message";

import {DialogType, MessageType} from "../../index";
import {DialogsPageType} from "../../redux/redux-store";
import {Redirect} from 'react-router';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type DialogsType = {
  sendMessage: (values: string) => void,
  updateNewMessageBody: (body: string) => void,
  dialogsPage: DialogsPageType,
  isAuth: boolean
};

const Dialogs = (props: DialogsType) => {

  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map((d: DialogType) => <DialogsItem name={d.name} key={d.id} id={d.id}/>);
  let messagesElements = state.messages.map((m: MessageType) => <Message message={m.message} key={m.id}/>);
  // let newMessagesBody = state.newMessageBody;
  //
  // let onSendMessageClick = () => {
  //   props.sendMessage();
  // }
  //
  // let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   let body = e.target.value;
  //   props.updateNewMessageBody(body);
  // }

  let addNewMessage = (values: AddMassageFormDataType) => {
    props.sendMessage(values.newMessageBody);
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
        <AddMassageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
};

export type AddMassageFormDataType = {
  newMessageBody: string
}

const AddMassageForm: React.FC<InjectedFormProps<AddMassageFormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMassageFormRedux = reduxForm<AddMassageFormDataType>({form: 'dialogAddMassageForm'})(AddMassageForm);

export default Dialogs;