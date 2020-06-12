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

  if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.setUsers(response.data.items);
      });

    // props.setUsers(
    //   [
    //     {
    //       id: 1,
    //       photoURL: 'https://images11.cosmopolitan.ru/upload/img_cache/746/74688345e0bc67299c6b587bb043d664_cropped_460x460.jpg',
    //       followed: false,
    //       fullName: 'Dmitry',
    //       status: 'I am a student',
    //       location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //       id: 2,
    //       photoURL: 'https://i.mycdn.me/image?id=881050031040&ts=000000009801f00202&plc=WEB&tkn=*6CB4HhJvSBlWth3o6hg6pRLjlXw&fn=sqr_288',
    //       followed: true,
    //       fullName: 'Vasia',
    //       status: 'I am a student too',
    //       location: {city: 'Moscow', country: 'Russia'}
    //     },
    //     {
    //       id: 3,
    //       photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREq-D1WDsGuiaxxpH73VPbrBEn22GIfLXmgdqLb9gFRWIIsVqu&usqp=CAU',
    //       followed: false,
    //       fullName: 'Svete',
    //       status: 'I am a student too too',
    //       location: {city: 'Kiev', country: 'Ukraine'}
    //     },
    //     {
    //       id: 4,
    //       photoURL: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/35/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%A1%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B2-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%AB.jpg/274px-%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%A1%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B2-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%AB.jpg',
    //       followed: true,
    //       fullName: 'Fedia',
    //       status: 'I am not a student',
    //       location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //       id: 5,
    //       photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUWrXgwdpHp5BSd30Z7B7uTiD3UxfonPKkas3lPYq2obg3tjrz&usqp=CAU',
    //       followed: false,
    //       fullName: 'Zina',
    //       status: 'I am a doctor',
    //       location: {city: 'Minsk', country: 'Belarus'}
    //     }
    //   ]
    // );
  }

  return (
    <div>
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