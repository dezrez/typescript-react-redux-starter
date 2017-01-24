import * as React from 'react';
import {IReconcile} from '../../reducers/reconcile';

import {Container, Column, Row} from '../layout';

import * as _ from 'lodash';

interface IReconcileDiffViewProps extends React.Props<any> {
    data: IReconcile;
};

const ReconcileDiffView = ({ 
    data = null, 
    children = null 
}: IReconcileDiffViewProps) => {

    const rows = [];
    if (data && data.accountItems && data.statementItems) {
        rows.push(...data.accountItems.map(item => {
            const matchedItem = _.find(data.statementItems, 
                i => i.id === item.matchedId);
            if (!matchedItem) { 
                return null;
            }
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.amount}</td>
                    <td>{matchedItem.id}</td>
                    <td>{matchedItem.amount}</td>
                </tr>
            );
        }));
    }

    return (
        <Container>
            {children || 
                <Row>
                    <Column size={12}>
                    </Column>
                </Row>
            }
            <Row>
                <Column size={12}>
                    <table className={'table'}>
                        <thead className="thead-default">
                            <tr>
                                <th>Payment Id</th>
                                <th>Amount</th>
                                <th>Matched Payment Id</th>
                                <th>Matched Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>    
                </Column>
            </Row>
        </Container>
    );
};

export default ReconcileDiffView;
