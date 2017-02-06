import {schema, Schema} from 'normalizr';
import {omit} from 'lodash';

export class DezrezEntity extends schema.Entity {
    reducer = (state = {}, action = { type: '', payload: null }) => {
        switch (action.type) {
            case 'ADD_' + this.keyName:
                return {
                    ...state,
                    ...action.payload[this.keyName]
                };
            case 'UPDATE_' + this.keyName:
                return {
                    ...state,
                    [action.payload.Id]: {
                        ...state[action.payload.Id],
                        ...action.payload
                    }
                };
            case 'REMOVE_' + this.keyName:
                return omit(state, action.payload.Id);
            default:
                return state;
        }
    }
    
    keyName: string;

    constructor (key: string, 
        definition?: Schema, options?: schema.EntityOptions) {
        super(key, definition, options);
        this.keyName = key;
    }
}
