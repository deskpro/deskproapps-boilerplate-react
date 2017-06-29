import React from 'react';
import { createAppFromProps } from '@deskproapps/deskproapps-sdk-core';
import renderer from 'react-test-renderer';

import App from '../../main/javascript/App';

test('successfully render the application in initial state', done => {

  const contextProps = {
    // context
    type: 'ticket',
    entityId: '1',
    locationId: 'ticket-sidebar',
    tabId: 'tab-id',
    tabUrl: 'http://127.0.0.1'
  };

  const instanceProps = {
    appId: '1',
    appTitle: 'My First App',
    appPackageName: 'app-boilerplate-react',
    instanceId: '1'
  };

  const dpapp = createAppFromProps({ contextProps, instanceProps });
  const component = renderer.create(<App dpapp={dpapp} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  done();
});