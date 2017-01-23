import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer } from 'redux-form';
import { counterReducer, ICounter } from './counter';
import { jsonReducer, IJson } from './json';
import { reconcileReducer, IReconcile } from './reconcile';
import { sessionReducer, ISession } from './session';

const rootReducer = combineReducers({
  session: sessionReducer,
  counter: counterReducer,
  routing: routerReducer,
  form: reducer,
  json: jsonReducer,
  reconcile: reconcileReducer
});

export interface IAppState {
  counter: ICounter; 
  session: ISession; 
  json: IJson;
  reconcile: IReconcile;
}

export default rootReducer;
