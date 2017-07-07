import React from 'react';
import {View, Text} from 'react-native';

export default ({players}) => {
    const renderListItem = (data, idx) => <Text key={`list_${idx}`}>{data.name}</Text>;

    return (
        <View>
            {players.map(renderListItem)}
        </View>
    )
}