import {imagesAPI} from '../api/api'
import {ImagesType} from './Types/type';

const ADD_IMAGES = "network/images/ADD-IMAGES"



const initialState = {
    images: [] as Array<ImagesType>
};

export type InitialStateType = typeof initialState

export const imagesReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case ADD_IMAGES:
            return {
                ...state,
                images: action.images
            };
       
        default:
            return state;

    }
};

type AddImagesType = {
    type: typeof ADD_IMAGES
    images: Array<ImagesType>
}

export const addImages = (images: Array<ImagesType>): AddImagesType => {return{type: ADD_IMAGES, images};};


export const getImages = () => async (dispatch: any) => {
    let response  = await imagesAPI.getImages();
    dispatch(addImages(response.data));
};

