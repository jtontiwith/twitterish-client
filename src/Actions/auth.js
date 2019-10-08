import {saveAuthToken, clearAuthToken} from '../local-storage';
import { request } from './index';

/* ========== synchronous actions ========== */

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

/* ========== END synchronous actions ========== */


/* ========== asynchronous actions ========== */

//post to register user
export const register = (user) => dispatch => {
  console.log('user ', user)
  console.log(JSON.stringify({ user: user }))
  //dispatch(request());
  fetch(`http://localhost:4000/api/users`, {
    method: 'POST',
    body: JSON.stringify({ user: user }),
    headers: {
      'Content-Type': 'application/json'
    }  
  }).then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    console.log(res)
    return res.json()
  }).then((data) => {
    console.log(data)
    //dispatch(fetchData(user))
    console.log('done')
  }).catch(err => {
    console.log(err) //notification in production
  });
}; 

//hmmm
// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
  //const decodedToken = jwtDecode(authToken);
  //dispatch(setAuthToken(authToken));
  //dispatch(authSuccess(decodedToken.user));
  //saveAuthToken(authToken);
};



//post to login
export const login = (username, password) => dispatch => {
  //dispatch(request());
  console.log('yo')
  return (
      fetch(`http://localhost:4000/api/users/login`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTUsImV4cCI6MTU3NDYwNzY3NH0.y8gU9kz2qu7ocXz1EAKyCq7KzIQj2QutsmEgE4V5MIs'
          },
          body: JSON.stringify({
              email: 'thisgonwork@email.com',
              password: 'thisgonwork'
          })
      })
      .then(res => res.json())
      //.then(({authToken}) => storeAuthInfo(authToken, dispatch))
      //.catch(err => dispatch(error(err)))
      .catch(err => console.log(err))
  );
};

