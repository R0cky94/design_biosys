import {EMAILCHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from './Type';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';

export const emailChanged = (text) => {
    return {
        type: EMAILCHANGED,
        payload: text
    }
};
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({username, password}) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});

        let apiBaseUrl = "http://13.127.126.101:8000/";
        let payload = {
            username: username,
            password: password
        };
        axios.post(apiBaseUrl + "api/userLogin/", payload)
            .then(response => loginUserSuccess(dispatch, response))
            .catch(() => loginUserFail(dispatch));

    };
};

const loginUserSuccess = (dispatch, response) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: response
    });
    Actions.main();
};

const loginUserFail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL});
};
