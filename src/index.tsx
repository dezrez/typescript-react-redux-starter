import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider, Store } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './store/routes';
import configureStore from './store/configure-store';
import {IAppState} from './reducers';

import { addLocaleData, IntlProvider } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as es from 'react-intl/locale-data/es';

declare const __DEV__: boolean;
const localeData = require('../build/locales/data.json');

addLocaleData([...en, ...es]);
const language = navigator.language;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = localeData[languageWithoutRegionCode] || 
    localeData[language] || 
    localeData.en; 

import './styles/bootstrap.scss';

// Set by webpack
declare const __TEST__: boolean;

export const store: Store<IAppState> = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

if (!__TEST__) {
  ReactDOM.render(
    <div>
      <IntlProvider locale={language} messages={messages}>
        <Provider store={ store }>
          <Router history={ history }>
            { routes }
          </Router>
        </Provider>
      </IntlProvider>
    </div>,
    document.getElementById('root')
  );
}
