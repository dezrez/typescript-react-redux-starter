import * as React from 'react';
import { connect } from 'react-redux';

import Counter from '../components/counter';
import Table from '../components/table';
import {Container, Row, Column} from '../components/layout';
import Button from '../components/button';

import {IAppState} from '../reducers';
import {getReconcileItems, automatchReconcileItems} from '../actions/reconcile';
import {IReconcile} from '../reducers/reconcile';

interface IReconcilePageProps extends React.Props<any> {
  reconcile: IReconcile;
  getReconcileItems: () => void;
  performAutomatch: (reconcile: IReconcile) => void;
};

function mapStateToProps(state: IAppState) {
  return {
    reconcile: state.reconcile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getReconcileItems: (): void => dispatch(getReconcileItems()),
    performAutomatch: (reconcile: IReconcile): void => 
      dispatch(automatchReconcileItems(reconcile))
  };
}

class ReconcilePage extends React.Component<IReconcilePageProps, void> {
  componentWillMount() {
    this.props.getReconcileItems();
  }

  onAutomatch = () => {
    this.props.performAutomatch(this.props.reconcile);
  }

  render() {
    const accountItems = 
      this.props.reconcile.accountItems.filter(i => !i.matchedId);
    const statementItems = 
      this.props.reconcile.statementItems.filter(i => !i.matchedId);

    const columns = ['Account Number', 'Amount'];
    const dataSelectors = ['accountNumber', 'amount'];

    return (
      <Container testid="counter">
        <h2>Reconcile</h2>
        <Row>
          <Button
            testid="photos-getButton"
            id="qa-photos-get-button"
            className="col-xs-2"
            onClick={this.onAutomatch}>
            Automatch
          </Button>
        </Row>
        
        <Row>
          <Column size={6} >
            <Table 
              columns={columns} 
              dataSelectors={dataSelectors} 
              data={accountItems} />
          </Column>

          <Column size={6} >
            <Table 
              columns={columns} 
              dataSelectors={dataSelectors} 
              data={statementItems} />
          </Column>
        </Row>
        {this.props.children}
    </Container>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReconcilePage);
