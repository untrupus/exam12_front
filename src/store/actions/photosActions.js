import {push} from "connected-react-router";
import axiosAPI from "../../axiosAPI";

import {
    FETCH_PHOTOS_ERROR,
    FETCH_PHOTOS_SUCCESS,

} from "../actionTypes";

const fetchPhotosSuccess = value => {
  return {type: FETCH_PHOTOS_SUCCESS, value};
};

const fetchPhotosError = error => {
  return {type: FETCH_PHOTOS_ERROR, error};
};

const fetchPhotos = () => {
    return async dispatch => {
        try {
            const response = await axiosAPI.get("photos");
            dispatch(fetchPhotosSuccess(response.data));
        } catch (e) {
            dispatch(fetchPhotosError(e));
        }
    };
};