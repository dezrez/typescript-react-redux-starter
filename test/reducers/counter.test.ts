import { Map } from 'immutable';
import * as chai from 'chai';
import fireAction from '../utils/fire-action';

import {counterReducer, ICounter} from '../../src/reducers/counter';

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../../src/constants';

let state = counterReducer();

describe('Counter Reducer', () => {
  describe('inital state', () => {
    it('should be not null', () => {
      chai.assert.isNotNull(state);
    });
  });

  describe('on INCREMENT_COUNTER', () => {
    it('should increment state.count', () => {
      const previousValue = state.count;
      state = fireAction(counterReducer, state, INCREMENT_COUNTER);
      chai.assert.equal(state.count, previousValue + 1);
    });
  });

  describe('on DECREMENT_COUNTER', () => {
    it('should decrement state.count', () => {
      const previousValue = state.count;
      state = fireAction(counterReducer, state, DECREMENT_COUNTER);
      chai.assert.equal(state.count, previousValue - 1);
    });
  });
});

