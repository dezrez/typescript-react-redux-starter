import * as React from 'react';
import { connect } from 'react-redux';
import {Container, Row, Column} from '../components/layout';

import { IAppState } from '../reducers';
import { ListsActions } from '../actions/lists';
import { normalizerService, schema } from '../services/normalizer';

import { listService } from '../api/lists';

import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

interface IPropertyListProps extends React.Props<any> {
  propertyIds: number[];
  properties: any[];
  getProperties: () => void;
};

function mapStateToProps(state: IAppState, props: any) {
  return {
    propertyIds: state.lists.properties,
    properties: normalizerService.denormalize(state.lists.properties, schema.propertyListArray)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProperties: () => dispatch(ListsActions.getProperties())
  };
}

class PropertyListPage extends React.Component<IPropertyListProps, void> {
  componentWillMount() {
    this.props.getProperties();
  }

  showPropertyId = (property) => {
    alert(property.Id);
  }

  render() {
    const { properties, propertyIds } = this.props;
    return (
      <Container>
        <Column size={12}>
          {
            properties.map(property => 
              <div key={property.Id} className={'col-xs-3'}>
                <Card>
                  <CardImg top width="100%" src={property.DefaultPicture 
                    ? property.DefaultPicture.Url 
                    : ''} alt="Property Image" />
                  <CardBlock>
                    <CardTitle>{property.Address.BuildingName 
                      ? property.Address.BuildingName 
                      : property.Address.Street}
                    </CardTitle>
                    <CardSubtitle>£{property.AskingPrice.PriceValue}</CardSubtitle>
                    <CardText>RandomText here</CardText>
                    <Button onClick={() => this.showPropertyId(property)}>View</Button>
                  </CardBlock>
                </Card>
              </div>)
          }
        </Column>
      </Container>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyListPage);
