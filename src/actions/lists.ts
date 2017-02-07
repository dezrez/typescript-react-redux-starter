import { listService } from '../api/lists';
import { normalizerService, schema } from '../services/normalizer';

export class ListsActions {
  static GET_PROPERTIES_PENDING = 'App/GET_PROPERTIES_PENDING';
  static GET_PROPERTIES_SUCCESS = 'App/GET_PROPERTIES_SUCCESS';
  static GET_PROPERTIES_ERROR = 'App/GET_PROPERTIES_ERROR';
  static getProperties() {
    return (dispatch, getState) => {
      return dispatch({
        types: [
          this.GET_PROPERTIES_PENDING,
          this.GET_PROPERTIES_SUCCESS,
          this.GET_PROPERTIES_ERROR,
        ],
        payload: {
          promise: listService.getProperties()
            .then(res => res)
            .then((res: any) => normalizerService.normalizeAndDispatch(res.Collection, schema.propertyListArray))
        }
      });
    };
  }
}
