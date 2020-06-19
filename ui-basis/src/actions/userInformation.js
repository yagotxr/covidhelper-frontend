import { parseJwt } from '../utils/authentication';
import UserModel from '../models/User';
import * as types from "../types/index"

export const fetchUserInformationAction = () => (dispatch) => {
    try {
        const decodedUserCredentials = parseJwt(
            localStorage.getItem('accessToken')
        );
        let { payload } = decodedUserCredentials;
        const {
            sub, name, email, imageUrl
        } = payload;
        payload = new UserModel(sub, name, email, imageUrl);
        dispatch(fetchUserInformationSuccess(payload));
    } catch (error) {
        dispatch(fetchUserInformationFailure(error));
    }
};

//   export const deleteUserInformationAction = () => (dispatch) => {
//     dispatch(deleteUserInformation());
//     return axios
//       .delete(`/${API_BASE_URL}/oauth2/logout`)
//       .then(localStorage.clear())
//       .catch((error) => dispatch(deleteUserInformationFailure(error)));
//   };  

export const fetchUserInformationSuccess = (userInformation) => ({
    type: types.FETCH_USER_INFORMATION_SUCCESS,
    payload: userInformation,
});
export const fetchUserInformationFailure = (error) => ({
    type: types.FETCH_USER_INFORMATION_FAILURE,
    error,
});
export const fetchUserInformation = () => ({
    type: types.FETCH_USER_INFORMATION_REQUEST,
});

export const deleteUserInformation = () => ({
    type: types.DELETE_USER_INFORMATION_REQUEST,
});
export const deleteUserInformationFailure = (error) => ({
    type: types.DELETE_USER_INFORMATION_FAILURE,
    error,
});
