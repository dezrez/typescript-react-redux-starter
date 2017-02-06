import { normalize, denormalize, schema as Normalizer } from 'normalizr';
import { store } from '../';
import { keys } from 'lodash';

import * as Schema from '../store/schema';
import { DezrezEntity } from '../store/base-schema';

export class NormalizerService {
    normalizeAndDispatch(data: any, schema: DezrezEntity | Normalizer.Array) {
        const {entities, result} = normalize(data, schema);
        const normalisedKeys = keys(entities);
        let promiseArray = [];
        normalisedKeys.forEach(element => {
            promiseArray.push(store.dispatch({
                type: 'ADD_' + element,
                payload: {
                    [element]: entities[element]
                }
            }));
        });

        return Promise.all(promiseArray).then(results => {
            return result;
        });
    }

    // Shouldn't error as default state being passed to this from store shouldn't be null should be {} or []
    denormalize(data: number|number[], schema: DezrezEntity | Normalizer.Array) {
        return denormalize(data, schema, store.getState());
    }
}

export const schema = Schema;
export const normalizerService = new NormalizerService();
