import {
    FETCH_PHOTOS_ERROR,
    FETCH_PHOTOS_SUCCESS,
    ADD_PHOTO_ERROR,
    FETCH_USER_PHOTOS_ERROR,
    FETCH_USER_PHOTOS_SUCCESS,
    DELETE_PHOTO_ERROR
} from "../actionTypes";

const initialState = {
    addPhotoError: null,
    fetchPhotosError: null,
    fetchUserPhotosError: null,
    deletePhotoError: null,
    photos: [],
    userPhotos: []
};

const photosReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PHOTOS_SUCCESS:
            return {...state, photos: action.value};
        case FETCH_PHOTOS_ERROR:
            return {...state, fetchPhotosError: action.error};
        case ADD_PHOTO_ERROR:
            return {...state, addPhotoError: action.error};
        case FETCH_USER_PHOTOS_SUCCESS:
            return {...state, userPhotos: action.value};
        case FETCH_USER_PHOTOS_ERROR:
            return {...state, fetchUserPhotosError: action.error};
        case DELETE_PHOTO_ERROR:
            return {...state, deletePhotoError: action.error};
        default:
            return state;
    }
};

export default photosReducer;