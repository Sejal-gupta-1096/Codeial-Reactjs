import { LOGIN_START , LOGIN_SUCCESS , LOGIN_FAILED } from "../actions/action_types";

const initialAuthState = {
    user : {},
    isLoggedIn : false,
    error : null,
    inProgress : false
}
export default function auth(state=initialAuthState , action){

    switch(action.type){
        case LOGIN_START :
            return {
                ...state,
                inProgress : true
            };
        case LOGIN_SUCCESS :
            return {
                ...state,
                user : action.user,
                isLoggedIn : true,
                inProgress : false,
                
            } 
        case LOGIN_FAILED :
            return {
                ...state,
                inProgress : false,
                error : action.error,
            }   
        default :
        return state;
    }
    
} 