import React from 'react';
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/default_user_TS.jpg'
import {UserType} from "../../redux/users-reducer";

export type UsersADDtype = {
  users: Array<UserType>,
  follow: (userId: number) => void,
  unFollow: (userId: number) => void,
  setUsers: (users: Array<UserType>) => void
}

const Users = (props: UsersADDtype) => {

  let getUsers = () => {
    if (props.users.length === 0) {

      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          props.setUsers(response.data.items);
        });
    }
  }

  return (
    <div>
      <button onClick={getUsers}> Get Users</button>
      {
        props.users.map((u: UserType) => <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small ? u.photos.small : userPhoto}
                // src={u.photoURL}
                // alt="img"
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
               <div>{'u.location.country'}</div>
               <div>{'u.location.city'}</div>
             </span>
          </span>

        </div>)
      }
    </div>
  )
};

export default Users;