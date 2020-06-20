import React from 'react';
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/default_user_TS.jpg'
import {UserType} from "../../redux/users-reducer";

export type UsersADDtype = {
  users: Array<UserType>,
  follow: (userId: number) => void,
  unFollow: (userId: number) => void,
  setUsers: (users: Array<UserType>) => void,
  currentPage: number,
  pageSize: number,
  setTotalUserCount: (pageNamber: number) => void,
  setCurrentPage: (totalCount: number) => void,
  totalUsersCount: number
}
// в React.Component приходят <тип пропса, стейт>
// class Users extends React.Component<UsersADDtype, {}> {

class Users extends React.Component<UsersADDtype> {

  constructor(props: UsersADDtype) {
    super(props);
  }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map(p => {
            return <span
              className={this.props.currentPage === p ? styles.selectedPage : ''}
              onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                this.onPageChanged(p);
              }}>{p}</span>
          })}
        </div>
        {
          this.props.users.map((u: UserType) => <div key={u.id}>
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
                  this.props.unFollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  this.props.follow(u.id)
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
}

export default Users;