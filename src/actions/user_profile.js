import { FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILED, FETCH_USER_PROFILE_START } from "./action_types";
import {APIUrls} from '../helpers/urls';

export function fetchUserProfileStart() {
    return {
      type: FETCH_USER_PROFILE_START,
    };
}


export function fetchUserProfileSuccess(user) {
    return {
      type: FETCH_USER_PROFILE_SUCCESS,
      user: user,
    };
  }
  
  export function fetchUserProfileFailed(errorMessage) {
    return {
      type: FETCH_USER_PROFILE_FAILED,
      error: errorMessage,
    };
  }
  
  export function fetchUserProfile(userId) {
    return (dispatch) => {
      dispatch(fetchUserProfileStart());
      let url = APIUrls.fetchUser(userId);
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization : `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log('data', data);
          if (data.success) {
            dispatch(fetchUserProfileSuccess(data.data.user));
          } else {
            dispatch(fetchUserProfileFailed(data.message));
          }
        });
    };
  }