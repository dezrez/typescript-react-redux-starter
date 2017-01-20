import { 
    JSON_PHOTOS_PENDING, 
    JSON_PHOTOS_SUCCESS, 
    JSON_PHOTOS_ERROR 
} from '../constants';

import {getJsonData} from '../api/jsonservice';

export function getJsonFromApi(dataType: string) {
  return (dispatch, getState) => {
    return dispatch({
      types: [
        JSON_PHOTOS_PENDING, 
        JSON_PHOTOS_SUCCESS, 
        JSON_PHOTOS_ERROR 
      ],
      payload: {
        promise: getJsonData(dataType)
          .then((res) => {
            return res;
          }),
      },
    });
  };
}
