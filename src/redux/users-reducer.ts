import {
  ActionType,
  FollowACType,
  SetCurrentPageACType,
  SetTotalUsersCountACType,
  SetUsersACType, StateType, ToggleFollowingProgressACType, ToggleIsFetchingACType,
  UnFollowACType
} from "./redux-store";
import {usersAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

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
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS: {
      return {...state, users: action.users}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
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

export const followSuccess = (userId: string): FollowACType => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId: string): UnFollowACType => ({type: UNFOLLOW, userId});
export const setUsers = (users: Array<UserType>): SetUsersACType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage
});
export const setTotalUsersCount = (totaUsersCount: number): SetTotalUsersCountACType => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totaUsersCount
});
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});
export const toggleFollowingProgress = (isFetching: boolean, userId: string): ToggleFollowingProgressACType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});
export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: ThunkDispatch<StateType, {}, ToggleIsFetchingACType | SetUsersACType | SetTotalUsersCountACType>) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  }
}


export const follow = (userId: string) => {
  return (dispatch: ThunkDispatch<StateType, {}, ToggleFollowingProgressACType | FollowACType>) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  }
}

export const unFollow = (userId: string) => {
  return (dispatch: ThunkDispatch<StateType, {}, ToggleFollowingProgressACType | UnFollowACType>) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unFollow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unFollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  }
}

export default usersReducer