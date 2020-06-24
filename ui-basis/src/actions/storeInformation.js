import * as types from "../types/index"

export const fetchUserInformationAction = () => (dispatch) => {
    try {
        let store = 
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