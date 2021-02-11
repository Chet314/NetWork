export const getMessagesSelector = (state) => {
    return state.dialogReducer.messages;
};

export const getUserSelector = (state) => {
    return state.user.user;
};

export const getRecipientSelector = (state) => {
    return state.friendsReducer.idFriend;
};