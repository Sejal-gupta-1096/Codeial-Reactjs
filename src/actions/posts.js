import { UPDATE_POSTS, ADD_POST, ADD_COMMENT, ADD_POST_LIKE } from './action_types';
import { APIUrls } from '../helpers/urls';

export function fetchPosts() {
  return (dispatch) => {
    let url = APIUrls.fetchPosts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts: posts,
  };
}

export function addPost(post){
  return {
    type : ADD_POST,
    post : post
  }
}

export function addComment(comment , postId){
  console.log('Adding Comment' , comment)
  return {
    type : ADD_COMMENT,
    comment : comment,
    postId : postId
  }
}

export function addPostLikesToStore(postId , userId , deleted){
  return{
    type : ADD_POST_LIKE,
    postId,
    userId,
    deleted
  }
}