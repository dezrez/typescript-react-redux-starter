import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider, Store } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './store/routes';
import configureStore from './store/configure-store';
import {IAppState} from './reducers';

import './styles/bootstrap.scss';

// Set by webpack
declare const __TEST__: boolean;

export const store: Store<IAppState> = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

if (!__TEST__) {
  ReactDOM.render(
    <div>
      <Provider store={ store }>
        <Router history={ history }>
          { routes }
        </Router>
      </Provider>
    </div>,
    document.getElementById('root')
  );
}
