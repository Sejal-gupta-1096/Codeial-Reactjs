import { UPDATE_POSTS, ADD_POST, ADD_COMMENT, ADD_POST_LIKE } from "../actions/action_types";

export default function posts(state=[] , action){

    switch(action.type){
        case UPDATE_POSTS :
            return action.posts;
        case ADD_POST :
            return [action.post , ...state];
        case ADD_COMMENT :
            return state.map((post) => {
                if(post._id === action.postId){
                    return {
                        ...post,
                        comments : [action.comment , ...post.comments]
                    }
                }
                return post;
            })
        case ADD_POST_LIKE :
            return state.map((post) => {
                if(post._id === action.postId){
                    if(action.deleted === false){
                        return {
                            ...post,
                            likes : [...post.likes , action.userId]
                        }
                    }else{
                        return{
                            ...post,
                            likes : post.likes.filter( (like) => like !== action.userId)
                        }
                       
                    }
                    
                }
                return post;
            })
            
        default :
        return state;
    }
    
} 