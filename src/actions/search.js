import { SEARCH_USERS_SUCCESS } from "./action_types";
import {APIUrls} from '../helpers/urls';

export function searchUsersSuccess(users) {
    return {
      type: SEARCH_USERS_SUCCESS,
      users,
    };
  }
  

export function searchUsers(searchText) {
return (dispatch) => {
    let url = APIUrls.search(searchText);
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
        dispatch(searchUsersSuccess(data.data.users));
        } else {
        dispatch(searchUsersSuccess([]));
        }
    });
};
}