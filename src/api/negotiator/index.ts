import {get, getDefaultRequestHeaders} from '../server';
import { Config } from '../../constants';

const BASE_URL = Config.ApiUrl + '/api/negotiator';

import { normalize } from 'normalizr';
import {negotiators} from '../../store/schema';

export function getDetails() {
    return new Promise((resolve, reject) => {
      return get(BASE_URL + '/me', getDefaultRequestHeaders())
      .then(json => {
        const normalisedData = normalize(json, negotiators);
        return resolve(normalisedData);
      })
      .then(data => data, (err) => 
        reject(new Error('Failed to find your details')));
    });
}
