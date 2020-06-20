import React from 'react';
import styles from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/default_user_TS.jpg";

export type UsersType ={
  users: Array<UserType>,
  follow: (userId: number) => void,
  unFollow: (userId: number) => void,
  onPageChanged : (pageNumber: number) => void,
  currentPage: number,
  pageSize: number,
  totalUsersCount: number
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
              <img
                className={styles.userPhoto}
                src={u.photos.small ? u.photos.small : userPhoto}
              />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {
                  props.unFollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  props.follow(u.id)
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