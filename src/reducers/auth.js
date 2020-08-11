import { LOGIN_START , LOGIN_SUCCESS , LOGIN_FAILED, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILED } from "../actions/action_types";

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
        default :
        return state;
    }
    
} 