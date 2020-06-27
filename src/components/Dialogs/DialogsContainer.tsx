import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {StateType} from "../../redux/redux-store";
import {DispatchType} from "../Profile/MyPosts/MyPostsContainer";

let mapStateToProps = (state: StateType) => {
  return {
    dialogsPage: state.dialogsPage
  }
};

let mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;