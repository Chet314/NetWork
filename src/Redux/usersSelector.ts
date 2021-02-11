import {AppStateType} from './reduxStore';

export const usersSelector= (state: AppStateType) => {
    return state.usersReducer.users;
};

export const pageNumberSelector = (state: AppStateType) => {
    return  state.usersReducer.pageNumber
};

export const countUsersSelector = (state: AppStateType) => {
    return  state.usersReducer.countUsers;
};

export const pageSizeSelector = (state: AppStateType) => {
return state.usersReducer.pageSize;
};

export const followingInProgressSelector = (state: AppStateType) => {
    return state.usersReducer.followingInProgress;
};

export const userIdSelector = (state: AppStateType) => {
    return state.auth.id;
};