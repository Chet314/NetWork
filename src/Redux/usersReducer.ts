import {usersAPI} from '../api/api'
import {getFollowers} from './friendsReducer'
import {UserType} from './Types/type'
import {FollowerType} from './Types/type'

const FOLLOW = "network/users/FOLLOW"
const UNFOLLOW = "network/users/UNFOLLOW"
const SET_USERS = "network/users/SET-USERS"
const SET_CURRENT_PAGE = "network/users/SET-CURRENT-PAGE"
const SET_TOTAL_COUNT = "network/users/SET-TOTAL-COUNT"
const TOGGLE_IS_FOLLOWING_PROGRESS = "network/users/TOGGLE-IS-FOLLOWING-PROGRESS"
const ADD_LIST_OF_FOLLOWERS = "network/users/ADD-LIST-OF-FOLLOWERS"

const initialState = {
    users: [] as Array<UserType>,
    listOfFollowers: [] as Array<FollowerType>,
    pageNumber: 1,
    countUsers: 4,
    pageSize: 4,
    followingInProgress: [] as Array<number>
}

export type InitialStateType =  typeof initialState

export const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                 users: state.users.map(user => {
                    if (user._id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        };
                    }
                    return user;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user._id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        };
                    }
                    return user;
                }),
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users.map(user => {
                    if(state.listOfFollowers.find(element => element.id === user._id)){
                    return {
                        ...user,
                        followed: true
                    };
                }else {
                    return {
                        ...user,
                        followed: false
                    };
                }
            }),
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                pageNumber: action.pageNumber
            };

        case SET_TOTAL_COUNT:
            return {
                ...state,
                countUsers: action.totalCount
            };

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                 [...state.followingInProgress, action.userId] : 
                 state.followingInProgress.filter(id => id !== action.userId)
            };

        case ADD_LIST_OF_FOLLOWERS:
            return {
                ...state,
                listOfFollowers: action.list
            };
       
        default:
            return state;
    }
}

type FollowType = {
    type: typeof FOLLOW
    userId: number
}

export const follow = (userId: number): FollowType => {return {type: FOLLOW, userId};}

type UnfollowType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unfollow = (userId: number): UnfollowType => {return {type: UNFOLLOW, userId};}

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersType => {return {type: SET_USERS, users};}

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    pageNumber: number
}

export const setCurrentPage = (pageNumber: number): SetCurrentPageType => {return {type: SET_CURRENT_PAGE, pageNumber};}

type SetTotalCountType = {
    type: typeof SET_TOTAL_COUNT
    totalCount: number
}

export const setTotalCount = (totalCount: number): SetTotalCountType => {return {type: SET_TOTAL_COUNT, totalCount};}

type ToggleFollowingProgressType = {
type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
isFetching: boolean
userId: number
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType => {return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId};}

type AddListOfFollowers = {
type: typeof ADD_LIST_OF_FOLLOWERS
list: Array<FollowerType>
}

export const addListOfFollowers = (list: Array<FollowerType>): AddListOfFollowers => {return {type: ADD_LIST_OF_FOLLOWERS, list};}

export const getUsers = (pageNumber: number, pageSize: number, userId: number) => async (dispatch: any) => {
    try {
        let response = await usersAPI.getUsers(pageNumber, pageSize);
        dispatch(setUsers(response.data.array));
        dispatch(setTotalCount(response.data.totalCount));  
        dispatch(getFollowers(userId));
    }catch(err) {
        console.error(err.message);
    }

};

export const postFollowers = (userId: number, id: number) => async (dispatch: any) => {
  try {  
      dispatch(toggleFollowingProgress(true, id));
    let response = await usersAPI.postFollowers(userId, id);
    if(response.data === "OK"){
        dispatch(follow(id));
        dispatch(getFollowers(userId));
}
    dispatch(toggleFollowingProgress(false, id));
}catch(err) {
    console.error(err.message);
}
};

export const deleteFollowers = (userId: number, id: number) => async (dispatch: any) => {
  try {
       dispatch(toggleFollowingProgress(true, id));
   let response = await usersAPI.deleteFollowers(userId, id);
    if(response.data === "OK"){
        dispatch(unfollow(id));
    dispatch(getFollowers(userId));
}
    dispatch(toggleFollowingProgress(false, id));
}catch(err){
    console.error(err.mesage);
}
};
