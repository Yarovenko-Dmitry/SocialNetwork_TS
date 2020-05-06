import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.activ}`}>
        <a>JS Profile JS</a>
      </div>
      <div className={s.item}>
        <a>JS Message JS</a>
      </div>
      <div className={s.item}>
        <a>JS News JS</a>
      </div>
      <div className={s.item}>
        <a>JS Music JS</a>
      </div>
      <div className={s.item}>
        <a>JS Settings JS</a>
      </div>
    </nav>
  )
}

export default Navbar;