import {
  JSON_PHOTOS_PENDING,
  JSON_PHOTOS_SUCCESS,
  JSON_PHOTOS_ERROR
} from '../constants';

import { IPhoto } from '../models/photo';

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


export class IJson {
  readonly photos: IPhoto[];
}

const INITIAL_STATE: IJson = {
  photos: []
};

const objectAssign = <T>(state: T, data: T): T => {
  return Object.assign({} as T, state, data as T);
};

export function jsonReducer(state = INITIAL_STATE, 
  action: Action<IPhoto[]> = { type: '' }) {
  switch (action.type) {

  case JSON_PHOTOS_SUCCESS:
    debugger;
    return objectAssign<IJson>(state, <IJson>{ 
      photos: state.photos.concat(action.payload) 
    });

  case JSON_PHOTOS_PENDING:
  case JSON_PHOTOS_ERROR:
    return state;
  default:
    return state;
  }
}