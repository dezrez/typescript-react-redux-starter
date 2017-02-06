import { schema } from 'normalizr';
import { DezrezEntity } from './base-schema';

export const dezrezenums = new DezrezEntity('dezrezenums', {}, {idAttribute: 'Id'});

export const contactItems = new DezrezEntity('contactItems', {
    Type: dezrezenums
}, {idAttribute: 'Id'});

export const negotiators = new DezrezEntity('negotiators', {
    Gender: dezrezenums,
    PrimaryTelephone: contactItems,
    PrimaryEmail: contactItems,
    ContactItems: [contactItems]
}, {idAttribute: 'Id'});

export const listNegotiator = new DezrezEntity('listNegotiator', {
    Gender: dezrezenums,
    PrimaryTelephone: contactItems,
    PrimaryEmail: contactItems
}, {idAttribute: 'Id'});

export const extendedPrice = new DezrezEntity('extendedPrice', {
    PriceType: dezrezenums,
    PriceQualifierType: contactItems,
}, {idAttribute: 'Id'});

export const document = new DezrezEntity('document', {
    DocumentType: dezrezenums,
    DocumentSubType: dezrezenums,
    CreatedBy: listNegotiator
}, {idAttribute: 'Id'});

export const address = new DezrezEntity('address', {
    AddressSource: dezrezenums,
    CreatedBy: listNegotiator
}, {idAttribute: 'Id'});

export const person = new DezrezEntity('person', {
    PrimaryTelephone: contactItems,
    PrimaryEmail: contactItems,
    ContactItems: [contactItems],
    Addresses: [address],
    Gender: dezrezenums,
    RelationshipType: dezrezenums,
    SystemStatus: dezrezenums
}, {idAttribute: 'Id'});

export const groupMember = new DezrezEntity('groupMember', {
    RelationshipType: dezrezenums,
    SystemStatus: dezrezenums,
    Person: person
}, {idAttribute: 'Id'});

export const group = new DezrezEntity('group', {
    GroupType: dezrezenums,
    GroupIcon: dezrezenums,
    SystemStatus: dezrezenums,
    CreatedBy: listNegotiator,
    //Members: [groupMember] // Excluded until fix release from Normalizr.
}, {idAttribute: 'Id'});

export const deposit = new DezrezEntity('deposit', {
    Scheme: dezrezenums
}, {idAttribute: 'Id'});

export const propertyList = new DezrezEntity('propertyList', {
    RoleType: dezrezenums,
    RoleStatus: dezrezenums,
    PropertyType: dezrezenums,
    LeaseType: dezrezenums,
    MarketingFlags: [dezrezenums],
    AskingPrice: extendedPrice,
    ExchangedRecordedBy: listNegotiator,
    Negotiators: [listNegotiator],
    DefaultPicture: document,

    OfferingGroup: group,
    OwningGroup: group,
    OwningTeam: group,

    // Auctions
    AuctionRoleType: dezrezenums,
    Reserve: extendedPrice,

    // BaseList
    CreatedBy: listNegotiator
}, {idAttribute: 'Id'});

export const propertyListArray = new schema.Array(propertyList);
