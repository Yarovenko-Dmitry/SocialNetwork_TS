import React, {Dispatch, FC} from "react";
import {actions, ActionsType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from "redux";


let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  }
};


type DispatchType = Dispatch<ActionsType>;
let mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(actions.sendMessageActionCreator(newMessageBody));
    },
  }
};

export default compose<FC>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);