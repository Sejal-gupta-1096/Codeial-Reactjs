import { FETCH_FRIENDS_SUCCESS, ADD_FRIEND_SUCCESS, REMOVE_FRIEND_SUCCESS } from "../actions/action_types";

export default function friends(state=[] , action){

    switch(action.type){
        case FETCH_FRIENDS_SUCCESS :
            return action.friends;
        case ADD_FRIEND_SUCCESS :
            return state.concat(action.friend);
        case REMOVE_FRIEND_SUCCESS :
            let newArr = state.filter( (friend) => friend.to_user._id !== action.friend)
            return newArr;
            
        default :
        return state;
    }
    
} 