import {IReconcileItem} from '../../models/reconcileItem';
import {IReconcile} from '../../reducers/reconcile';
import * as _ from 'lodash';

export function automatchReconcile(
    accountItems: IReconcileItem[], 
    statementItems: IReconcileItem[]): IReconcile {

    let finalAccountStatement: IReconcileItem[] = [];
    let finalStatementItems: IReconcileItem[] = [];

    accountItems.forEach((item: IReconcileItem) => {
        let matchedItem = _.find(statementItems, i => i.amount === item.amount);
        let index = _.findIndex(statementItems, i => i.amount === item.amount);
        if (matchedItem) {
            matchedItem.matchedId = item.id;
            item.matchedId = matchedItem.id;
            finalStatementItems.push(matchedItem);
            statementItems.splice(index, 1);
        }
        finalAccountStatement.push(item);
    });
    
    statementItems.forEach((item: IReconcileItem) => {
        let matchedItem = _.find(finalStatementItems, i => i.id === item.id);
        if (!matchedItem) {
            finalStatementItems.push(item);
        }
    });
    
    return {
        accountItems: finalAccountStatement,
        statementItems: finalStatementItems
    } as IReconcile;
}
