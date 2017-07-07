import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {getPlayerEntities} from '../../state/state';

const mapStateToProps = (state, ownState) => {
    const players = getPlayerEntities(state);
    const id = ownState.navigation.state.params.id;
    return {player: players[id]};
};

const mapDispatchToProps = (dispatch) => ({
    challenge: () => dispatch({
        type: 'CHALLENGE'
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(props =>
    <View>
        <Text>Profile</Text>
        <Text>{props.player.name}</Text>
        <Button title="CHALLANGE!" onPress={props.challenge}/>
    </View>
);