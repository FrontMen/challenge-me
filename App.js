import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import store from './src/state/state';
import ListContainer from './src/components/list/list.container';
import ProfileComponent from './src/components/profile/profile.component';

const App = StackNavigator({
    List: {screen: ListContainer},
    Profile: {
        path: '/players/:name',
        screen: ProfileComponent
    }
});


export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
