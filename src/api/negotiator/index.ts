import { RequestBase } from '../server';
import { normalize } from 'normalizr';
import { negotiators } from '../../store/schema';

export class NegotiatorService extends RequestBase {
  constructor() {
    super('api/negotiator');
  }

  getDetails() {
    return this.get('me')
      .then(json => {
        const normalisedData = normalize(json, negotiators);
        return normalisedData;
      });
  }
}

export const negotiatorService = new NegotiatorService();
