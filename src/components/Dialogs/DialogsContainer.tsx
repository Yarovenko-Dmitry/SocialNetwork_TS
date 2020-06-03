import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../redux/store";
import StoreContext from "../../StoreContext";

export type DialogsContainerType = {
  store: StoreType
};

const DialogsContainer = (props: any) => {

  return (
    <StoreContext.Consumer>
      {
        store => {
          let state = store.getState().dialogsPage;

          let onSendMessageClick = () => {
            store.dispatch(sendMessageActionCreator());
          }

          let onNewMessageChange = (body: string) => {
            store.dispatch(updateNewMessageBodyCreator(body));
          }
          return (
            <Dialogs
              updateNewMessageBody={onNewMessageChange}
              sendMessage={onSendMessageClick}
              dialogsPage={state}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
};

export default DialogsContainer;