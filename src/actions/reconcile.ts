import { 
    GET_RECONCILE_ITEMS,
    AUTOMATCH_RECONCILE_ITEMS
} from '../constants';

// const accountItems = require('../assets/storedAccountData.json');
// const statementItems = require('../assets/bankStatementData.json');

export function getReconcileItems() {
    return {
        type: GET_RECONCILE_ITEMS,
        payload: {
            accountItems: [],
            statementItems: []
        }
    };
}

export function automatchReconcileItems() {
    return {
        type: AUTOMATCH_RECONCILE_ITEMS,
        payload: {
            accountItems: [],
            statementItems: []
        }
    };
}
