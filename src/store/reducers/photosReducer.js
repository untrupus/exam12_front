import {
    FETCH_PHOTOS_ERROR,
    FETCH_PHOTOS_SUCCESS
} from "../actionTypes";

const initialState = {
    fetchPhotosError: null,
    photos: [],
};

const photosReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PHOTOS_SUCCESS:
            return {...state, photos: action.value};
        case FETCH_PHOTOS_ERROR:
            return {...state, fetchPhotosError: action.error};
        default:
            return state;
    }
};

export default photosReducer;