import {EMAILCHANGED,PASSWORD_CHANGED,LOGIN_USER,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL} from '../Actions/Type';

const INITIAL_STATE = {username: '',password: '',loading:'',error: ''};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EMAILCHANGED:
            return {...state, username: action.payload};
        case PASSWORD_CHANGED:
            return {...state,password:action.payload};
        case LOGIN_USER:
            return {...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload};
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed', password: '', loading: false};
        default:
            return state

    }
};