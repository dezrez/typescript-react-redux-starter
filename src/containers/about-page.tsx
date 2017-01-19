import * as React from 'react';
import {Container, Row, Column} from '../components/layout';
import Button from '../components/button';

import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

interface IAboutPageProps extends React.Props<any> {};

interface IAboutPageState {
  modal: boolean;
};

class AboutPage extends React.Component<IAboutPageProps, IAboutPageState> {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Column size={12}>
            <h2 className="caps">About Us</h2>
            <p>
              Rangle.io is a next-generation HTML5 design and development firm
              dedicated to modern, responsive web and mobile applications.
            </p>

            <Button onClick={this.toggle}>Modal Here</Button>
          </Column>
        </Row>
        {this.props.children}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Test Modal</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. 
              Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi 
              ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button buttonType="danger" onClick={this.toggle} outline={false}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
      </Container>
    );
  }
}

export default AboutPage;
