import React, {FC} from "react";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
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
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessageActionCreator(newMessageBody));
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