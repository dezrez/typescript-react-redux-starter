import * as React from 'react';
import { connect } from 'react-redux';

import Counter from '../components/counter';
import Table from '../components/table';
import {Container, Row, Column} from '../components/layout';
import Button from '../components/button';

import {IAppState} from '../reducers';
import {IPhoto} from '../models/photo';
import {getJsonFromApi} from '../actions/json';

interface IReconcilePageProps extends React.Props<any> {
  photos: IPhoto[];
  getPhotos: () => void;
};

function mapStateToProps(state: IAppState) {
  return {
    photos: state.json.photos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPhotos: (): void => dispatch(getJsonFromApi('photos'))
  };
}

class ReconcilePage extends React.Component<IReconcilePageProps, void> {
  render() {
    const { 
      photos, 
      getPhotos  
    } = this.props;

    return (
      <Container testid="counter">
        <h2>Reconcile</h2>
        <Row>
          <Table 
            columns={['Album Id', 'Id', 'Title']} 
            dataSelectors={['albumId', 'id', 'title']}
            data={photos} />
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
