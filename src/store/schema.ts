import {schema, Schema} from 'normalizr';
import * as _ from 'lodash';

export class DezrezEntity extends schema.Entity {
    reducer = (state = {}, action = { type: '', payload: null }) => {
        switch (action.type) {
            case 'ADD_' + this.keyString:
                return {
                    ...state,
                    ...action.payload[this.keyString]
                };
            // case 'UPDATE_' + this.keyString:
            //     return state.map(negs => negs.Id === action.payload.Id 
            //             ? Object.assign({}, negs, action.payload) 
            //             : negs);
            // case 'REMOVE_' + this.keyString:
            //     const keyId = _.findIndex(state, e => 
            //         e.Id === action.payload.Id);
            //     state.splice(keyId, 1);
            //     return [...state];
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

const dezrezenums = new DezrezEntity('dezrezenums', {}, {idAttribute: 'Id'});

const contactItems = new DezrezEntity('contactItems', {
    Type: dezrezenums
}, {idAttribute: 'Id'});

const negotiators = new DezrezEntity('negotiators', {
    Gender: dezrezenums,
    PrimaryTelephone: contactItems,
    PrimaryEmail: contactItems,
    ContactItems: [contactItems]
}, {idAttribute: 'Id'});

export { negotiators, dezrezenums, contactItems };


