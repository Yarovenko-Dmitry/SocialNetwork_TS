import {
  ActionType,
  FollowACType,
  SetCurrentPageACType,
  SetTotalUserCountACType,
  SetUsersACType,
  UnFollowACType
} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

export type UserType = {
  id: number,
  name: string,
  // photoURL: string,
  photos: {
    small: string,
    large: string
  },
  followed: boolean,
  status: string,
  location: {
    city: string,
    country: string}
}

export type UsersReducerType =
  {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
  }

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 19,
  currentPage: 2
};

const usersReducer = (state:UsersReducerType = initialState, action: ActionType) => {

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
      return {...state, users: [...state.users, ...action.users]}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count}
    }
    default:
      return state;
  }
}
// followActionCreator === followAC
export const followAC = (userId: number): FollowACType => ({type: FOLLOW, userId});
export const unFollowAC = (userId: number): UnFollowACType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UserType>): SetUsersACType => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage: currentPage}); // если свойство и значение совпадают currentPage: currentPage , то можно писать одно свойство currentPage
export const setTotalUserCountAC = (totaUsersCount: number): SetTotalUserCountACType => ({type: SET_TOTAL_USERS_COUNT, count: totaUsersCount});

export default usersReducer