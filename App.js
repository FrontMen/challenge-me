import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/state/state';
import ListContainer from './src/components/list/list.container';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const App = () => (
    <View style={styles.container}>
        <ListContainer/>
    </View>
);

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
