import { UPDATE_POSTS } from './action_types';
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
