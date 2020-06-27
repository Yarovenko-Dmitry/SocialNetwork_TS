import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/default_user_TS.jpg";
import {NavLink} from "react-router-dom";

import {UserType} from "../../redux/users-reducer";

export type UsersType = {
  users: Array<UserType>,
  onPageChanged: (pageNumber: number) => void,
  currentPage: number,
  pageSize: number,
  totalUsersCount: number,
  followingInProgress: Array<number>
  followThunkCreator: (userId: number) => void
  unFollowThunkCreator: (userId: number) => void
}

let Users = (props: UsersType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span
            className={props.currentPage === p ? styles.selectedPage : ''}
            onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
              props.onPageChanged(p);
            }}>{p}</span>
        })}
      </div>
      {
        props.users.map((u: UserType) => <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  className={styles.userPhoto}
                  src={u.photos.small ? u.photos.small : userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                          onClick={() => {
                            props.unFollowThunkCreator(u.id)
                          }}>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                          onClick={() => {
                            props.followThunkCreator(u.id)

                          }}>Follow</button>
              }
            </div>
          </span>
          <span>
             <span>
               <div> {u.name}</div>
               <div>{u.status}</div>
             </span>
             <span>
               <div>{"u.location.country"}</div>
               <div>{'u.location.city'}</div>
             </span>
          </span>

        </div>)
      }
    </div>
  )
}

export default Users;