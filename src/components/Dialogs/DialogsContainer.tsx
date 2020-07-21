import React, {FC} from "react";
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {StateType} from "../../redux/redux-store";
import {DispatchType} from "../Profile/MyPosts/MyPostsContainer";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from "redux";


let mapStateToProps = (state: StateType) => {
  return {
    dialogsPage: state.dialogsPage,
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

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

export default compose<FC>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);