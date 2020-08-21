import { SEARCH_USERS_SUCCESS } from "../actions/action_types";

const initialSearchState = {
    result : []
}
export default function search(state=initialSearchState , action){

    switch(action.type){
        case SEARCH_USERS_SUCCESS :
            return {
                ...state,
                result : action.users
            };
            
        default :
        return state;
    }
    
} 