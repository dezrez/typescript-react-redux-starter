import * as React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Router } from 'react-router';

import Counter from '../components/counter';
import Table from '../components/table';
import {Container, Row, Column} from '../components/layout';
import Button from '../components/button';
import {ReconcileDiffView} from '../components/reconcile';

import {IAppState} from '../reducers';
import {getReconcileItems, automatchReconcileItems} from '../actions/reconcile';
import {IReconcile} from '../reducers/reconcile';

interface IReconcilePageProps extends React.Props<any> {
  reconcile: IReconcile;
  location: any;
  getReconcileItems: () => void;
  performAutomatch: (reconcile: IReconcile) => void;
};

function mapStateToProps(state: IAppState, props: any) {
  return {
    reconcile: state.reconcile,
    location: props.location
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

  showReconciledItems = () => {
    browserHistory.push('/reconcile/matches');
  }
  returnToReconcile = () => {
    browserHistory.goBack();
  }

  render() {
    const accountItems = 
      this.props.reconcile.accountItems.filter(i => !i.matchedId);
    const statementItems = 
      this.props.reconcile.statementItems.filter(i => !i.matchedId);

    const columns = ['Account Number', 'Amount'];
    const dataSelectors = ['accountNumber', 'amount'];
    
    const showMatches = this.props.children === null && 
      this.props.location.pathname === '/reconcile/matches';

    return (
      <Container testid="counter">
        {this.props.children || showMatches 
          ? <ReconcileDiffView data={this.props.reconcile}>
              <Button
                  testid="reconcile-goback"
                  id="qa-reconcile-goback-button"
                  className="col-xs-2"
                  onClick={this.returnToReconcile}>
                  Go Back
                </Button>
            </ReconcileDiffView>
          : <div>
              <h2>Reconcile</h2>
              <Row>
                <Button
                  testid="photos-getButton"
                  id="qa-photos-get-button"
                  className="col-xs-2"
                  onClick={this.onAutomatch}>
                  Automatch
                </Button>
                <Button
                  testid="photos-getButton"
                  id="qa-photos-get-button"
                  className="col-xs-2"
                  onClick={this.showReconciledItems}>
                  Show Matches
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
            </div>
        }
    </Container>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReconcilePage);
