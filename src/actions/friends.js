
import {APIUrls} from '../helpers/urls';
import { FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILED, ADD_FRIEND_SUCCESS, REMOVE_FRIEND_SUCCESS } from './action_types';


export function fetchFriendsSucess(friends) {
    return {
      type: FETCH_FRIENDS_SUCCESS,
      friends: friends,
    };
  }
  
  export function fetchFriendsFailed(errorMessage) {
    return {
      type: FETCH_FRIENDS_FAILED,
      error: errorMessage,
    };
  }
  
  export function fetchFriends(userId) {
    return (dispatch) => {
      let url = APIUrls.fetchUserFriends();
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
            dispatch(fetchFriendsSucess(data.data.friends));
          } else {
            dispatch(fetchFriendsFailed(data.message));
          }
        });
    };
  }

  export function addFriendSuccess(friend) {
    return {
      type: ADD_FRIEND_SUCCESS,
      friend : friend
    };
  }

  export function removeFreindSuccess(friend) {
    return {
      type: REMOVE_FRIEND_SUCCESS,
      friend : friend
    };
  }

  