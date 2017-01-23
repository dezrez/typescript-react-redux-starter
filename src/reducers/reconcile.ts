import { 
    GET_RECONCILE_ITEMS, 
    AUTOMATCH_RECONCILE_ITEMS
} from '../constants';

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
  readonly accountItems: any[];
  readonly statementItems: any[];
}

const INITIAL_STATE: IReconcile = {
  accountItems: [],
  statementItems: []
};

const objectAssign = <T>(state: T, data: T): T => {
  return Object.assign({} as T, state, data as T);
};

export function reconcileReducer(state = INITIAL_STATE, 
  action: Action<IReconcile> = { type: '' }) {
  switch (action.type) {
    case GET_RECONCILE_ITEMS:
        return state;
    case AUTOMATCH_RECONCILE_ITEMS:
        // DO SOME MATCHING LOGIC
        return state;
    default:
        return state;
  }
}
