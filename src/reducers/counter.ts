import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../constants';
import { fromJS } from 'immutable';

import { Dezrez } from '../models/baseModules';

export interface Action<T> {
  readonly type: string;
  readonly payload?: T;
}

interface ActionCreator<T> {
  readonly type: string;
  (payload: T): Action<T>;
}

const actionCreatorFunction = <T>(type: string): ActionCreator<T> =>
  Object.assign((payload: T): any => ({type, payload}), {type});

export const isType = <T>(action: Action<any>, actionCreator: ActionCreator<T>):
  action is Action<T> => action.type === actionCreator.type;

// export const createListItemAction =
//   actionCreator<ICounter>('CREATE_LIST_ITEM_ACTION_TYPE')

export class ICounter {
  readonly count: number;
  readonly property: Dezrez.Property.Query.Get.PropertyDataContract;
}

const INITIAL_STATE: ICounter = {
  count: 0,
  property: null
};

// const INITIAL_STATE = fromJS({
//   count: 0
// });

/// Alternative immutable implementation
// interface ExtendedMap<T> {
//   get((prop: T) => string): any;
// }
// class ExtendedMap<T> {
//   readonly _map: Map<any, any>;
//   constructor(object: T) {
//     this._map = Map(object);
//   }

//   get<R>(key: (x: T) => R): R {
//     return this._map.get(this.getPropertyName(key)) as R;
//   }

//   private getPropertyName(propertyFunction: Function): string {
//       return /\.([^\.;]+);?\s*\}$/.exec(propertyFunction.toString())[1];
//   }
// }
// const newState = new ExtendedMap<ICounter>(INITIAL_STATE);
// const count = newState.get(a => a.property.Id);

const objectAssign = <T>(state: T, data: T): T => {
  return Object.assign({} as T, state, data as T);
};

export function counterReducer(state = INITIAL_STATE, 
  action: Action<ICounter> = { type: '' }) {
  switch (action.type) {

  case INCREMENT_COUNTER:
    return objectAssign<ICounter>(state, <ICounter>{ count: state.count + 1 });

  case DECREMENT_COUNTER:
    return objectAssign<ICounter>(state, <ICounter>{ count: state.count - 1 });

  default:
    return state;
  }
}
