import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {getPlayerEntities} from '../../state/state';

const mapStateToProps = (state, ownState) => {
    const players = getPlayerEntities(state);
    const name = ownState.navigation.state.params.name;
    return {player: players[name]};
};

export default connect(mapStateToProps)(props =>
    <View>
        <Text>Profile</Text>
        <Text>{props.player.name}</Text>
    </View>
);