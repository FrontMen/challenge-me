import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import createStoreWithNavigator from './src/state/state';
import ListContainer from './src/components/list/list.container';
import ProfileComponent from './src/components/profile/profile.component';
import { addNavigationHelpers } from 'react-navigation';

const AppNavigator = StackNavigator({
  List: { screen: ListContainer },
  Profile: {
    path: '/players/:id',
    screen: ProfileComponent
  }
});

const store = createStoreWithNavigator(AppNavigator);

class App extends React.Component {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);
