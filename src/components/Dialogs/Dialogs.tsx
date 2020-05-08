import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to={'/dialogs/1'}>Dmitry</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/2'}>Andrey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/3'}>Alexander</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/4'}>Victoriya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/5'}>Nadezhda</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/6'}>Alex</NavLink>
        </div>
      </div>

      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>What it is</div>
        <div className={s.message}>Go-go-go</div>
      </div>
    </div>
  )
};

export default Dialogs;