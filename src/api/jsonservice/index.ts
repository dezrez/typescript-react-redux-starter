import {get} from '../server';

const BASE_URL = 'http://jsonplaceholder.typicode.com';

export function getJsonData(endpoint: string) {
    return new Promise((resolve, reject) => {
      return get(BASE_URL + `/${endpoint}`)
      .then(json => resolve(json))
      .then(null, (err) => reject(new Error('Failed to find your details')));
    });
    
    
    
    //  get(BASE_URL + `/${endpoint}`)
    // .then(json => json)
    // .then(data => data, (err) => new Error('Failed to find your details'));
}

