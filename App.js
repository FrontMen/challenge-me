import React from 'react';
import { Provider } from 'react-redux';
import store from './src/state/state';
import AppNavigator from './src/navigators/app.navigator';

export default () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);
