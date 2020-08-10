import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from './action_types';
import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error : errorMessage
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    let url = APIUrls.logIn();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
        if(data.success){
          dispatch(loginSuccess());
        }else{
          dispatch(loginFailed(data.message));
        }
      });
  };
}
