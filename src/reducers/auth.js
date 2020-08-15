import { LOGIN_START , LOGIN_SUCCESS , LOGIN_FAILED, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILED , AUTHETICATE_USER, LOG_OUT, CLEAR_AUTH_STATE, EDIT_USER_SUCCESS, EDIT_USER_FAILED } from "../actions/action_types";

const initialAuthState = {
    user : {},
    isLoggedIn : false,
    error : null,
    inProgress : false
}
export default function auth(state=initialAuthState , action){

    switch(action.type){
        case LOGIN_START :
        case SIGNUP_START :
            return {
                ...state,
                inProgress : true
            };
        case LOGIN_SUCCESS :
        case SIGNUP_SUCCESS :
            return {
                ...state,
                user : action.user,
                isLoggedIn : true,
                inProgress : false,
                
            } 
        case LOGIN_FAILED :
        case SIGNUP_FAILED :
            return {
                ...state,
                inProgress : false,
                error : action.error,
            }
        case AUTHETICATE_USER :
            return{
                ...state,
                isLoggedIn : true,
                user : action.user
            } 
        case LOG_OUT :
            return{
                ...state,
                user : {},
                isLoggedIn : false
            }
        case CLEAR_AUTH_STATE :
            return{
                ...state,
                error : null
            }
        case EDIT_USER_SUCCESS :
            return{
                ...state,
                user : action.user,
                error : false
            } 
        case EDIT_USER_FAILED :
            return {
                ...state,
                error : action.error
            } 
        default :
        return state;
    }
    
} 