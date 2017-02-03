const BASE_URL = 'http://jsonplaceholder.typicode.com';

export function getJsonData(endpoint: string) {
    return new Promise((resolve, reject) => {
      return fetch(BASE_URL + `/${endpoint}`)
      .then(res => resolve(res.json()))
      .then(null, (err) => reject(new Error('Failed to find your details')));
    });
}

