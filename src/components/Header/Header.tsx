import React from "react";
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

export type HeaderType ={
  isAuth: boolean
  login : string
  logout: () => void
}

const Header = (props:HeaderType) => {
  return (
    <header className={s.header}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZJl9r7JapjoydUuxwLEWyGBSJqFNwoBfRGlnZYdXzd-YoXY2Yo2ylJnjng&s'/>
      <div className={s.loginBlock}>
        {props.isAuth
            ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>
        }

      </div>
    </header>
  )
}
export default Header;