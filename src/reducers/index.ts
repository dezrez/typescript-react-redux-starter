import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer } from 'redux-form';
import { counterReducer, ICounter } from './counter';
import { jsonReducer, IJson } from './json';
import { reconcileReducer, IReconcile } from './reconcile';
import { sessionReducer, ISession } from './session';
import { listsReducer, ILists } from './lists';

import * as Entities from '../store/schema';

let reducers = {
  session: sessionReducer,
  counter: counterReducer,
  routing: routerReducer,
  form: reducer,
  json: jsonReducer,
  reconcile: reconcileReducer,
  lists: listsReducer
};

for (let key in Entities) {
  if (Entities.hasOwnProperty(key) && Entities[key].reducer) {
    let obj = { [key]: Entities[key].reducer };
    reducers = Object.assign({}, reducers, obj);
  }
}
const rootReducer = combineReducers(reducers);

export interface IAppState {
  counter: ICounter; 
  session: ISession; 
  json: IJson;
  reconcile: IReconcile;
  lists: ILists;
}

export default rootReducer;
