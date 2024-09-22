import { AUTHENTICATION } from "../constants/AuthenticationConstants";

const initState = {
    authDetails: {
        isAuthenticated: false,
        userDetails: {}
    }
};

const AuthenticationReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTHENTICATION:
            return {
                ...state,
                authDetails: {
                    isAuthenticated: true,
                    userDetails: action.value
                }
            };
    }
    return state;
};

export default AuthenticationReducer;