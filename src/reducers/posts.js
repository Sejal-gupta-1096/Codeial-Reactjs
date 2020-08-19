import { UPDATE_POSTS, ADD_POST } from "../actions/action_types";

export default function posts(state=[] , action){

    switch(action.type){
        case UPDATE_POSTS :
            return action.posts;
        case ADD_POST :
            return [action.post , ...state];
            
        default :
        return state;
    }
    
} 