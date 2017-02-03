import { authenticationService } from '../api/auth/';
import { negotiatorService } from '../api/negotiator/';
import {keys} from 'lodash';
import * as Router from 'react-router-redux';

export class SessionActions {
  static LOGIN_USER_PENDING = 'App/LOGIN_USER_PENDING';
  static LOGIN_USER_SUCCESS = 'App/LOGIN_USER_SUCCESS';
  static LOGIN_USER_ERROR = 'App/LOGIN_USER_ERROR';
  static loginUser(code: string, route: string) {
    return (dispatch, getState) => {
      return dispatch({
        types: [
          this.LOGIN_USER_PENDING,
          this.LOGIN_USER_SUCCESS,
          this.LOGIN_USER_ERROR,
        ],
        payload: {
          promise: authenticationService.getToken(code)
            .then((res) => {
              return res;
            })
        }
      })
      .then(() => dispatch(this.getUserDetails()))
      .then(() => dispatch(Router.push(route === '' || route === undefined 
        ? '/' 
        : route))
      );
    };
  }

  static USER_DETAILS_PENDING = 'App/USER_DETAILS_PENDING';
  static USER_DETAILS_SUCCESS = 'App/USER_DETAILS_SUCCESS';
  static USER_DETAILS_ERROR = 'App/USER_DETAILS_ERROR';
  static getUserDetails() {
    return (dispatch, getState) => {
      return dispatch({
        types: [
          this.USER_DETAILS_PENDING,
          this.USER_DETAILS_SUCCESS,
          this.USER_DETAILS_ERROR,
        ],
        payload: {
          promise: negotiatorService.getDetails()
            .then((res: any) => {
              const normalisedKeys = keys(res.entities);
              let promiseArray = [];
              normalisedKeys.forEach(element => {
                promiseArray.push(dispatch({
                  type: 'ADD_' + element,
                  payload: {
                    [element]: res.entities[element]
                  }
                }));
              });
              return Promise.all(promiseArray).then(results => {
                return keys(res.entities['negotiators'])[0];
              });
            }),
        },
      });
    };
  }

  static LOGOUT_USER = 'App/LOGOUT_USER';
  static logoutUser() {
    return {
      type: this.LOGOUT_USER,
    };
  }

  static UPDATE_LAST_ROUTE = 'App/UPDATE_LAST_ROUTE';
  static setRedirect(route: string) {
    return {
      type: this.UPDATE_LAST_ROUTE,
      payload: {
        route
      }
    };
  }
}
