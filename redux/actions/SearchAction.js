import { SEARCH_PARAMS, SEARCH_RESULT, SEARCH_TYPE } from "../constants/SearchConstants";

export const searchParams = (textSearchParams) => dispatch => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 10);
    }).then(() => {
        dispatch({
            type: SEARCH_PARAMS,
            value: textSearchParams
        });
    });
}

export const searchResult = (searchResultParams) => dispatch => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 10);
    }).then(() => {
        dispatch({
            type: SEARCH_RESULT,
            value: searchResultParams
        });
    });
}

export const searchType = (searchType) => dispatch => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 10);
    }).then(() => {
        dispatch({
            type: SEARCH_TYPE,
            value: searchType
        });
    });
}