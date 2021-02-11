
import {authAPI} from '../api/api'

const SET_USER_DATA = "network/auth/SET-USER-DATA"
const OFF_SESSION = "network/auth/SOFF-SESSION"

const initialState = {
    id: null as number | null,
    email: '',
    isAuth: false
};

export type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: any) : InitialStateType => {
    switch(action.type) {
       
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
            case OFF_SESSION:
                return {
                    ...state,
                    isAuth: false
                };
            default:
                return state;
    }
}

type SetUserDataDataType = {
    id: number
    email: string
}

type SetUserDataType = {
    type: typeof SET_USER_DATA,
    data: SetUserDataDataType
}

export const setUserData = (id: number,  email: string) : SetUserDataType => {return {type: SET_USER_DATA, data: {id, email}};};

type OffSessionType = {
    type: typeof OFF_SESSION
}

export const offSession = (): OffSessionType => {return {type: OFF_SESSION};};

export const login = (submitData: any) => async (dispatch: any) => {
    try {
        let response = await authAPI.login(submitData);
        if(response.data.resultCode === 0){
        dispatch(getAuth());}
    } catch (err) {
        console.log(err.message);
    }
}

export const logout = () => async (dispatch: any) => {
    try {
        let response = await authAPI.logout();
        if(response.data.resultCode === 0){
            dispatch(offSession());}
    } catch (err) {
        console.log(err.message);
    }
}

export const getAuth = () => async (dispatch: any) => {
   try {
        let response = await authAPI.me();
    dispatch(setUserData(response.data.id, response.data.name));
}catch(err) {
    console.log(err.message);
}
}
