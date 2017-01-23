import { 
    GET_RECONCILE_ITEMS, 
    AUTOMATCH_RECONCILE_ITEMS
} from '../constants';

import { IReconcileItem } from '../models/reconcileItem';

interface Action<T> {
  readonly type: string;
  readonly payload?: T;
}

interface ActionCreator<T> {
  readonly type: string;
  (payload: T): Action<T>;
}

const actionCreatorFunction = <T>(type: string): ActionCreator<T> =>
  Object.assign((payload: T): any => ({type, payload}), {type});


export class IReconcile {
  readonly accountItems: IReconcileItem[];
  readonly statementItems: IReconcileItem[];
}

const INITIAL_STATE: IReconcile = {
  accountItems: [],
  statementItems: []
};

const accountItems = require('../assets/storedAccountData.json');
const statementItems = require('../assets/bankStatementData.json');

const objectAssign = <T>(state: T, data: T): T => {
  return Object.assign({} as T, state, data as T);
};

export function reconcileReducer(state = INITIAL_STATE, 
  action: Action<IReconcile> = { type: '' }) {
  switch (action.type) {
    case GET_RECONCILE_ITEMS:
        return objectAssign<IReconcile>(
          state, 
          <IReconcile>{ 
            accountItems: accountItems, 
            statementItems: statementItems
          });
    case AUTOMATCH_RECONCILE_ITEMS:
        return Object.assign({}, state, action.payload);
    default:
        return state;
  }
}
