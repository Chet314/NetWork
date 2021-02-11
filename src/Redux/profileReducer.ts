import {profileAPI} from '../api/api'
import {UserType} from './Types/type'

const SET_USER = "network/profile/SET-USER"

const initialState = {
  user: {} as UserType
}

export type InitialStateType = typeof initialState

export const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER:
      return{
       ...state,
       user: action.user
      };  
      
    default:
      return state;
  }
};

type SetUserProfileType = {
  type: typeof SET_USER
  user: UserType
}

export const setUserProfile = (
  _id: number,
  name: string,
  avatar: string,
  country: string,
  about: string,
  myPhoto: string
  ): SetUserProfileType => {return({
  type: SET_USER, user:{_id, name, avatar, country, about, myPhoto}});};


export const getProfile = (id: number) => async (dispatch: any) => {
  try {
    let response = await profileAPI.getProfile(id);
    dispatch(setUserProfile(
      response.data.user._id,
      response.data.user.name,
      response.data.user.avatar,
      response.data.user.country,
      response.data.user.about,
      response.data.user.myPhoto));
  }catch(err) {
    console.error(err.message);
  }
};