import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer } from 'redux-form';
import { counterReducer, ICounter } from './counter';
import { jsonReducer, IJson } from './json';
import session from './session';

const rootReducer = combineReducers({
  session,
  counter: counterReducer,
  routing: routerReducer,
  form: reducer,
  json: jsonReducer
});

export interface IAppState {
  counter: ICounter; 
  session: any; 
  json: IJson;
}

export default rootReducer;
