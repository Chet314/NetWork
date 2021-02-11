import {dialogsAPI} from '../api/api'
import {MessageType} from './Types/type'

const ADD_MESSAGE = "network/dialog/ADD-MESSAGE"

let initialState = {
  messages: [] as Array<MessageType> | [],
}

export type InitialStateType = typeof initialState

export const dialogReducer = (state = initialState, action: any) : InitialStateType => {

  switch (action.type) {
      case ADD_MESSAGE:
      return {
        ...state,
      messages: action.data.array,

      };
      
    default:
      return state;
  }

}

type addMessageType = {
  type: typeof ADD_MESSAGE
  data: Array<MessageType>
}

export const addMessage = (data: Array<MessageType>): addMessageType => {return ({type: ADD_MESSAGE, data});};


export const sendMessage = (message: any) => async (dispatch: any) => {
  try {
    let response = await dialogsAPI.postDialogs(message);
    if (response.data.resultCode === 0) {
      dispatch(getMessage(message.message.senderId, message.message.recipientId));
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const getMessage = (senderId: number, recipientId: number) => async (dispatch: any) => {
  try {
    let response = await dialogsAPI.getDialogs(senderId, recipientId);
    dispatch(addMessage(response.data));
  } catch (err) {
    console.log(err.message);
  }
};


