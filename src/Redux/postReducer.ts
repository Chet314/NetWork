import {postAPI} from '../api/api'
import {PostType} from './Types/type'
import {UserType} from './Types/type'

const ADD_POST = "network/post/ADD-POST"
const ADD_POSTS = "network/post/ADD-POSTS"

const initialState = {
  post: [] as Array<PostType>
}

export type InitialStateType = typeof initialState

export const postReducer = (state = initialState, action: any): InitialStateType => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        post: [...state.post, {
            id: action.dataFromPost.id,
            name: action.dataFromPost.name,
            time: action.dataFromPost.time,
            post: action.dataFromPost.post,
            avatar: action.dataFromPost.avatar,
            photo: action.dataFromPost.photo|| "no photo",
            likes: action.dataFromPost.likes
          }]
      };

    case ADD_POSTS:
        return {
          ...state,
          post: action.dataFromPosts
        };
    
    default:
      return state;
  }

};

type AddPostType = {
  type: typeof ADD_POST
  dataFromPost: PostType
}

export const addPost = (dataFromPost: PostType): AddPostType => {
  return ({
    type: ADD_POST,
    dataFromPost
  });
};

type AddPostsType = {
  type: typeof ADD_POSTS
  dataFromPosts: Array<PostType>
}

export const addPosts = (dataFromPosts: Array<PostType>): AddPostsType => {
  return ({
   type: ADD_POSTS,
   dataFromPosts
  });
};

export const getPosts = () => async (dispatch: any) => {
  try{
    let response = await postAPI.getPosts();
    dispatch(addPosts(response.data.posts));
  }catch(err){
    console.log(err.message);
  }
}

export const getPost = (id: number, time: number ) => async (dispatch: any) => {
  try {
    let response = await postAPI.getPost(id, time);
    dispatch(addPost(response.data));
  } catch (err) {
    console.log(err.message);
  }
}

export const addMessagePost = (user: UserType, time: number, post: string, photo: string) => async (dispatch: any) => {
  try {
    let response = await postAPI.postMessage(user, time, post);

    if (photo === null || photo === undefined) {
      if (response.data.resultCode === 0) {
        dispatch(getPost(user._id, time));
      }

    } else {
      let response2 = await postAPI.putPhoto(user._id, time, photo);

      if (response.data.resultCode === 0 && response2.data.resultCode === 0) {
        dispatch(getPost(user._id, time));
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}

