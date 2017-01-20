import * as React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/counter';
import Counter from '../components/counter';

import Table from '../components/table';

import {IAppState} from '../reducers';
import {IPhoto} from '../models/photo';
import {getJsonFromApi} from '../actions/json';

import {Container, Row, Column} from '../components/layout';

import Button from '../components/button';

interface ICounterPageProps extends React.Props<any> {
  counter: number;
  photos: IPhoto[];
  increaseCounter: () => void;
  decreaseCounter: () => void;
  getPhotos: () => void;
};

function mapStateToProps(state: IAppState) {
  return {
    counter: state.counter.count,
    photos: state.json.photos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: (): void => dispatch(increment()),
    decreaseCounter: (): void => dispatch(decrement()),
    getPhotos: (): void => dispatch(getJsonFromApi('photos'))
  };
}

class CounterPage extends React.Component<ICounterPageProps, void> {
  render() {
    const { 
      counter, 
      increaseCounter, 
      decreaseCounter, 
      photos, 
      getPhotos  
    } = this.props;

    return (
      <Container testid="counter">
        <Row>
          <Column size={12}>
            <h2
              data-testid="counter-heading"
              className="center caps"
              id="qa-counter-heading">
              Counters
            </h2>

            <Counter
              counter={ counter }
              increment={ increaseCounter }
              decrement={ decreaseCounter } />
          </Column>
          
          <Button
            testid="photos-getButton"
            id="qa-photos-get-button"
            className="col-xs-2"
            onClick={getPhotos}>
            Get Photos
          </Button>
          <Table 
            columns={['Album Id', 'Id', 'Title']} 
            dataSelectors={['albumId', 'id', 'title']}
            data={photos}
          />
        </Row>
        {this.props.children}
    </Container>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
