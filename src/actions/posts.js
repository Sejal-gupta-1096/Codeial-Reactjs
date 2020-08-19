import { UPDATE_POSTS, ADD_POST, ADD_COMMENT } from './action_types';
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
  return {
    type : ADD_COMMENT,
    comment : comment,
    postId : postId
  }
}