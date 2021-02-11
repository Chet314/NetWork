export const isAuthSelector = (state) => {
    return state.auth.isAuth;
};

export const avatarSelector = (state) => {
    return state.user.user.avatar;
};

export const isFriendSelector = (state) => {
    return state.friendsReducer.isFriendState;
};