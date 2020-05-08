import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item}`}>
        <NavLink to={'/profile'} activeClassName={s.activLink}>JS Profile JS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/dialogs'} activeClassName={s.activLink}>JS Message JS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/news'} activeClassName={s.activLink}>JS News JS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/music'} activeClassName={s.activLink}>JS Music JS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/settings'} activeClassName={s.activLink}>JS Settings JS</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;