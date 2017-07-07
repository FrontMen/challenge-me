import React from 'react';
import {View, Text} from 'react-native';

export default (props) => {
    return (
        <View>
            {props.players.map(player =>
                <Text>{player.name}</Text>
            )}
        </View>
    )
}