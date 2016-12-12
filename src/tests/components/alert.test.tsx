import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as chai from 'chai';
import * as TestUtils from 'react-addons-test-utils';
import Alert from '../../components/alert';

describe('Alert Component', () => {
  let renderer: TestUtils.ShallowRenderer;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<Alert>Loading...</Alert>);
  });

  it('should create an alert with the default text', () => {
    const alert = renderer.getRenderOutput();

    chai.assert.isNotNull(alert);
    chai.assert.strictEqual(alert.props.children, 'Loading...');
  });
});
