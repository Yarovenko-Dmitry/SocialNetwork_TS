import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/default_user.png";
import {NavLink} from "react-router-dom";
import {UserType} from '../../redux/users-reducer';


export type UserAddType = {
  user: UserType,
  followingInProgress: Array<string>
  follow: (userId: string) => void
  unFollow: (userId: string) => void
}

const User : React.FC<UserAddType>= ({user, followingInProgress, unFollow, follow}) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img
              className={styles.userPhoto}
              src={user.photos.small != null ? user.photos.small : userPhoto}/>
          </NavLink>
        </div>
        <div>
          {user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)}
                      onClick={() => {
                        unFollow(user.id)
                      }}>Unfollow</button>
            : <button disabled={followingInProgress.some(id => id === user.id)}
                      onClick={() => {
                        follow(user.id)
                      }}>Follow</button>
          }
        </div>
          </span>
      <span>
             <span>
               <div> {user.name}</div>
               <div>{user.status}</div>
             </span>
             <span>
               <div>{"user.location.country"}</div>
               <div>{'user.location.city'}</div>
             </span>
          </span>
    </div>)
}

export default User;