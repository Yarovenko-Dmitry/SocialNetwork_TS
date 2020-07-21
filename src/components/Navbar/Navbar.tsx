import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item}`}>
        <NavLink to={'/profile'} activeClassName={s.activLink}>TS Profile TS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/dialogs'} activeClassName={s.activLink}>TS Message TS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/users'} activeClassName={s.activLink}>TS Users TS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/news'} activeClassName={s.activLink}>TS News TS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/music'} activeClassName={s.activLink}>TS Music TS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/settings'} activeClassName={s.activLink}>TS Settings TS</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;