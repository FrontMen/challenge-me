import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import ListContainer from '../components/list/list.container';
import ProfileComponent from '../components/profile/profile.component';

export const AppNavigator = StackNavigator({
    List: { screen: ListContainer },
    Profile: {
        path: '/players/:id',
        screen: ProfileComponent
    }
});
const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);