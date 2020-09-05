import {InferActionsTypes} from "./redux-store";
import {usersAPI} from '../api/api';
import {Dispatch} from 'react';

export type UserType = {
  id: string,
  name: string,
  photos: {
    small: string,
    large: string
  },
  followed: boolean,
  status: string,
  location: {
    city: string,
    country: string
  }
}

export type UsersReducerType =
  {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<string>
  }

let initialState: UsersReducerType = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

const usersReducer = (state: UsersReducerType = initialState, action: ActionType) => {

  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case 'SET_USERS': {
      return {...state, users: action.users}
    }
    case 'SET_CURRENT_PAGE': {
      return {...state, currentPage: action.currentPage}
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return {...state, totalUsersCount: action.count}
    }
    case 'TOGGLE_IS_FETCHING': {
      return {...state, isFetching: action.isFetching}
    }
    case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingInProgress:
          action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state;
  }
}

type ActionType = InferActionsTypes<typeof actions>;

export const actions = {
   followSuccess : (userId: string) => ({type: 'FOLLOW', userId} as const),
   unFollowSuccess : (userId: string)=> ({type: 'UNFOLLOW', userId} as const),
   setUsers : (users: Array<UserType>)=> ({type: 'SET_USERS', users} as const),
   setCurrentPage : (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage: currentPage
  } as const),
   setTotalUsersCount : (totaUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    count: totaUsersCount
  } as const),
   toggleIsFetching : (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching
  } as const),
   toggleFollowingProgress : (isFetching: boolean, userId: string) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId
  } as const),
}

type DispatchType = Dispatch<ActionType>;

export const requestUsers = (page: number, pageSize: number) => {
  return (dispatch: DispatchType) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    usersAPI.getUsers(page, pageSize).then(data => {
      dispatch(actions.toggleIsFetching(false));
      dispatch(actions.setUsers(data.items));
      dispatch(actions.setTotalUsersCount(data.totalCount));
    });
  }
}

export const follow = (userId: string) => {
  return (dispatch: DispatchType) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    usersAPI.follow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(actions.followSuccess(userId));
      }
      dispatch(actions.toggleFollowingProgress(false, userId));
    });
  }
}

export const unFollow = (userId: string) => {
  return (dispatch: DispatchType) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    usersAPI.unFollow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(actions.unFollowSuccess(userId));
      }
      dispatch(actions.toggleFollowingProgress(false, userId));
    });
  }
}

export default usersReducer