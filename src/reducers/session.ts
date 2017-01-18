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

import { Map, fromJS } from 'immutable';

const INITIAL_STATE: Map<any, any> = fromJS({
  token: null,
  hasError: false,
  isLoading: false,
  user: null,
  route: null
});

function sessionReducer(state = INITIAL_STATE,
                        action = { type: '', payload: null }) {
  switch (action.type) {

  case LOGIN_USER_PENDING:
    return state.merge(fromJS({
      token: null,
      hasError: false,
      isLoading: true,
      user: null
    }));

  case LOGIN_USER_SUCCESS:
    return state.merge(fromJS({
      token: action.payload.access_token,
      hasError: false,
      isLoading: false,
      user: null
    }));

  case LOGIN_USER_ERROR:
    return state.merge(fromJS({
      hasError: true,
      isLoading: false,
    }));

  case USER_DETAILS_SUCCESS:
    return state.merge(fromJS({
      user: action.payload,
      isLoading: false
    }));

  case USER_DETAILS_PENDING:
    return state.merge(fromJS({
      user: null,
      isLoading: true
    }));

  case USER_DETAILS_ERROR:
    return state.merge(fromJS({
      user: null,
      isLoading: false      
    }));

  case LOGOUT_USER:
    return state.merge(INITIAL_STATE);

  case UPDATE_LAST_ROUTE:
    return state.merge(fromJS({
      route: action.payload.route,
      isLoading: true
    }));

  default:
    return state;
  }
}

export default sessionReducer;
