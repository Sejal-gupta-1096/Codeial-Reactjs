import { FETCH_FRIENDS_SUCCESS } from "../actions/action_types";

export default function friends(state=[] , action){

    switch(action.type){
        case FETCH_FRIENDS_SUCCESS :
            return action.friends;
            
        default :
        return state;
    }
    
} 