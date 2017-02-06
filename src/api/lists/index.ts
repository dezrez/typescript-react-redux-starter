import { RequestBase } from '../server';

export class ListService extends RequestBase {
  constructor() {
    super('api/list');
  }

  getProperties() {
    return this.post('property', {

    })
    .then(json => json);
  }
}

export const listService = new ListService();
