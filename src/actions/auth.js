import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  AUTHETICATE_USER,
  LOG_OUT,
  CLEAR_AUTH_STATE,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
} from './action_types';
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
    user: user,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
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
        if (data.success) {
          localStorage.setItem('token', data.data.token);
          dispatch(loginSuccess(data.data.user));
        } else {
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
    user: user,
  };
}

export function signupFailed(errorMessage) {
  return {
    type: SIGNUP_FAILED,
    error: errorMessage,
  };
}

export function signup(email, password, confirmPassword, name) {
  return (dispatch) => {
    dispatch(startSignup());
    let url = APIUrls.signUp();
    console.log('checking ', confirmPassword, password); 
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({
        email,
        name,
        password,
        confirm_password: confirmPassword,
      }),
    }) 
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log('data', data);
        if (data.success) {
          dispatch(signupSuccess(data.data.user));
        } else {
          dispatch(signupFailed(data.message));
        }
      });
  };
}


export function authenticateUser(user){
  return{
    type : AUTHETICATE_USER,
    user : user
  }
}

export function logout(){
  return{
    type : LOG_OUT,
  }
}

export function clearAuthState(){
  return{
    type : CLEAR_AUTH_STATE,
  }
}

export function editUserSuccess(user) {
  return {
    type: EDIT_USER_SUCCESS,
    user: user,
  };
}

export function editUserFailed(errorMessage) {
  return {
    type: EDIT_USER_FAILED,
    error: errorMessage,
  };
}

export function editUser(name, password , confirmPassword , userId) {
  return (dispatch) => {
    let url = APIUrls.edit();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization : `Bearer ${localStorage.getItem('token')}`
      },
      body: getFormBody({ name, password , confirm_password : confirmPassword , id : userId }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
        if (data.success) {
          localStorage.setItem('token', data.data.token);
          dispatch(editUserSuccess(data.data.user));
        } else {
          dispatch(editUserFailed(data.message));
        }
      });
  };
}