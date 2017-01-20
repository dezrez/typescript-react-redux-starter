import {get, getDefaultRequestHeaders} from '../server';
import { Config } from '../../constants';

const BASE_URL = Config.ApiUrl + '/api/negotiator';

export function getDetails() {
    return new Promise((resolve, reject) => {
      return get(BASE_URL + '/me', getDefaultRequestHeaders())
      .then(json => resolve(json))
      .then(data => data, (err) => reject(new Error('Failed to find your details')));
    });
}
