import React from 'react';
import {View, Button} from 'react-native';

export default ({players, navigation}) => {
    const renderListItem = (player, idx) => (<Button
        onPress={() => navigation.navigate('Profile', {id: player.id})}
        key={`list_${idx}`}
        title={player.name}>
    </Button>);

    return (
        <View>
            {players.map(renderListItem)}
        </View>
    )
}