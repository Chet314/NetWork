import {profileAPI} from '../api/api'
import {UserType} from './Types/type';

const GET_USER_STATUS = "network/user/SET_USER_STATUS"
const SET_USER_STATUS = "network/user/SET_USER_STATUS"


const initialState={
    user: {} as UserType
};

export type InitialStateType = typeof initialState

export const userReducer = (state = initialState, action: any): InitialStateType => {
 switch(action.type){
    case GET_USER_STATUS: {
        return {
            ...state,
            user: action.user
           };
       }
    case SET_USER_STATUS: {
        return {
            ...state,
            user: {
                 ...state.user,
            _id: action.user.id,   
            name: action.user.name,
            avatar: action.user.avatar,
            country: action.user.country,
            about: action.user.about,
            myPhoto: action.user.myPhoto}
           };
       }

     default:
         return state;
 }
};

type GetUserStatusType = {
    type: typeof GET_USER_STATUS
    user: UserType
}

export const getUserStatus = (user: UserType): GetUserStatusType => {return{type: GET_USER_STATUS, user};}

type SetUserStatusType = {
    type: typeof SET_USER_STATUS
    user: UserType
}

export const setUserStatus = (user: UserType): SetUserStatusType  => {return{type: SET_USER_STATUS, user};}

export const getStatus = (id: number) => async (dispatch: any) => {
    try {
        let response = await profileAPI.getProfile(id);
        dispatch(getUserStatus(response.data.user));
    } catch (err) {
        console.error(err.message);
    }
};

 export const updateStatus = (user: UserType) => async (dispatch: any) => {
    try {
        let response = profileAPI.putStatus(user);
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(user));
        }
    } catch (err) {
        console.error(err.message);
    }
 };
