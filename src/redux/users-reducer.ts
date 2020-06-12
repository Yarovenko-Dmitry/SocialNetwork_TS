import {ActionType, FollowACType, SetUsersACType, UnFollowACType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

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
    users: Array<UserType>
  }

let initialState = {
  users: []
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
    default:
      return state;
  }
}
// followActionCreator === followAC
export const followAC = (userId: number): FollowACType => ({type: FOLLOW, userId});
export const unFollowAC = (userId: number): UnFollowACType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UserType>): SetUsersACType => ({type: SET_USERS, users});

export default usersReducer