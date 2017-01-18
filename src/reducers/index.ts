import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer } from 'redux-form';
import { counterReducer, ICounter } from './counter';
import session from './session';

const rootReducer = combineReducers({
  session,
  counter: counterReducer,
  routing: routerReducer,
  form: reducer
});

export interface IAppState {
  counter: ICounter; 
  session: any; 
}

export default rootReducer;
