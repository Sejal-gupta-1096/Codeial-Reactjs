import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED , SIGNUP_START,SIGNUP_SUCCESS,SIGNUP_FAILED } from './action_types';
import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user : user
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
          dispatch(loginSuccess(data.user));
        }else{
          dispatch(loginFailed(data.message));
        }
      });
  };
}

export function startSignup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user : user
  };
}

export function signupFailed(errorMessage) {
  return {
    type: SIGNUP_FAILED,
    error : errorMessage
  };
}

export function signup(email, password , confirmPassword , name) {
  return (dispatch) => {
    dispatch(startSignup());
    let url = APIUrls.signUp();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password , confirmPassword , name}),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
        if(data.success){
          dispatch(signupSuccess(data.user));
        }else{
          dispatch(signupFailed(data.message));
        }
      });
  };
}
