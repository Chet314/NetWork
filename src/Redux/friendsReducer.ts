import {usersAPI} from '../api/api'
import {addListOfFollowers } from'./usersReducer'
import {FriendsType} from './Types/type'

const GET_FRIEND = "network/friends/ADD-FRIEND"
const SET_FRIEND = "network/friends/SET-FRIEND"
const IS_FRIEND = "network/friends/IS-FRIEND"

const initialState = {
    friends: [] as Array<FriendsType>,
    idFriend: 0,
    isFriendState: false
}

export type InitialStateType = typeof initialState 


export const friendsReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case GET_FRIEND:
            return {
                ...state,
                friends:  action.friends,
                idFriend: action.friends.length !== 0 ? Number(action.friends[0]._id) : 0  
            };
            case SET_FRIEND:
                return {
                    ...state,
                    idFriend: Number(action.id)
                };
                case IS_FRIEND:
                return {
                    ...state,
                    isFriendState: action.bool
                };
          
        
     default: return state;
    }
};

type AddFriendType = {
type: typeof GET_FRIEND
friends: Array<FriendsType>
}

export const addFriend = (friends: Array<FriendsType>): AddFriendType => {return {type: GET_FRIEND, friends};};

type SetFriendType = {
    type: typeof SET_FRIEND
    id: number
}

export const setFriend = (id: number): SetFriendType => {return {type: SET_FRIEND, id};};

type IsFriendType = {
    type: typeof IS_FRIEND
    bool: boolean
}

export const isFriend = (bool: boolean):IsFriendType => {return {type: IS_FRIEND, bool};};


export const getFollowers = (id: number) => async (dispatch: any) => {
    try {
        let response = await usersAPI.getFollowers(id);
        dispatch(addFriend(response.data.followArray));
        dispatch(addListOfFollowers(response.data.follower));
    } catch (err) {
        console.log(err.message);
    }
};
