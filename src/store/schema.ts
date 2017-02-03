import { DezrezEntity } from './base-schema';

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


