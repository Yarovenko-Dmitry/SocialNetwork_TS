import React from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message";

import {DialogType, MessageType} from "../../index";
import {DialogsPageType} from "../../redux/redux-store";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {Textarea} from '../common/FormsControls/FormsControls';

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

  let addNewMessage = (values: AddMassageFormDataType) => {
    props.sendMessage(values.newMessageBody);
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

const maxLength50 = maxLengthCreator(50)

const AddMassageForm: React.FC<InjectedFormProps<AddMassageFormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               name={'newMessageBody'}
               placeholder={'Enter your message'}
               validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMassageFormRedux = reduxForm<AddMassageFormDataType>({form: 'dialogAddMassageForm'})(AddMassageForm);

export default Dialogs;