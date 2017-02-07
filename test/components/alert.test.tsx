import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { shallow, ShallowWrapper } from 'enzyme';
import Alert, {IAlertProps} from '../../src/components/alert';

describe('Alert Component', () => {
  let alertElement: ShallowWrapper<IAlertProps, {}>;
  beforeEach(() => {
    alertElement = shallow(<Alert>Loading...</Alert>);
  });

  it('should create an alert with the default text', () => {
    chai.assert.isNotNull(alertElement);
    chai.assert.strictEqual(alertElement.props().children, 'Loading...');
  });
});
