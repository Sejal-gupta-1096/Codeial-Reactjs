import { FETCH_USER_PROFILE_START, FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILED } from "../actions/action_types";


const initialUserProfileState = {
    user : {},
    error : null,
    inProgress : false
}
export default function userProfile(state=initialUserProfileState , action){

    switch(action.type){
        case FETCH_USER_PROFILE_START :
            return {
                ...state,
                inProgress : true
            };
        case FETCH_USER_PROFILE_SUCCESS :
            return {
                ...state,
                user : action.user,
                inProgress : false,
                
            } 
        case FETCH_USER_PROFILE_FAILED :
            return {
                ...state,
                inProgress : false,
                error : action.error,
            } 
        default :
        return state;
    }
    
} 