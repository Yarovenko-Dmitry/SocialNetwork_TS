import React from "react";
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          Dmitry
        </div>
        <div className={s.dialog}>
          Andrey
        </div>
        <div className={s.dialog}>
          Alexander
        </div>
        <div className={s.dialog}>
          Victoriya
        </div>
        <div className={s.dialog}>
          Nadezhda
        </div>
        <div className={s.dialog}>
          Alex
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