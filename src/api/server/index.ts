import {fetch} from 'whatwg-fetch';
import {store} from '../../';

export function post(url, data, headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}) {
  return fetch(url, {
    method: 'post',
    headers: headers,
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}

export function get(url, headers = {}) {
  return fetch(url, {
    method: 'get',
    headers: headers
  })
  .then(response => response.json());
}


export const getDefaultRequestHeaders = () => { 
  return {
    'Content-Type': 'application/json',
    'Authorization': `bearer ${store.getState().session.get('token')}`,
    'Rezi-Api-Version': '1'
  };
};

