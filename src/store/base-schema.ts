import {schema, Schema} from 'normalizr';
import {omit} from 'lodash';

export class DezrezEntity extends schema.Entity {
    reducer = (state = {}, action = { type: '', payload: null }) => {
        switch (action.type) {
            case 'ADD_' + this.keyString:
                return {
                    ...state,
                    ...action.payload[this.keyString]
                };
            case 'UPDATE_' + this.keyString:
                return {
                    ...state,
                    [action.payload.Id]: {
                        ...state[action.payload.Id],
                        ...action.payload
                    }
                }
            case 'REMOVE_' + this.keyString:
                return omit(state, action.payload.Id);
            default:
                return state;
        }
    }
    
    keyString: string;

    constructor (key: string, 
        definition?: Schema, options?: schema.EntityOptions) {
        super(key, definition, options);
        this.keyString = key;
    }
}