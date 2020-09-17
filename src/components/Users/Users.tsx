import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import {UserType} from '../../redux/users-reducer';

export type UsersType = {
  users: Array<UserType>,
  onPageChanged: (pageNumber: number) => void,
  currentPage: number,
  pageSize: number,
  totalUsersCount: number,
  followingInProgress: Array<string>
  follow: (userId: string) => void
  unFollow: (userId: string) => void
}

let Users: React.FC<UsersType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

  return (
    <div>
      <Paginator currentPage={currentPage}
                 onPageChanged={onPageChanged}
                 totalItemsCount={totalUsersCount}
                 pageSize={pageSize}/>
      <div>
        {
          users.map(u =>
            <User
              user={u}
              followingInProgress={props.followingInProgress}
              unFollow={props.unFollow}
              follow={props.follow}
              key={u.id}/>
          )}
      </div>
    </div>
  )
}

export default Users;

