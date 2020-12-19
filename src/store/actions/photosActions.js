import {push} from "connected-react-router";
import axiosAPI from "../../axiosAPI";

import {
    FETCH_PHOTOS_ERROR,
    FETCH_PHOTOS_SUCCESS,
    ADD_PHOTO_ERROR,
    FETCH_USER_PHOTOS_ERROR,
    FETCH_USER_PHOTOS_SUCCESS,
    DELETE_PHOTO_ERROR
} from "../actionTypes";

const fetchPhotosSuccess = value => {
  return {type: FETCH_PHOTOS_SUCCESS, value};
};

const fetchPhotosError = error => {
  return {type: FETCH_PHOTOS_ERROR, error};
};

export const fetchPhotos = () => {
    return async dispatch => {
        try {
            const response = await axiosAPI.get("photos");
            dispatch(fetchPhotosSuccess(response.data));
        } catch (e) {
            dispatch(fetchPhotosError(e));
        }
    };
};

const addPhotoError = error => {
  return {type: ADD_PHOTO_ERROR, error};
};

export const addPhoto = (data) => {
    return async (dispatch) => {
        try {
            await axiosAPI.post('/photos', data);
            dispatch(addPhotoError(null));
            dispatch(push("/"));
        } catch (e) {
            dispatch(addPhotoError(e.response.data));
        }
    };
};

const fetchUserPhotosSuccess = value => {
    return {type: FETCH_USER_PHOTOS_SUCCESS, value};
};

const fetchUserPhotosError = error => {
    return {type: FETCH_USER_PHOTOS_ERROR, error};
};

export const fetchUserPhotos = id => {
    return async dispatch => {
        try {
            const response = await axiosAPI.get("photos?user=" + id);
            dispatch(fetchUserPhotosSuccess(response.data));
        } catch (e) {
            dispatch(fetchUserPhotosError(e));
        }
    };
};

const deletePhotoError = error => {
    return {type: DELETE_PHOTO_ERROR, error};
};

export const deletePhoto = id => {
    return async (dispatch) => {
        try {
            await axiosAPI.delete('/photos/' + id);
        } catch (e) {
            dispatch(deletePhotoError(e));
        }
    };
}