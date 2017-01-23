import { 
    GET_RECONCILE_ITEMS,
    AUTOMATCH_RECONCILE_ITEMS
} from '../constants';
import {IReconcile} from '../reducers/reconcile';

import {automatchReconcile} from '../api/reconcile';

export function getReconcileItems() {
    return {
        type: GET_RECONCILE_ITEMS
    };
}

export function automatchReconcileItems(reconcile: IReconcile) {
    return {
        type: AUTOMATCH_RECONCILE_ITEMS,
        payload: 
            automatchReconcile(reconcile.accountItems, reconcile.statementItems)
    };
}
