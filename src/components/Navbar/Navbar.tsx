import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.activ}`}>
        <a href={'/profile'}>TS Profile TS</a>
      </div>
      <div className={s.item}>
        <a href={'/dialogs'}>TS Message TS</a>
      </div>
      <div className={s.item}>
        <a href={'/news'}>TS News TS</a>
      </div>
      <div className={s.item}>
        <a href={'/music'}>TS Music TS</a>
      </div>
      <div className={s.item}>
        <a href={'/settings'}>TS Settings TS</a>
      </div>
    </nav>
  )
}

export default Navbar;