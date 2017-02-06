import { ListsActions } from '../actions/lists';

export interface ILists {
  readonly properties: number[];
}

const INITIAL_STATE = {
    properties: []
};

export function listsReducer(state = INITIAL_STATE,
                        action = { type: '', payload: null }) {
  switch (action.type) {

  case ListsActions.GET_PROPERTIES_PENDING:
    return Object.assign({}, state, {
      properties: []
    });

  case ListsActions.GET_PROPERTIES_SUCCESS:
    return Object.assign({}, state, {
      properties: action.payload
    });

  case ListsActions.GET_PROPERTIES_ERROR:
    return Object.assign({}, state, {
      properties: []
    });

  default:
    return state;
  }
}
