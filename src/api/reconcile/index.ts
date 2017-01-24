import {IReconcileItem} from '../../models/reconcileItem';
import {IReconcile} from '../../reducers/reconcile';
import * as _ from 'lodash';

export function automatchReconcile(
    initialAccountItems: IReconcileItem[], 
    initialStatementItems: IReconcileItem[]): IReconcile {

    let finalAccountStatement: IReconcileItem[] = [];
    let finalStatementItems: IReconcileItem[] = [];
    let managedStatementList = [].concat(initialStatementItems);

    initialAccountItems.forEach((item: IReconcileItem) => {
        let matchedItem = _.find(managedStatementList, 
            i => i.amount === item.amount);
        let index = _.findIndex(managedStatementList, 
            i => i.amount === item.amount);
        if (matchedItem) {
            matchedItem.matchedId = item.id;
            item.matchedId = matchedItem.id;
            finalStatementItems.push(matchedItem);
            managedStatementList.splice(index, 1);
        }
        finalAccountStatement.push(item);
    });
    
    managedStatementList.forEach((item: IReconcileItem) => {
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
