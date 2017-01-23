import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  USER_DETAILS_PENDING,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_ERROR,
  UPDATE_LAST_ROUTE
} from '../constants';

export interface ISession {
  readonly token: string;
  readonly hasError: boolean;
  readonly isLoading: boolean;
  readonly user: any;
  readonly route: string;
}

const INITIAL_STATE = {
  token: null,
  hasError: false,
  isLoading: false,
  user: null,
  route: null
};

export function sessionReducer(state = INITIAL_STATE,
                        action = { type: '', payload: null }) {
  switch (action.type) {

  case LOGIN_USER_PENDING:
    return Object.assign({}, state, {
      token: null,
      hasError: false,
      isLoading: true,
      user: null
    });

  case LOGIN_USER_SUCCESS:
    return Object.assign({}, state, {
      token: action.payload.access_token,
      hasError: false,
      isLoading: false,
      user: null
    });

  case LOGIN_USER_ERROR:
    return Object.assign({}, state, {
      hasError: true,
      isLoading: false,
    });

  case USER_DETAILS_SUCCESS:
    return Object.assign({}, state, {
      user: action.payload,
      isLoading: false
    });

  case USER_DETAILS_PENDING:
    return Object.assign({}, state, {
      user: null,
      isLoading: true
    });

  case USER_DETAILS_ERROR:
    return Object.assign({}, state, {
      user: null,
      isLoading: false      
    });

  case LOGOUT_USER:
    return INITIAL_STATE;

  case UPDATE_LAST_ROUTE:
    return Object.assign({}, state, {
      route: action.payload.route,
      isLoading: true
    });

  default:
    return state;
  }
}
