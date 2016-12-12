import { getToken } from '../api/auth/';
import { getDetails } from '../api/negotiator/';
import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  FORM_RESET,
  USER_DETAILS_PENDING,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_ERROR,
  UPDATE_LAST_ROUTE,
} from '../constants';

export function loginUser(code: string) {
  return (dispatch, getState) => {
    return dispatch({
      types: [
        LOGIN_USER_PENDING,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_ERROR,
      ],
      payload: {
        promise: getToken(code)
          .then((res) => {
            return res;
          }),
      },
    });
  };
}

export function getUserDetails() {
  return (dispatch, getState) => {
    return dispatch({
      types: [
        USER_DETAILS_PENDING,
        USER_DETAILS_SUCCESS,
        USER_DETAILS_ERROR,
      ],
      payload: {
        promise: getDetails()
          .then((res) => {
            return res;
          }),
      },
    });
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export function setRedirect(route: string) {
  return {
    type: UPDATE_LAST_ROUTE,
    payload: {
      route
    }
  };
}
