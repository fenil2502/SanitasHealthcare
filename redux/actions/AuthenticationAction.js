import { AUTHENTICATION } from "../constants/AuthenticationConstants";

export const authentication = (authDetails) => dispatch => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 10);
    }).then(() => {
        dispatch({
            type: AUTHENTICATION,
            value: authDetails
        });
    });
}