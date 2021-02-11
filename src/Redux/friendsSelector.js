export const friendsSelector = (state) => {
return state.friendsReducer.friends;
};

export const idFriendSelector = (state) => {
    return state.friendsReducer.idFriend;
    };