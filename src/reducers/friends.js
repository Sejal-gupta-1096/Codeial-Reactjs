import { FETCH_FRIENDS_SUCCESS, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAILED } from "../actions/action_types";

export default function friends(state=[] , action){

    switch(action.type){
        case FETCH_FRIENDS_SUCCESS :
            return action.friends;
        case ADD_FRIEND_SUCCESS :
            return state.concat(action.friend);
            
        default :
        return state;
    }
    
} 