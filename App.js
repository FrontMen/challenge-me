import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider, connect} from 'react-redux';
import {store} from './src/state/state';
import List from './src/components/list.component';

const App = ({players}) => {
    return (
        <View style={styles.container}>
            <List players={players}></List>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const ConnectedApp = connect(state => state)(App);

export default class AppRoot extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <ConnectedApp />
            </Provider>
        )
    }
}
